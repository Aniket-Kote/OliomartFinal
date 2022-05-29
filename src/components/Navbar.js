import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import Main from "../components/Main";
import Tutorial from "../components/Tutorial";
import About from "../components/About";
import Contact from "../components/Contact";
import AccountImg from "../Images/TestAccount.png";

import Product from "./Product";
import ProductDetails from "./Sidebar/ProductDetails/ProductDetails";


const Navbar = () => {
  return (
    <>
      
      
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to="/"  className="mr-5 hover:text-trade  text-primary" exact="true">
              Home
            </Link>

            <Link
              to="/tutorial"
              className="mr-5 hover:text-trade  text-primary"
            >
           
              Tutorial
            </Link>

            <Link to="/about" className="mr-5 hover:text-trade  text-primary">
           
              About
            </Link>

            <Link to="/contact" className="mr-5 hover:text-trade  text-primary">
           
              Contact
            </Link>
          </nav>

          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-primary lg:items-center lg:justify-center mb-4 md:mb-0"></a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="mr-3 bg-trade inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-secondary mt-4 md:mt-0">
              Sell On Olio
            </button>
            <img src={AccountImg} className="profileDemo" />
          </div>
        </div>
      </header>



      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:puserid" element={<ProductDetails/>}/>
      
      </Routes>
    </>
  );
};

export default Navbar;
