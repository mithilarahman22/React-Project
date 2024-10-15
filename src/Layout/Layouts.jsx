import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';

 const Layouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layouts
