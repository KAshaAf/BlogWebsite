import React from 'react';
import '../styles/BottomSectionLayout.css';
import { Link } from 'react-router-dom';

const BottomSectionLayout = ({ data }) => {
    return (
              <div className="bottom-section">
              <div className='right-side'>
              <div className='top-blog'>
              <Link to={`/post/${data[0].id}`}>
              <div className='single-blog blog-thumbnail-1'>
              <p>{data[0].category}</p>
              <h3>{data[0].title}</h3>
              <p>{data[0].date}</p>
              </div>
              </Link>
              </div>
              <div className='bottom-blogs'>
              <Link to={`/post/${data[2].id}`}>
              <div className="single-blog blog-thumbnail-2">
              <p>{data[2].category}</p>
              <h3>{data[2].title}</h3>
              <p>{data[2].date}</p>
              </div>
              </Link>
              <Link to={`/post/${data[3].id}`}>
                  <div className='single-blog blog-thumbnail-4'>
                  <p>{data[3].category}</p>
                  <h3>{data[3].title}</h3>
                  <p>{data[3].date}</p>
                  </div>
              </Link>
              </div>
              </div>
              <div className='left-side'>
              <Link to={`/post/${data[1].id}`}>
                  <div className='single-blog blog-thumbnail-5'>
                  <p>{data[1].category}</p>
                  <h3>{data[1].title}</h3>
                  <p>{data[1].date}</p>
                  </div>
              </Link>
              </div>
            </div>
    );
  };

  export default BottomSectionLayout;