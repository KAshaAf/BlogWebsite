import React from 'react';
import '../styles/MiddleSectionLayout.css';
import IndividualBlog from './IndividualBlog';

const MiddleSectionLayout = ({ data }) => {
    return (
        <div className='middle'>
         <h1>Recent Posts</h1>
        <div className="middleSection">
          <div className="three-blogs">
          <IndividualBlog item={data[0]} />
          <IndividualBlog item={data[1]} />
          <IndividualBlog item={data[2]} />
          </div>
          <div className="three-blogs">
          <IndividualBlog item={data[3]} />
          <IndividualBlog item={data[0]} />
          <IndividualBlog item={data[1]} />
          </div>
          <div className="three-blogs">
          <IndividualBlog item={data[2]} />
          <IndividualBlog item={data[3]} />
          <IndividualBlog item={data[0]} />
          </div>
        </div>
        </div>
      );
};

export default MiddleSectionLayout;
