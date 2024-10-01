import React from 'react';
import categories from '../data/categories';
import '../styles/Categories.css';

function Categories() {
  return (
    <div className='categories'>
      <h3>Categories</h3>
    <ul>
    {categories.map((category, index) => (
      <li key={index}>
        <p>{category.name} <span className='cat-count'>({category.count})</span></p>
        </li>
    ))}
    </ul>
    </div>
   
    );
}

export default Categories;
