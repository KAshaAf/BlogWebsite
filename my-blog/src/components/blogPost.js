// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';
import BottomSection from './BottomSection';
import NewsLetter from './newsLetter';
import BlogContent from './blogContent';
import '../styles/blogPost.css';
import BlogHeader from './blogHeader';
import AuthorInfo from './authorInfo';
import PopularPosts from './popularPosts';
import Categories from './Categories';
import Tags from './Tags';
import MetaInfo from './metaInfo';

function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found!</h2>;
  }

  return (
    <div className='blog-post'>
      <BlogHeader blog={blog} />
      <div className='bp-main-content'>
      <div className='bp-left'>
      <BlogContent media={blog.media} content={blog.content} />
      </div>
      <div className='bp-right'>
      <AuthorInfo authorName={blog.author.toLowerCase()} />
      <PopularPosts />
      <Categories />
      <Tags />
      </div>
      </div>
      <MetaInfo category={blog.category} tags={blog.tags}/>
      <NewsLetter />
      <BottomSection />
    </div>
  );
}

export default BlogPost;