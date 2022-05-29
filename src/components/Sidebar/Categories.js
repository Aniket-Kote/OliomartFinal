import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


const Categories = () => {
  return (
  <>
<Card/>

    <div>
        <div className="categoriesList ">
        <span className="text-primary text-xl">Categories</span>
        <div className="horizontalLine"></div>
        <nav className="flex   flex-col text-left text-base text-primary">
         
         <Link to="/packagefood"  className=" hover:text-trade   categoriesType">
           Package Food
         </Link>
         <Link to="/jwel"  className=" hover:text-trade   categoriesType"> Jwellery </Link>
         <Link to="/fashion" className=" hover:text-trade   categoriesType"> Fashion </Link>
         <Link to="/handicraft" className=" hover:text-trade   categoriesType"> Handicrafts </Link>
         <Link to="/beauty" className=" hover:text-trade   categoriesType"> Beauty Products </Link>
      
     </nav>
     
        </div>
    </div>
  </>
  );
};

export default Categories;
