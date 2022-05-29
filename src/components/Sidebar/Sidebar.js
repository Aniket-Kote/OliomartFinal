import React from "react";
import ProductSearch from "./ProductSearch";
import Caregories from "./Categories";
import Package from "./tempPages/Package";
import Jwellery from "./tempPages/Jwellery";
import Fashion from "./tempPages/Fashion";
import Beauty from "./tempPages/Beauty";
import Handicraft from "./tempPages/Handicraft";
import MoreOptions from "../Sidebar/Options/MoreOptions";
import { Route, Routes } from "react-router-dom";
import { Card } from "react-bootstrap";


const Sidebar = () => {
  return (
    <>
      <div className="sidebarComponent">



        {/* <ProductSearch /> */}
        <Caregories />
        <Routes>
        <Route path="/packagefood" element={<Package />} />
        <Route path="/jwel" element={<Jwellery />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/handicraft" element={<Handicraft />} />
        <Route path="/beauty" element={<Beauty />} />        
      </Routes>
      <MoreOptions/>
      </div>
    </>
  );
};

export default Sidebar;
