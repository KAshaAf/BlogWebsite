import MediaGallery from "./mediaGallery";
import '../styles/blogContent.css';

const BlogContent = ({ media, content }) => {
    const contentItems = [];

    for (let i = 0; i < content.length; i++) {
        if(i == 2){
            contentItems.push(<MediaGallery media={media} />);
        } else {
            contentItems.push(
                <div key={i} className="content-para">
                    <p>{content[i]}</p>
                </div>
            );
        }
    }

    return (
     <div className="blog-content">
        {contentItems}
     </div>
    );
  };

  export default BlogContent;