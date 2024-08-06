import '../styles/blogHeader.css';

const BlogHeader = ({ blog }) => {
    return (
     <div className="blog-header">
     <img src={ require('../assets/img_1.jpg.webp') } alt='header' className='header-img'/>
     <div className="header-content">
     <span>{blog.category}</span>
      <h1>{blog.title}</h1>
      <p>By {blog.author} - {blog.date}</p>
     </div>
     </div>
    );
  };

  export default BlogHeader;
  