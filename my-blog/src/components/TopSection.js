// ParentComponent1.jsx
import React from 'react';
import BlogStyle from './BlogStyle';
import blogs from '../data/blogs';

const TopSection = () => {

    return (
       <BlogStyle data={blogs} layoutType={"topSection"} />
      );
};

export default TopSection;
