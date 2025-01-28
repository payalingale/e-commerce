import React from "react";
import Navbar from "../components/navbar/Navbar";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";
import { useState } from "react";
import SignUp from "../components/form/SignUp";


//https://api.escuelajs.co/api/v1/products

const SignUpPage = () => {
  const [loginData, setloginData] = useState({
    email:'',
    password:''
});
  return (
    <div>
      <Navbar />
      <SignUp/>
      <Subscription />
      <Footer />
    </div>
  );
};

export default SignUpPage;
