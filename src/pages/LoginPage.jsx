import React from "react";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/form/Form";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";
import { useState } from "react";
import Login from "../components/form/Login";

//https://api.escuelajs.co/api/v1/products

const LoginPage = () => {
  const [loginData, setloginData] = useState({
    email:'',
    password:''
});
  return (
    <div>
      <Navbar />
      <Login loginData={loginData} setloginData={setloginData}/>
      <Subscription />
      <Footer />
    </div>
  );
};

export default LoginPage;
