import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderHome from '../components/HeaderHome';
// import HomeMini from '../assets/img/home/minimalist1.png';
// import HomeClass from '../assets/img/home/home-classic.png';
// import HomeDark from '../assets/img/home/home-dark.png';
// import HomeLaptop from '../assets/img/home/home-laptop.png';
// import Home9 from '../assets/img/home/home-image9.png';
// import Collection from '../assets/img/home/collection.png';
// import Projects from '../assets/img/home/projects.png';
// import Package from '../assets/img/home/package.png';

import IconAward from '../assets/img/icon-award.png';
import IconCommunity from '../assets/img/icon-community.png';
import IconReview from '../assets/img/icon-review.png';
import animal from '../assets/img/home/animal.png';
import architecture from '../assets/img/home/architecture.png';
import bw from '../assets/img/home/bw.png';
import nature from '../assets/img/home/nature.png';
import sport from '../assets/img/home/sport.png';
import bridge from '../assets/img/home/bridge.png';
import still from '../assets/img/home/still.png';
import automotive from '../assets/img/home/automotive.png';

import Footer from '../components/Footer';


function Home() {
  const [image, setImage] = useState('');
  const [toastPop, setToastPop] = useState(false);

  if (!toastPop && !localStorage.getItem('token')) {
    toast.dark(
      '👋🏻 Welcome to Photo Contest! Please login or signup to access the photographer area, enjoy!',
      {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setToastPop(true);
  }

  return (
    <>
      <HeaderHome headerHeight={165} />
      <div className="port-home">
        <div className='justify-center 
        h-full 
        bg-right-top 
        bg-cover 
        h-nav'>
          <div className='flex items-center justify-center w-full pt-10 text-lg text-center md:items-start md:text-xl md:pt-20 md:text-gray-700 text-nav-1 h-1/2'>
            <p className='w-fit backdrop-blur-sm md:backdrop-blur-none backdrop-opacity-95'>
              One Place for all world of <br />
              <span className='font-bold'>Great photo contest and awards</span>
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2 p-2 mt-10 md:mt-40 md:gap-14 md:flex-row'>
            <div className='w-full mb-2 rounded-md md:w-auto md:flex-col bg-opacity-30 bg-gray-50'>
              <div className='flex justify-center p-2'>
                <img src={IconAward} alt="Icon Award" className='self-center w-16 h-16' />
              </div>
              <div className='my-2 md:w-72 text-nav-1'>
                <p className='text-center text-white'>Enter contests to get your work seen around the world, and win prizes</p>
              </div>
            </div>
            <div className='w-full mb-2 rounded-md md:w-auto md:flex-col bg-opacity-30 bg-gray-50'>
              <div className='flex justify-center p-2'>
                <img src={IconCommunity} alt="Icon Award" className='self-center w-16 h-16' />
              </div>
              <div className='my-2 md:w-72 text-nav-1'>
                <p className='text-center text-white'>Take part with a global community of photographers of all levels</p>
              </div>
            </div>
            <div className='w-full mb-2 rounded-md md:w-auto md:flex-col bg-opacity-30 bg-gray-50'>
              <div className='flex justify-center p-2'>
                <img src={IconReview} alt="Icon Award" className='self-center w-16 h-16' />
              </div>
              <div className='my-2 md:w-72 text-nav-1'>
                <p className='text-center text-white'>Get feedback from the world’s leading photographers and the crowd</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-32 text-lg font-bold text-yellow-600 md:text-4xl md:h-72'>
          ENTER A CONTEST FOR FREE NOW
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 p-3 h-full bg-gradient-to-tl from-black via-indigo-200 to-sky-800 gap-5'>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Animal</p>
            <img 
            src={animal} 
            alt="Animal" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Architecture</p>
            <img 
            src= {architecture}
            alt="Architecture" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Bw</p>
            <img 
            src={bw}
            alt="BW" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Nature</p>
            <img 
            src={nature}
            alt="Nature" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Sport</p>
            <img 
            src={sport}
            alt="Sport" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Bridge</p>
            <img 
            src={bridge}
            alt="Bridge" className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Still-life</p>
            <img 
            src={still}
            alt="still" 
            className='absolute w-full h-52 object-cover' />
          </div>
          <div className="relative flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Automotive</p>
            <img 
            src={automotive}
            alt="Automotive" 
            className='absolute w-full h-52 object-cover' />
          </div>
        </div>
        <div className='flex items-center justify-center py-4'>
          <button className='bg-gradient-to-r from-yellow-500 to-black text-white text-4xl px-3 py-2 '>See more open contest</button>
        </div>
        <div className='flex items-center justify-center py-4 mb-8'>
          <p className='text-lg font-bold text-yellow-600 md:text-4xl'>CHECK OUT SOME OUR COMMUNITY PHOTOS</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 p-3 h-52 bg-gradient-to-tl from-black via-indigo-200 to-sky-800 gap-5'>
          <div className="relative -top-8 flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Sport</p>
            <img src="https://s3-alpha-sig.figma.com/img/805b/9b02/d91056da8ccd5814780943654ff5c041?Expires=1646611200&Signature=UTY3j6JSz93n4Lrxl5f3DR6EJoELezit~o8GPA7yLf2iQ8A7GcEeXIZZaUebtxoRqlh0R16bGHkBmdLDA20S7vUzAoAt~xp~L8~rLXfWwil2-NDUqu4dtU5QSxi47bWoPWsbILdo5X8HKbVxGvl~K9S-3PUOJR6KboUyTpvpPltlT~FwYBO0a9p~1qa1TABHw5j97K1gqN4Sq3mamw~VrN5a1cRCTooLDb3zDB~Zo1Zejo0JeKsHL8QNyLzgdNabTWy-rBLXLT-K7g5Yoqlbz-Itd0uY~X35PJJFVsZgdDqOB9tqsfAKbf4Q-rpB5BeIgCuzgmzL3TLKeQ-VPviUpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Sports" className='absolute w-full h-52 object-cover' />
                <img src={IconAward} alt="Icon Award" className=' z-10 absolute bottom-0 right-auto w-16 h-16' />
          </div>
          <div className="relative -top-8 flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>People</p>
            <img src="https://s3-alpha-sig.figma.com/img/808b/c8b0/13558926baaea7dd41f814b63d8d0e93?Expires=1646611200&Signature=GE7w9Fn1rM8ssWuH751y1y91W5arlpng1T7cIosCapMbBltHspyFmSfABQhLErCKd57n1Iq9mmPAykrh7SNFtT1QTspxPvgZu2zPBB8NVcdmv1Gv6skSjF3ZtFdzVq3neu8s4ZZZF6HMgWcL3I075FpeNWq8kpLf0z9Te-xzr5KrIT9B78~Q716~ICGGvLeQoQCBheLtEHjOvN~x0n-KVGmShFf7XhVBudK2Vf8bXn6egHEjY6z0Nu6sB7tkHgr2FD9ZD~vlFRt7OI~uWc-lYVcYbY9vpZ1-4-5CVwMnO0ant5ivvG-SlmxuL6R~jitqYGJzSGmCsHKGHayGZGsAtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="People" className='absolute w-full h-52 object-cover' />
            <img src={IconAward} alt="Icon Award" className=' z-10 absolute bottom-0 right-auto w-16 h-16' />
          </div>
          <div className="relative -top-8 flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>City night</p>
            <img src="https://s3-alpha-sig.figma.com/img/b679/5ede/9592ac61256add1dde4319638ba16331?Expires=1646611200&Signature=NKtQTzW1xuI3z5eVB7CbuQjD1iTpVih7Q8bx2f3muuDnHeQ6GduzZRhEH9H3~yyNAvo0sDuKpxFBAWctMR~YsC5Y8T3yXOD81INZAQnBRgWz~oeuryE42MeLlIOjUQBCOnBT-NiVWzD77Gsd2qCkfoOijWRiYDcY45IQvQc37YOtXyJwixayU0MD7Djr1AZhS0bqX-jj~J0WTRoRqUDcOw4k6MHGcnQd42PbD1kgkUQiYXu6qENbqztsJMmdX~2coVR84HKgNWOUeQVM7Px-98LyN9b7tycYXaCTYTPfJBKUieyro9VniLopzuxV9xepSi4Lp3LaY2UaznjY9TBRvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="City night" className='absolute w-full h-52 object-cover' />
            <img src={IconAward} alt="Icon Award" className=' z-10 absolute bottom-0 right-auto w-16 h-16' />
          </div>
          <div className="relative -top-8 flex items-center justify-center h-52 bg-white text-nav-1">
            <p className='z-10 text-center text-white font-bold'>Nature</p>
            <img src="https://s3-alpha-sig.figma.com/img/58d0/ea4e/ca88a66120b506f1c086b8752e644582?Expires=1646611200&Signature=HR-IGgWUTsY8vKxY70SdNSH5AcqmAb3cbeEYkEK10iUrKB7I7dxxWSl1o4enYho11~KXcEA3tXgnDcNFp6Wx9TZJVC6PgM6LvJkRexudHCi-9YQ~j5COEOTtrcH30JU7vw7Vlt7JpuVXsxzbAyEq-psfahek~J1HmQw5sga7UY0BxvWRDXKLnQvOYT5HqkSzg4gibQdblRmQiRsOolMmHEs~5FRA1lFH5phOexOssaagaNKQKRrJ1Z8k3Z5rl0QtFyBsSxRyEp0E96esWw36G55NJc9if2S5XiPZN3Pamo6WTfezQPFfSUMwlA9O6Dmp88XOsaMouuWGiuKYn~MjOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Car" className='absolute w-full h-52 object-cover' />
            <img src={IconAward} alt="Icon Award" className=' z-10 absolute bottom-0 right-auto w-16 h-16' />
          </div>
        </div>
        <div className='flex items-center justify-center py-4 m-3'>
          <button className='bg-gradient-to-r from-yellow-500 to-black text-white text-3xl px-5 py-1 '><Link to="/gallery/all">Gallery</Link></button>
        </div>
        <div className='justify-center bg-right-top bg-cover h-nav3 mb-20'>
          <div className='flex flex-col items-center justify-center w-full pt-10 text-lg text-center md:items-start md:text-xl md:pt-20 md:text-gray-700 text-nav-1 h-1/2'>
            <p className='text-4xl my-8 w-screen text-center'>Potraiture</p>
            <p className='font-bold w-screen text-center'>Ready to join the Portraiture community?</p>
            <p className='w-screen text-center'>Sign up to a world of great photo contest and awards, in one place. </p>
            <p className='w-screen text-center'>one place. </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-gradient-to-r from-yellow-500 to-black text-white text-3xl px-5 py-1 '><Link to="/register">Sign up now</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
