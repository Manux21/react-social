import React from 'react';
import './navbar.scss'
import Logo from '../../svg/logo.svg'
import {Link} from "react-router-dom";
import searchIcon from '../../svg/search.svg'
import themeChange from '../../svg/themeChange.svg'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import AvatarMike from '../../img/Avatar.png'
import Polygon from '../../svg/Polygon.svg'
import {useContext} from 'react';
import {DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {

  const { toggle } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/'>
          <svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.109482V27.8903C20.7342 25.9177 28.0365 8.51131 29.0959 0.0546875C27.2146 0.0729523 22.8164 0.0985231 20.274 0.0546875C18.2575 11.8026 11.9087 16.6757 8.9863 17.6437V0.109482H0Z" fill="#443DFF"/>
            <path d="M18.9043 20.4384V28.0548C39.6824 25.7315 46.9591 8.38356 48.0002 0H39.1783C36.1974 15.737 24.4203 20.1826 18.9043 20.4384Z" fill="#443DFF"/>
          </svg>
        </Link>

        <div className="search">
          <input type="text" placeholder='Search'/>
          <img src={searchIcon} alt="searchIcon"/>
        </div>


      </div>

      <div className="right">
        <svg onClick={toggle} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 18C27 13.0312 22.9688 9 18 9V27C22.9688 27 27 22.9688 27 18ZM30 18C30 24.6281 24.6281 30 18 30C11.3719 30 6 24.6281 6 18C6 11.3719 11.3719 6 18 6C24.6281 6 30 11.3719 30 18Z" fill="black"/>
        </svg>

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
