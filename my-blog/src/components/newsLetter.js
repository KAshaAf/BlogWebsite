import '../styles/NewsLetter.css';

function NewsLetter() {
    return (
        <div className="news-letter">
            <h2>Subscribe to our newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit<br></br>nesciunt error illum a explicabo, ipsam nostrum.</p>
            <form className='nl-subscribe'>
            <input name="email" placeholder='Enter your email address' className='email'/>
            <button type="submit" className='subscribe-btn'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetter;