import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='subscription-container'>
        <p className='subscribe-title'>Subscribe now & get 20% off</p>
        <h5 className='subscription-describe'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
        <div className="subscribe-div">
          <input type="email" name="email" id="enter-email" placeholder='Enter your email id'className='input-box'/>
          <input type="button" value="SUBSCRIBE" className='input-box' id='subscribe-btn'/>
        </div>
    </div>
  )
}

export default Subscription