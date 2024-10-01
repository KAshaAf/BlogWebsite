import React from 'react';
import '../styles/IndividualBlog.css';
import { Link } from 'react-router-dom';

const IndividualBlog = ({ item }) => {
  return (
    <div className='individual-blog'>
        <img src={ require('../assets/' + item.thumbnail) } alt='thumbnail' className='thumbnail-img'/>
        <div className='category-tag'>
          {item.category.map( cat => (
            <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                {cat.name}
            </p>
            ))}
        </div>
        <h2>{item.title}</h2>
        <p className='blog-details'>By {item.author} - <span>{item.date}</span></p>
        <p className='blog-content'>{item.bio}</p>
        <Link to={`/post/${item.id}`}>Read More</Link>
    </div>
  );
};

export default IndividualBlog;
