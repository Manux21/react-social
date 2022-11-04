import React from 'react';
import './navbar.scss'
import Logo from '../../svg/logo.svg'
import {Link} from "react-router-dom";
import searchIcon from '../../svg/search.svg'
import themeChange from '../../svg/themeChange.svg'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import AvatarMike from '../../img/Avatar.png'
import Polygon from '../../svg/Polygon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/'>
          <img src={Logo} alt=""/>
        </Link>

        <div className="search">
          <img src={searchIcon} alt="searchIcon"/>
          <input type="text" placeholder='Search'/>
        </div>


      </div>

      <div className="right">
        <img src={themeChange} alt="themeChange"/>
        <NotificationNubmer number={3}/>
        <div className="user">
          <img src={AvatarMike} alt=""/>
          <span>Mike Parker</span>
          <img className='polygon' src={Polygon} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
