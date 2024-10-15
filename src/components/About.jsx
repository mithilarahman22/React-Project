import React from 'react'
import AboutBanner from "../assets/AboutBanner.jpg";
import '../Style/About.css';


const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'style={{ backgroundImage: `url(${AboutBanner})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur repellendus sequi atque temporibus quasi reprehenderit expedita odit et cupiditate alias totam doloribus animi deleniti nobis, distinctio consequuntur unde exercitationem mollitia iusto harum ullam delectus natus voluptates. Explicabo sunt aliquid similique magni. Beatae corrupti, totam veniam soluta accusantium est ipsum quod autem similique id quibusdam. Unde veritatis odit harum, necessitatibus incidunt quasi recusandae commodi in accusantium architecto vel, illum ad, eum explicabo maxime! Saepe consequatur cupiditate labore est architecto temporibus adipisci a error recusandae. Nemo dolorem odit ipsum, saepe ab praesentium esse tenetur alias voluptates consequuntur ea quas? Dolores, dolorem.</p>

      </div>
    </div>
  )
}

export default About

