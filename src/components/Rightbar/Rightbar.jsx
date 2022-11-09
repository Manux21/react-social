import React from 'react';
import './Rightbar.scss'
import MenuItem from "../MenuItem/MenuItem";
import FriendRequests from "../FriendRequests/FriendRequests";
import Activity from "../Activity/Activity";
import Online from "../Online/Online";


const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <FriendRequests/>
        <Activity/>
        <Online/>
      </div>
    </div>
  );
};

export default Rightbar;
