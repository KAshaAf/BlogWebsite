import React from 'react';
import '../styles/CategoryInfo.css';

const CategoryInfo = ({ categoryName, categoryDescription }) => {
    return (
        <div className="category-info">
         <h3>Category</h3>
         <h1>{categoryName}</h1>
         <p>{categoryDescription}</p>
        </div>
      );
};

export default CategoryInfo;