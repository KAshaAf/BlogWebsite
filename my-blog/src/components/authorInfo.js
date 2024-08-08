import authors from '../data/authors';
import React from 'react';
import '../styles/authorInfo.css'; 
import { Link } from 'react-router-dom';

function AuthorInfo  ({ authorName }) {
    console.log(authorName);
    const authorInfo = authors.find(author => author.name.toLowerCase() === authorName);

  return (
   <div className="author-info">
    <img src={require(`../assets/${authorInfo.photo}`)} alt={authorInfo.name} className="author-photo" />
    <h3>{authorInfo.name}</h3>
    <p>{authorInfo.bio}</p>
    <Link to={`/`}>Read More</Link>
   </div>
  );
};

export default AuthorInfo;