import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram,BsWhatsapp,BsTwitter} from "react-icons/bs"
const header = () => {
  return (
    <div>
    <div className="header">
    <div className="nav1">
             <Link to={""}>
             <img src='img/sa.PNG' className="logo" alt=""/>
              </Link>

            <div className="right">
               
                <span>Click here for</span>
                <Link to={"register"}>Register</Link> OR
                <Link to={"login"}>Login</Link>
            </div>
           
            <div className="social logo">
            <Link to={"facebook"}><FaFacebookF/></Link>
            <Link to={"insta"}><BsInstagram/></Link>
            <Link to={"whatsapp"}> <BsWhatsapp/></Link>
            <Link to={"twitter"}><BsTwitter/></Link>
            </div>

        </div>
        <div>
        
            <ul className="navbar">
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"Sales"}>Sales</Link></li>
                <li><Link to={"New In"}>New In</Link></li>
                <li><Link to={"About us"}>About us</Link></li>
                <li><Link to={"Contact us"}>Contact us</Link></li>
                <form action="" className="searchbar">
                    <input type="text" name="Search"/>
                    <button type="submit" className="normal"><i className="fa fa-search"></i></button>
                </form>
                <li><Link to={"account"}><i className="fa fa-user-o"><br/>User</i></Link></li>
                <li><Link to={"shopping bag"}><i className="fa fa-shopping-bag"><br/>Bag</i></Link></li>

            </ul>

        </div>

        </div>
        </div>
   
  )
}

export default header

