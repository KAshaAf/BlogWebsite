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
              <div className='category-tag'>
              {data[0].category.map( cat => (
                <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                    {cat.name}
                </p>
                ))}
              </div>
              <h3>{data[0].title}</h3>
              <p>{data[0].date}</p>
              </div>
              </Link>
              </div>
              <div className='bottom-blogs'>
              <Link to={`/post/${data[2].id}`}>
              <div className="single-blog blog-thumbnail-2">
              <div className='category-tag'>
              {data[2].category.map(cat => (
                <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                    {cat.name}
                </p>
                ))}
              </div>
              <h3>{data[2].title}</h3>
              <p>{data[2].date}</p>
              </div>
              </Link>
              <Link to={`/post/${data[3].id}`}>
                  <div className='single-blog blog-thumbnail-4'>
                    <div className='category-tag'>
                {data[3].category.map(cat => (
                <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                    {cat.name}
                </p>
                ))}
                </div>
                  <h3>{data[3].title}</h3>
                  <p>{data[3].date}</p>
                  </div>
              </Link>
              </div>
              </div>
              <div className='left-side'>
              <Link to={`/post/${data[1].id}`}>
                  <div className='single-blog blog-thumbnail-5'>
                  <div className='category-tag'>
                    {data[1].category.map(cat => (
                        <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                            {cat.name}
                        </p>
                        ))}
                    </div>
                  <h3>{data[1].title}</h3>
                  <p>{data[1].date}</p>
                  </div>
              </Link>
              </div>
            </div>
    );
  };

  export default BottomSectionLayout;