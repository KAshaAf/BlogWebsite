import React from 'react';
import blogs from '../data/blogs';
import { Link } from 'react-router-dom';
import '../styles/popularPosts.css';

function PopularPosts() {
  return (
    <div className='popular-posts'>
     <h3>Popular Posts</h3>
     <hr></hr>
      {blogs.slice(0,3).map(blog => (
        <Link to={`/post/${blog.id}`}>
        <div className='single-post'>
          <div className='blog-thumbnail'> 
          <img src={ require('../assets/' + blog.thumbnail) } alt='thumbnail' className='thumbnail-img'/>
          </div>
          <div className='blog-info'> 
          <h4>{blog.title}</h4>
          <p>{blog.date}</p>
          </div>
          </div>
          </Link>
      ))}
    </div>
  );
}

export default PopularPosts;
