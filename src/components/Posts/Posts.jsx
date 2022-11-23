import React from 'react';
import './posts.scss'
import Post from "../Post/Post";

const Posts = () => {

  //temp

  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      avatar: 'https://plus.unsplash.com/premium_photo-1668795180779-2bf36b4b2d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      des: 'Lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore lorem. Ut enim ad minim veniam',
      img: 'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },

    {
      id: 2,
      name: 'John Doe',
      userId: 2,
      avatar: 'https://plus.unsplash.com/premium_photo-1668795180779-2bf36b4b2d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      des: 'Lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore lorem. Ut enim ad minim veniam',
      img: 'https://images.unsplash.com/photo-1668934804631-e8337c891e65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Posts;
