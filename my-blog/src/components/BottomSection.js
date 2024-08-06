// ParentComponent1.jsx
import React from 'react';
import BlogStyle from './BlogStyle';
import blogs from '../data/blogs';

const BottomSection = () => {

    return (
       <BlogStyle data={blogs} layoutType={"bottomSection"} />
      );
};

export default BottomSection;
