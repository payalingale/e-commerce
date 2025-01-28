import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='upper-footer'>
        <div className='left-side-footer'>
            <img src={logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='center-footer'>
            <h3>COMPANY</h3>
            <ul>
                <li className='footer-items'><a href="">Home</a></li>
                <li className='footer-items'><a href="">About Us</a></li>
                <li className='footer-items'><a href="">Delivery</a></li>
                <li className='footer-items'><a href="">Privacy policy</a></li>
            </ul>
        </div>
        <div className='right-side-footer'>
            <h3>GET IN TOUCH</h3>
            <ul>
                <li>+1-212-456-7890</li>
                <li>greatstackdev@gmail.com</li>
            </ul>
            
        </div>
        </div>
        <div className="lower-footer">
            <hr />
        <p>Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer