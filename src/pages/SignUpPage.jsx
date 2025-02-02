import React from "react";
import Navbar from "../components/navbar/Navbar";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";
import { useState } from "react";
import SignUp from "../components/form/SignUp";
import { useEffect } from "react";
import { addUser } from "../services/userData";


//https://api.escuelajs.co/api/v1/products

const SignUpPage = () => {
//   const [signUpData, setsignUpData] = useState({
//     name:'',
//     email:'',
//     password:''
// });
// const [responseData, setresponseData] = useState(null)

// useEffect(() => {
//   signUpData.email && console.log("SignUp Data Changed:", signUpData);
// }, [signUpData])

// const handleClick = async (name,email,password) => {
//   try {
//     const response = await addUser(name,email,password);
//     if (response?.status === 201) {
//       setresponseData(response.data);
//       console.log("User registered successfully:", response.data);
//     } else {
//       console.log("Registration failed:", response);
//     }
//   } catch (error) {
//     console.error("Request failed:", error);
//   }
// };


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
