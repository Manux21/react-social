import React from 'react';
import './post.scss'
import {Link} from "react-router-dom";
import AvatarMike from "../../img/Avatar.png";

const Post = ({post}) => {
  return (
    <div className='post'>
      <div className="container">
        <div className='user'>
          <div className="userInfo">
            <img src={AvatarMike}alt=""/>
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration: 'none', color: "inherit"}}>
                <span className='name'>{post.name}</span>
              </Link>
                <span className='date'>5 minutes ago</span>
            </div>
          </div>
        </div>

        <div className='content'>
          <p>{post.des}</p>
          <img src={post.img} alt=""/>
        </div>
        <div className='info'></div>
      </div>
    </div>
  );
};

export default Post;
