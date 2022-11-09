import React from 'react';
import './Online.scss'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import AvatarMike from "../../img/Avatar.png";

const Online = () => {
  return (
    <div className='online'>
      <div className="header">
        <h3>Online</h3>
        <NotificationNubmer number={1}/>
      </div>

      <div className="user">
        <img src={AvatarMike} alt="Avatar"/>
        <p>
          <span>Han Solo</span>
        </p>
      </div>

      <div className="user">
        <img src={AvatarMike} alt="Avatar"/>
        <p>
          <span>John Miles</span>
        </p>
      </div>

    </div>
  );
};

export default Online;
