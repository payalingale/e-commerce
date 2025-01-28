import React from "react";
import './Form.css'
import rectangle from '../../assets/Rectangle.png'

const Form = () => {
  const Login = () => {
    return (
      <div className="container">
        <div className="label-div">
        <h2 className="login-label">Login </h2>
        <img src={rectangle} alt="" className="rectangle-img"/>
        </div>
        <input type="email" name="email" id="email" placeholder="email" className="input-box"/>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="input-box"
        />
        <div className="user-actions">
          <input type="button" value="Forgot Password?" />
          <input type="button" value="Create account" />
        </div>
        <button className="signInBtn">Sign in</button>
      </div>
    );
  };
  const SignUp = () => {
    return (
      <div className="container">
        <div className="label-div">
        <h2 className="login-label">Sign Up </h2>
        <img src={rectangle} alt="" className="rectangle-img"/>
        </div>
        <input type="text" name="name" id="name" className="input-box" placeholder="Name"/>
        <input type="email" name="email" id="email" placeholder="Email" className="input-box"/>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input-box"
        />
        <button className="signInBtn">Create</button>
      </div>
    );
  };

  return <div className="form-container">{<SignUp />}</div>;
};

export default Form;
