import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram,BsWhatsapp,BsTwitter} from "react-icons/bs"
const footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="fcol">
            <h4>Contact</h4>
            <p> <strong>Address:</strong> 567 Welignton Road, Street 66, Lahore</p>
            <p> <strong>Phone:</strong> +927856439798</p>
            <p> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
    </div>
    <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
        <Link to={"facebook"}><FaFacebookF/></Link>
            <Link to={"insta"}><BsInstagram/></Link>
            <Link to={"whatsapp"}> <BsWhatsapp/></Link>
            <Link to={"twitter"}><BsTwitter/></Link>
        </div>
    </div>
    <div className="fcol">
        <h4>About</h4>
        <Link to={"About-us"}>About us</Link>
        <Link to={"d-i"}>Delievery Information</Link>
        <Link to={"p-p"}>Privacy Policy</Link>
        <Link to={"t-c"}>Terms & Conditions</Link>
        <Link to={"c-u"}>Contact Us</Link>
    </div>
    <div className="fcol">
        <h4>My Account</h4>
        <Link to={"login"}>Login</Link>
        <Link to={"bag"}>View Bag</Link>
        <Link to={"track-order"}>Track My Order</Link>
        <Link to={"help"}>Help</Link>
    </div>
    <div className="copyright">
        <p> © 2023 , TrendKA -React Nodejs Ecommerce Website</p>
    </div>
    </div>
    </div>
  )
}

export default footer

