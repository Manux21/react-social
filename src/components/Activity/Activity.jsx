import React from 'react';
import './Activity.scss'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import AvatarMike from "../../img/Avatar.png";

const Activity = () => {
  return (
    <div className='activity'>
      <div className="header">
        <h3>Activity</h3>
        <NotificationNubmer number={1}/>
      </div>

      <div className="user">
        <img src={AvatarMike} alt="Avatar"/>
        <span>Han Solo</span>
      </div>

      <span>have a post</span>
    </div>
  );
};

export default Activity;
