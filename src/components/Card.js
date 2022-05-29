import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';
const Card = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct,setSearchProduc]=useState('');

  const getProducts = async () => {
    const response = await fetch("https://oliomart.herokuapp.com/getproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        auth_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUwMTIyYjFmY2I2ODE3ZTVlODViZGYiLCJpYXQiOjE2NTM2NTc3NDl9.1PY0LfeVj8jwMx2urvgglEdjDBidBKxfx7mqb6euDxE",
        mode: "cors",
      },
    });

    setProducts(await response.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <input type="text" placeholder="Search ...." onChange={event=>setSearchProduc(event.target.value)} className="searchProduct bg-transparent text-primary"/>
    <section className="text-primary body-font ">
      <div className="container px-5 py-24 mx-auto ">
         <div className="flex flex-wrap -m-4 ">
         {
           products.filter((val)=>{
             if(searchProduct ===''){
               return val;
             }else if(val.pname.toLowerCase().includes(searchProduct.toLowerCase())){
               return val 
             }
           }).map((curElem) => {
               return (
                 <SingleCard card_id={curElem._id} imgSrc={curElem.pimage} productName={curElem.pname} productPrice={curElem.price}/>
                
          );
         })
      }
        </div>
     </div>
</section>
    </>
  )
}

export default Card;


 {/* <div className="lg:w-1/5 md:w-1/2 p-0 m-4 w-full border-2 border-trade gap-2" key={curElem._id}>
                    <Link to={`/productdetails/${curElem.puserid}`} className="block relative h-48 rounded overflow-hidden" key={curElem._id}>
                   <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={curElem.pimage}/>
                     </Link>
                   <div className="mt-3">
                   <h3 className="text-primary text-xs tracking-widest title-font mb-1 px-3 ">{curElem.pname}</h3>
                   <p className="mt-1 text-trade px-2 pb-2">{curElem.price}</p>
                   </div>
               </div> */}