import React from 'react';
import TopSectionLayout from './topSectionLayout';
import MiddleSectionLayout from './middleSectionLayout';
import BottomSectionLayout from './bottomSectionLayout';

const BlogStyle = ({ data, layoutType }) => {
  const renderLayout = () => {
    switch (layoutType) {
      case 'topSection':
        return (
          <TopSectionLayout data={data} />
        );
      case 'middleSection':
        return (
            <MiddleSectionLayout data={data} />
        );
        case 'bottomSection':
        return (
          <BottomSectionLayout  data={data}/>
        );
      default:
        return (
          <h3>No Blogs to show at the moment.</h3>
        );
    }
  };

  return <div>{renderLayout()}</div>;
};

export default BlogStyle;
