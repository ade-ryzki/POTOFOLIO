import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { URL_API } from '../helper/url';
import { toastError } from '../redux/actions/toastActions';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';
import Pagination from '@material-ui/lab/Pagination';

function GalleryAll() {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchDataGalleryAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchDataGalleryAll = async () => {
    setIsLoading(true);
    try {
      //ini yang server 1
      // let res = await axios.get(`${URL_API}/albums?skip=0&take=5`);
      // setCollections(res.data.data);

      //ini yang server 2
      let res = await axios.get(`${URL_API}/albums/galleryall`);
      console.log(res.data.result)
      setCollections(res.data.result);
      let page = await fetchDataPage();
      setPageNumber(Math.ceil(page / 15));
      setIsLoading(false);
    } catch (error) {
      dispatch(toastError(`${error.response.data.message}`));
      setIsLoading(false);
    }

    // setCollections(defaultBack);
  };

  const fetchDataPage = () => {
    return axios
      .get(`${URL_API}/albums/galleryall`)
      .then((res) => {
        return res.data.result;
      })
      .catch((err) => {
        dispatch(toastError(`${err.response.data.message}`));
      });
  };

  const pageChange = async (event, value) => {
    setPage(value);
    try {
      var res = await axios.get(
        // `${URL_API}/collection?limit=15&page=${value - 1}`
        `${URL_API}/photos/user`
      );
      setCollections(res.data.result);
    } catch (error) {
      dispatch(toastError(`${error.response.data.message}`));
    }
  };

  const galleryAllImage = () => {
    return collections.map((val, index) => {
      return (
        <div className="galleryall-cards" key={index}>
          <img
            src={val.path}
            alt="NoImageFound"
            onClick={() => onImageClick(val.id, val.theme)}
          />
          <div
            className="cards-text"
            onClick={() => onStudioClick(val.albumId)}
          >
            <div className="cards-text1">{val.title}</div>
            <div className="cards-text2">{val.name}</div>
            <div className="cards-text2">{val.updatedAt}</div>
          </div>
        </div>
      );
    });
  };

  const onImageClick = (id, theme) => {
    let themeLower = theme.toLowerCase();
    window.location = `/temp/${themeLower}/${id}`;
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
          <Pagination
            count={pageNumber}
            page={page}
            onChange={pageChange}
            shape="rounded"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GalleryAll;