import React from "react";
import "./Form.css";
import rectangle from "../../assets/Rectangle.png";
import { useFormik } from "formik";
import { addUser } from "../../services/userData";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Snackbar } from "@mui/material";

const SignUp = () => {
  const [error, seterror] = useState(null);
  const [openSnackBar, setopenSnackBar] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required";
        //   } else if (/^[A-Za-z ]*$/.test(values.name)) {
        //     errors.name = "Please enter valid name";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      // else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      if (!values.password) {
        errors.password = "Password is required";
      }
      //  else if (
      //     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      //       values.password
      //     )
      //   ) {
      //     errors.password =
      //       "Password must contain at least 8 characters, one letter, one number, and one special character";
      //   }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await addUser(
          values.name,
          values.email,
          values.password
        );
        if (response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        seterror(error.response?.data?.message);
        setopenSnackBar(true);
      }
    },
  });

  return (
    <div className="form-container">
      <div className="container">
        <div className="label-div">
          <h2 className="login-label">Sign Up </h2>
          <img src={rectangle} alt="" className="rectangle-img" />
        </div>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            id="name"
            className="input-box"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input-box"
            value={formik.values.email}
            onChange={formik.handleChange}
          />{" "}
          {formik.errors.name ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input-box"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
          <button className="signInBtn" type="submit">
            Create
          </button>
        </form>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => setopenSnackBar(false)}
        message={error}
      />
    </div>
  );
};

export default SignUp;
