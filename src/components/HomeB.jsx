import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from "../assets/PizzaBanner.jpg";
import "../Style/Home.css"


const HomeB = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/Menu">
          <button>Order Now</button>
        </Link>

      </div>
    </div>
  )
}

export default HomeB
