import React from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search icon.png'
import user from '../../assets/profile-icon.png'
import cartBox from '../../assets/Vector.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="right-side">
            <img src={logo} alt="" />
        </div>
        <div className="center">
            <ul className='menu-items'>
                <li className='item'>HOME</li>
                <li className='item'>COLLECTION</li>
                <li className='item'>ABOUT</li>
                <li className='item'>CONTACT</li>
            </ul>
        </div>
        <div className="left-side">
            <img src={search} alt="" />
            <img src={user} alt="" />
            <img src={cartBox} alt="" />
        </div>
        {/* <hr /> */}
    </div>
  )
}

export default Navbar