import React from 'react';
import './stories.scss'

const Stories = () => {

  //temp

  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
      avatar: 'https://www.themarysue.com/wp-content/uploads/2014/06/HanSolo.jpg'
    },

    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
      avatar: 'https://www.themarysue.com/wp-content/uploads/2014/06/HanSolo.jpg'
    },

    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
      avatar: 'https://www.themarysue.com/wp-content/uploads/2014/06/HanSolo.jpg'
    },

    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
      avatar: 'https://www.themarysue.com/wp-content/uploads/2014/06/HanSolo.jpg'
    },

    {
      id: 5,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
      avatar: 'https://www.themarysue.com/wp-content/uploads/2014/06/HanSolo.jpg'
    },
  ]

  return (
    <div className='stories'>
      {stories.map(story => (
        <div className='story'>
          <img src={story.img} alt=""/>
          <img className='icon' src={story.avatar} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default Stories;
