import React from 'react';
import './friendRequests.scss'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";
import RequestItem from "../RequestItem/RequestItem";

const FriendRequests = () => {
  return (
    <div className='friendRequests'>
      <div className="header">
        <h3>Friend requests</h3>
        <NotificationNubmer number={2}/>
      </div>

      <RequestItem/>
      <RequestItem/>
    </div>
  );
};

export default FriendRequests;
