import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../account/Login';
import Register from '../account/Register';
// import Slider from '../slider/Slider';

const Home: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/' ? <Login /> : <Register />
      }
      {/* <Slider/> */}
    </>
  )
}

export default Home
