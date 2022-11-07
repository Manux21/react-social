import React from 'react';
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import './menuItem.scss'



const MenuItem = ({title, number, icon}) => {
  return (
    <div className="menuitem">
      <div className='title'>
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
