import React from 'react';
import '../styles/IndividualBlog.css';
import { Link } from 'react-router-dom';

const IndividualBlog = ({ item }) => {
  return (
    <div className='individual-blog'>
        <img src={ require('../assets/' + item.thumbnail) } alt='thumbnail' className='thumbnail-img'/>
        <p className='category'>{item.category[0]} </p>
        <h2>{item.title}</h2>
        <p className='blog-details'>By {item.author} - <span>{item.date}</span></p>
        <p className='blog-content'>{item.bio}</p>
        <Link to={`/post/${item.id}`}>Read More</Link>
    </div>
  );
};

export default IndividualBlog;
