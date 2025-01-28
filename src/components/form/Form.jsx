import React from "react";
import "./Form.css";
import rectangle from "../../assets/Rectangle.png";
import { Formik, useFormik, Field } from "formik";
import { useState } from "react";

const Form = (props) => {
let loginData=props.loginData
  let setloginData=props.setloginData

  const Login = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate:value=>{
        const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let errors = {};
      if (!value.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!value.password) {
        errors.password = "Required";
      } else if (passwordRegex.test(value.password)) {
        errors.password = "Invalid password";
      }
      return errors;
      },
      onSubmit: (values) => {
        setloginData({
          email:values.email,
          password:values.password
        });
        console.log(loginData.email)
      },
    });
 

    return (
      <div className="container">
        <div className="label-div">
          <h2 className="login-label">Login </h2>
          <img src={rectangle} alt="" className="rectangle-img" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="input-box"
            onChange={formik.handleChange}
            
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{color:'red'}}>{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input-box"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
             {formik.errors.password ? ( <div style={{color:'red'}}>{formik.errors.password}</div>
          ) : null}
          <div className="user-actions">
            <button className="forgot-pwd">Forgot Password?</button>
           <Link to='/signup'> <button className="create-account-btn">Create account</button></Link>
          </div>
          <button className="signInBtn" type="submit" >
            Sign in
          </button>
        </form>
      </div>
    );
  };
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

  return <div className="form-container">{<Login />}</div>;
};

export default Form;
