import React from 'react';
import './requestitem.scss'
import AvatarMike from "../../img/Avatar.png";
import Polygon from "../../svg/Polygon.svg";
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";

const RequestItem = () => {
  return (
    <div className='request'>
      <div className="user">
        <img src={AvatarMike} alt="Avatar"/>
        <span>Han Solo</span>
      </div>

      <div className="buttons">
        <NotificationNubmer/>
        <NotificationNubmer/>
      </div>

    </div>
  );
};

export default RequestItem;
