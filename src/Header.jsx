import { LOGO_URL } from "./utils/constants";
function Header(){

    return(
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL} alt="logo" />
                {/* <h2>cutta</h2> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header