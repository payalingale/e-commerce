import React from "react";
import Navbar from "../components/navbar/Navbar";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <h1>Its a dashboard page</h1>
      <Subscription />
      <Footer />
    </>
  );
};

export default Dashboard;
