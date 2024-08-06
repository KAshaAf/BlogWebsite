import '../styles/footer.css'; // Import the CSS file 

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <div className="col-1">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
                </div>
                <div className="col-2">
                <ul>
                <li>About Us</li>
                <li>Advertise</li>
                <li>Careers</li>
                <li>Subscribes</li>
                </ul>
                </div>
                <div className="col-3">
                <ul>
                <li>Travel</li>
                <li>Lifestyle</li>
                <li>Sports</li>
                <li>Nature</li>
                </ul>
                </div>
                <div className="col-4">
                <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                </ul>
                </div>
            </div>
        </footer>
        );
}

export default Footer;