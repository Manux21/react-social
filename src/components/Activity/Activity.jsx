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
        <p>
          <span>Han Solo</span> have a new post
        </p>
      </div>

      <div className="user">
        <img src={AvatarMike} alt="Avatar"/>
        <p>
          <span>John Miles</span> changed their avatar
          picture
        </p>
      </div>




    </div>
  );
};

export default Activity;
