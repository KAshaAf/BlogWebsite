import React from 'react';
import '../styles/TopSectionLayout.css';
import { Link } from 'react-router-dom';

const TopSectionLayout = ({ data }) => {
  return (
    <div className="top-section">
            <div className='two-blogs'>
            <Link to={`/post/${data[0].id}`}>
            <div className='single-blog blog-thumbnail-1'>
                    <h3>{data[0].title}</h3>
                    <p>{data[0].date}</p>
            </div>
            </Link>
            <Link to={`/post/${data[1].id}`}>
            <div className='single-blog blog-thumbnail-2'>
                <h3>{data[1].title}</h3>
                <p>{data[1].date}</p>
            </div>
            </Link>
            </div>
            <Link to={`/post/${data[2].id}`}>
            <div className="one-blog blog-thumbnail-3">
            <h3>{data[2].title}</h3>
            <p>{data[2].date}</p>
            </div>
            </Link>
            <div className='two-blogs'>
            <Link to={`/post/${data[3].id}`}>
                <div className='single-blog blog-thumbnail-4'>
                <h3>{data[3].title}</h3>
                <p>{data[3].date}</p>
                </div>
            </Link>
            <Link to={`/post/${data[4].id}`}>
                <div className='single-blog blog-thumbnail-5'>
                <h3>{data[4].title}</h3>
                <p>{data[4].date}</p>
                </div>
            </Link>
            </div>
          </div>
  );
};

export default TopSectionLayout;
