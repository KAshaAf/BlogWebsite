// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';
import Comments from './comments';
import BottomSection from './BottomSection';
import NewsLetter from './newsLetter';

function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found!</h2>;
  }

  return (
    <div>
      <img src={ require('../assets/' + blog.thumbnail) } alt='thumbnail' className='thumbnail-img'/>
      <span>{blog.category}</span>
      <h1>{blog.title}</h1>
      <p>{blog.bio}</p>
      <p>By {blog.author} - {blog.date}</p>
      <hr></hr>
      <Comments />
      <NewsLetter />
      <BottomSection />
    </div>
  );
}

export default BlogPost;