import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { URL_API } from '../helper/url';
import { toastError } from '../redux/actions/toastActions';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';
import Pagination from '@material-ui/lab/Pagination';

function HomePage() {
  const [collections, setCollections] = useState([]);
  const [userCollections, setUserCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [studioName, setStudioName] = useState('');
  const [studioImage, setStudioImage] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [albumsAll, storeAlbumsAll] = useState([])


  useEffect(() => {
    fetchDataGalleryAll();
  }, []);

  //buat dapetin gambarnya
  const fetchDataGalleryAll = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(`${URL_API}/photos?limit=500`);
      const albumsAll = res.data.result
      console.log(albumsAll)
      storeAlbumsAll(albumsAll)
      let numTotal = albumsAll.length
      setPageNumber(Math.ceil(numTotal / 15));
      let slicedAlbum = []
      slicedAlbum = albumsAll.slice(0, 15)

      setCollections(slicedAlbum);
      // let page = await fetchDataPage();

      let getUser = await fetchUser(albumsAll.user.profile.name);
      setStudioImage(getUser.profilePhoto);
      setStudioName(getUser.name);

      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        dispatch(toastError(`${error.response.data.message}`));
        console.log(error.response.data.message)
      } else {
        console.log('Error', error.message);
      }

      setIsLoading(false);
    }
  };

  const fetchUser = (idUser) => {
    return axios.get(`${URL_API}/users/profile/userid/${idUser}`).then((res) => {
      return res.data.result;
    });
  };

  //buat dapetin gambarnya
  const fetchDataUserAll = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(`${URL_API}/users`);
      const userAll = res.data.result
      console.log(userAll)

      let slicedUser = []
      slicedUser = userAll.slice(0, 3) //dibatasin cuman 3

      setUserCollections(slicedUser);
      // let page = await fetchDataPage();
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        dispatch(toastError(`${error.response.data.message}`));
        console.log(error.response.data.message)
      } else {
        console.log('Error', error.message);
      }

      setIsLoading(false);
    }
  };

  const userAllImage = () => {
    return userCollections.map((val, index) => {
      return (
        <div className="userall-cards" key={index}>
          <img
            src={val.path}
            alt="NoImageFound"
            onClick={() => onStudioClick(val.albumId)}
          />
          <div
            className="cards-text"
            onClick={() => onStudioClick(val.albumId)}
          >
            <div className="cards-text1">{val.title}</div>
            <div className="cards-text2">{val.name}</div>
          </div>
        </div>
      );
    });
  };






  // //fungsi untuk beda2 halaman
  // const pageChange = async (event, value) => {
  //   setPage(value);
  //   try {
  //     const numTotal = albumsAll.length
  //     let slicedAlbum = []
  //     if (numTotal > 15) slicedAlbum = albumsAll.slice(15 * (value - 1), 15 * value)
  //     setCollections(slicedAlbum);
  //   } catch (error) {
  //     dispatch(toastError(`${error.response.data.message}`));
  //   }
  // };

  //untuk mapping tampilan gambar
  const galleryAllImage = () => {
    return collections.map((val, index) => {
      var dt = new Date(val.updatedAt);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dtStr = dt.toLocaleDateString(undefined, options);
      return (
        <div className="homepageall-cards" key={index}>
          <div
            className="usernameCards-text"
            onClick={() => onStudioClick(val.albumId)}
          ></div>
            <div className="usernameCards-text1">{studioName}</div>
          <img
            src={val.path}
            alt="NoImageFound"
            onClick={() => onStudioClick(val.albumId)}
          />
          <div
            className="cards-text"
            onClick={() => onStudioClick(val.albumId)}
          >
            <div className="cards-text1">{val.title}</div>
            <div className="cards-text2">{val.name}</div>
            <div className="cards-text3">{dtStr}</div>
          </div>
        </div>
      );
    });
  };

  const onStudioClick = (idStudio) => {
    history.push(`/gallery/photographer/${idStudio}`);
  };

