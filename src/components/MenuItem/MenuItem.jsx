import React from 'react';
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import './menuItem.scss'



const MenuItem = ({title, number, icon}) => {
  return (
    <div className="menuitem">
      <div className='title'>
        {/*<svg className='profile' width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*  <path d="M10 11.25C13.1562 11.25 15.7143 8.73193 15.7143 5.625C15.7143 2.51807 13.1562 0 10 0C6.84375 0 4.28571 2.51807 4.28571 5.625C4.28571 8.73193 6.84375 11.25 10 11.25ZM7.95982 13.3594C3.5625 13.3594 0 16.8662 0 21.1948C0 21.9155 0.59375 22.5 1.32589 22.5H18.6741C19.4062 22.5 20 21.9155 20 21.1948C20 16.8662 16.4375 13.3594 12.0402 13.3594H7.95982Z" fill="black"/>*/}
        {/*</svg>*/}
        {icon}
        <span>{title}</span>
      </div>


      {
        number && <NotificationNubmer number={number}/>
      }

    </div>
  );
};

export default MenuItem;
