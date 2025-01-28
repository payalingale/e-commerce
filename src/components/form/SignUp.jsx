import React from "react";
import "./Form.css";
import rectangle from "../../assets/Rectangle.png";
import { Formik, useFormik, Field } from "formik";
import { useState } from "react";

 const SignUp = () => {
    return (
      <div className="container">
        <div className="label-div">
          <h2 className="login-label">Sign Up </h2>
          <img src={rectangle} alt="" className="rectangle-img" />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="input-box"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="input-box"
        />
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

export default SignUp