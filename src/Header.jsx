import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

function Header(){
    const [btnName,setbtnName]=useState("Login")
    const onlinestatus=useOnlineStatus();

    return(
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL} alt="logo" />
                {/* <h2>cutta</h2> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlinestatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login" onClick={()=>{btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}}><Link to="">{btnName}</Link></button>
                </ul>
            </div>
        </div>
    );
}

export default Header