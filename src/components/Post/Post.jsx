import React from 'react';
import './post.scss'

const Post = ({post}) => {
  return (
    <div className='post'>
      <div className='user'></div>
      <div className='content'></div>
      <div className='info'></div>
    </div>
  );
};

export default Post;
