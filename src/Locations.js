import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import ProductDetails from "./components/Sidebar/ProductDetails/ProductDetails";
import Tutorial from "./components/Tutorial";

const Locations = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Card />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:puserid" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Locations;