if (isLoading) {
    return (
      <>
        <HeaderHome />
        <div className="loader"></div>
      </>
    );
  }

  return (

    <div className="background-wrapper">
      <HeaderHome headerHeight={350} />
      <div className="galleryall-wrapper">
        <div className="gallery-title">Explore Photographer Gallery</div>
        <div className="galleryall-cards-container">{galleryAllImage()}</div>
        <div className="galleryall-pagination">
          {/* <Pagination
            count={pageNumber}
            page={page}
            onChange={pageChange}
            shape="rounded"
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default HomePage;
// {
//   return (
//     <>
//       <Header />
//       <div className='w-screen p-3 mt-20 text-center'>
//         <button className='mb-4 bg-gradient-to-r from-yellow-500 to-black text-white text-2xl px-4 py-2 '>Upload foto </button>
//         <p> Photos uploaded by photographers you follow are added to your feed.</p>
//         <p>Remember your photos will appear in your followers’ feeds too. A great way to get your work out there.</p>
//       </div>
//       <div className='flex p-5'>
//         <div className='w-4/6'>
//           <div className="w-full">
//             <div className='flex items-center space-x-2'>
//               <img src="https://s3-alpha-sig.figma.com/img/3e7e/77a8/d5a673d6759029a47828edc6e3e7fe4b?Expires=1646611200&Signature=GcOLjhuEalYD5Z74dAMYwAJJiMrcBW3ShcTeE~8jhPYTpcUJTC2BZxlEiU3J1-pUswTyoA2YVQybQVApcqNPJS0kKxqX2Xr7M2LcR6zl6MNQBYtlCD-tZ~FRTdoWiDpiUoDzGeVDNcoqjkM6iXA3yeRJp4RDFrO6bdm3NtApArGb87M7MQ3vJqmmLLdbmzeZzQLXYgUc7z3VX4Maz2fHf8-hFvYaPShBdjIG06P0SSvCeRpW2BAZuULLPEe6nJxZKcjlgXLG9T3DSzpYq5cCBFDYdusMyo~lSwK76MacHn-uFTHuUzfF9zazbdMLqDaq08IG7jrp99cMZlQV9KN8aQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Profile Picture" className='w-12 h-12 object-cover rounded-full' />
//               <p>Username1</p>
//             </div>
//             <div>
//             <img src="https://s3-alpha-sig.figma.com/img/704a/2866/beae9f0cb6d072f498fdc7276e4fd093?Expires=1646611200&Signature=Ddy9jkjJuJlYyAhAn~o9iQut17ANdm3om4Ds--uVpHc8gO50eWRBYGynjirOIV-10owzpQBCic0DWuBYpd~eg5PO8gmZGrEmd5tzZnOZrTyrRDLBzphtJvyVb0JDL2u8qvYEf0Bz5VrkPWACNXsnLtYP3vuvMNyLVEsAytbnghvlODGuQPfLX~O1NzQ9CyJtEKB-id2vVfe26XPo1MKP55c3v6qldrSyKR1COj~FH-9J42i0NXvyyuMivQpXEgwYMmJ30MYUsdMv644kgt~m7P2-awtFi3VPq6q61979Z8yMWZER9VGv-aTLTnvlrhxdK4nPHM6TQb6cJPE1onKADA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Picture" className='w-full object-cover p-2'/>
//             </div>
//             <div className='flex justify-between items-center'>
//               <div>
//                 <p className='text-2xl font-bold'>Justin & Stella</p>
//                 <p className='font-extralight text-gray-700 text-sm'>28 March 2021</p>
//               </div>
//               <div className='flex items-center space-x-2'>
//                 <img src="https://s3-alpha-sig.figma.com/img/b145/9443/ac6d68f49cb67db8d4b85c0dfed540ae?Expires=1646611200&Signature=Td3AECMoryshFPfb0Vf32vRNew5gOCXeO9Vbm07M7RArtnfPe~pqR7TFs2tF1erWSC~jkFbLSS5NUSf5KHASN~~2jUNx8iTI9GkJHKTLmOaJdC7x0wkk3g87sT~8YTp1tNmcvZQnDXOFyUMWyQaIVBB2nwAWs9dJVLTBh8i0ZWKequ7aM0QiJebmNlaD52FempFYfDPdBD7XwFE8n0n4Y9aHEPujRfxt-Eou8SLmUaY2dfKjEhs6vVgbRbka06X95WhawdyJjAgs~Dovvcvat4agnIqGyZKMDKEcxl7~l0kkYxbEkOWwe3qOdsA7-xuUDOt2WNNzQhct6glCW0XlTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className='w-7 h-7' alt="Love" />
//                 <p>2</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='w-2/6'>
//           test2
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;
