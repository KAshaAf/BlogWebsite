// ParentComponent1.jsx
import React from 'react';
import BlogStyle from './BlogStyle';
import blogs from '../data/blogs';

const MiddleSection = () => {

    return (
       <BlogStyle data={blogs} layoutType={"middleSection"} />
      );
};

export default MiddleSection;
