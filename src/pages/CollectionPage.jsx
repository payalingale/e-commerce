import React from "react";
import Navbar from "../components/navbar/Navbar";
import Collection from "../components/collections/Collection";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";
import { productList } from "../services/productList";

const CollectionPage = () => {


  return (
    <div>
      <Navbar />
      <Collection productData={productList} />
      <Footer />
    </div>
  );
};

export default CollectionPage;
