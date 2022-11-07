import React from 'react';
import './Widget.scss'
import NotificationNubmer from "../NotificationNumber/NotificationNubmer";

const Widget = (children) => {
  return (
    <div className='widget'>
      <h3>Friend requests</h3>
      <NotificationNubmer number={1}/>
    </div>
  );
};

export default Widget;
