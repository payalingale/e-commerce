/* eslint-disable react/prop-types */
import React from "react";
import "./Form.css";
import rectangle from "../../assets/Rectangle.png";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import { getUserInfo } from "../../services/userData";

const Login = (props) => {
  const [errorMessage, seterrorMessage] = useState();
  const [openSnackBar, setopenSnackBar] = useState(false);
  const navigate = useNavigate();
  const validateFunc = (value) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let errors = {};
    if (!value.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = "Invalid email address";
    }
    if (!value.password) {
      errors.password = "Required";
    } else if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value.password
      )
    ) {
      errors.password = "Invalid password";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateFunc,
    onSubmit: async (values) => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/users?limit=100"
      );
      const data = response.data.filter((ele) => ele.email === values.email);
      console.log(data);

      if (data.length > 0) {
        const getUserData = await getUserInfo(data[0].id);
        getUserData.status === 200 ? navigate("/dashboard") : "";
      } else {
        seterrorMessage("User not found");
        setopenSnackBar(true);
      }
    },
  });

  return (
    <div className="form-container">
      <div className="container">
        <div className="label-div">
          <h2 className="login-label">Login </h2>
          <img src={rectangle} alt="" className="rectangle-img" />
        </div>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
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
            <div style={{ color: "red" }}>{formik.errors.email}</div>
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
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          <div className="user-actions">
            <button className="forgot-pwd">Forgot Password?</button>
            <Link to="/signup">
              {" "}
              <button className="create-account-btn">Create account</button>
            </Link>
          </div>
          <button className="signInBtn" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => setopenSnackBar(false)}
        message={errorMessage}
      ></Snackbar>
    </div>
  );
};

export default Login;
