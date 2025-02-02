import React from "react";
import Navbar from "../components/navbar/Navbar";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Its a home page</h1>
      <Subscription />
      <Footer />
    </>
  );
};

export default Home;
