import '../styles/blogHeader.css';

const BlogHeader = ({ blog }) => {
    return (
     <div className="blog-header">
     <img src={ require('../assets/img_1.jpg.webp') } alt='header' className='header-img'/>
     <div className="header-content">
     <div className='category-tag'>
      {blog.category.map(cat => (
        <p style={{ color: 'white', backgroundColor: cat.color, padding: '5px', borderRadius: '5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
            {cat.name}
        </p>
        ))}
      </div>
      <h1>{blog.title}</h1>
      <p>By {blog.author} - {blog.date}</p>
     </div>
     </div>
    );
  };

  export default BlogHeader;
  