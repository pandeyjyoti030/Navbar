import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content'>
            <p><Link className="nav-link" to="/First">Home</Link></p>
            <p><Link className="nav-link" to="/Second">About</Link></p>      
            <p><Link className="nav-link" to="/Third">Contact</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar