import React from "react";
import Navbar from "../components/navbar/Navbar";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";
import { useState ,useEffect} from "react";
import Login from "../components/form/Login";

//https://api.escuelajs.co/api/v1/products

const LoginPage = () => {
  const [loginData, setloginData] = useState({
    id:0,
    email:'',
    password:'',
    
});


useEffect(() => {
 loginData.email && alert(loginData.email)
}, [loginData.email])

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
