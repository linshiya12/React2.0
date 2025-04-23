import {Link} from 'react-router-dom'

const Footer = () => {

    const companyLinks = [
        "About Us" , "Swiggy Corporate" , "Careers" , "Team" , 
    ]
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="pic" />
                    <p>© 2025 Swiggy Limited</p>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        {/* <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                        <li>Minis</li>
                        <li>Pyng</li> */}
{
companyLinks.map((link)=>(
<Link to={link} key={link}>{link}</Link>
))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Available in:</h4>
                    <p>Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune</p>
                    <p>685 cities</p>
                </div>

                <div className="footer-section">
                    <h4>Life at Swiggy</h4>
                    <ul>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Social Links</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
