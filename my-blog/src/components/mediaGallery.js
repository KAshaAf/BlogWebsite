import '../styles/mediaGallery.css';

const MediaGallery = ({ media }) => {
  return (
   <div className="media-gallery">
    <div className="mg-top">
    <img src={ require('../assets/' + media[0]) } alt='media' className='blog-media'/>
    </div>
    <div className="mg-bottom">
    <img src={ require('../assets/' + media[1]) } alt='media' className='blog-media'/>
    <img src={ require('../assets/' + media[2]) } alt='media' className='blog-media'/>
    </div>
   </div>
  );
};

export default MediaGallery;