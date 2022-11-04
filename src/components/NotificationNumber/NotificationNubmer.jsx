import React from 'react';
import './notificationNumber.scss'

const NotificationNumber = ({number}) => {
  return (
    <div className='number'>
      {number}
    </div>
  );
};

export default NotificationNumber;
