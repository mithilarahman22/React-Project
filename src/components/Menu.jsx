import React from 'react'
import {MenuList} from "../Helper/MenuList";
import MenuItem from "../components/MenuItem";
import "../Style/Menu.css";


const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className='menuList'>
        {MenuList.map(({image,name,price},key) =>(
          <MenuItem
           key={key}
           image={image}
           name={name}
           price={price}
          />
        ))}
      
      </div>
    </div>
  )
}

export default Menu

