import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
const Product = () => {
  return (
    <>
    <div className="flex">



    <div>
    <Sidebar/>
    </div>
    <div className="w-full h-screen">
        <div className="text-lg text-primary m-2 border-solid border-b-trade border-transparent border-2 w-11/12">All Products</div>
        <div >
        <Card/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
