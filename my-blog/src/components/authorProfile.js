import authors from '../data/authors';
import React from 'react';
import '../styles/authorProfile.css'; 
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';
import IndividualBlog from "../components/IndividualBlog";

function AuthorProfile () {
    const { id } = useParams();
    const author = authors.find(author => author.id === parseInt(id));
    console.log(author.name);

    const authorBlogs = blogs.filter(blog => blog.author === author.name);
    console.log(authorBlogs);

  return (
   <div className="author-profile">
    <header>
        <div className='author-intro'>
            <img src={ require('../assets/' + author.photo) } />
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
        </div>
    </header>
    <section className="featured-works">
        {authorBlogs.map((authorBlog) => (
          <IndividualBlog item={authorBlog} />
        ))}
    </section>
   </div>
  );
};

export default AuthorProfile;