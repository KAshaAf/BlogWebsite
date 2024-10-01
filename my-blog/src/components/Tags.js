import React from 'react';
import tags from '../data/tags';
import '../styles/Tags.css';

function Tags() {
  return (
    <div className='all-tags'>
      <h3>Tags</h3>
    <div className='tags'>
    {tags.map((tag, index) => (
      <div key={index} className='single-tag'>
        <p>{tag}</p>
    </div>
    ))}
    </div>
    </div>
   
    );
}

export default Tags;
