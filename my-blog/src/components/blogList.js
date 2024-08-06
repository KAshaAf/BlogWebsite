import React from 'react';
import blogs from '../data/blogs';
import { Link } from 'react-router-dom';

function BlogList() {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <span>{blog.category}</span>
          <h2>{blog.title}</h2>
          <p>{blog.bio}</p>
          <p>By {blog.author} - {blog.date}</p>
          <Link to={`/post/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
