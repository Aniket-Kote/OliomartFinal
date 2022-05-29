import React from "react";
import { Link } from 'react-router-dom';

const SingleCard = (props) => {
  return (
    <>
    
      <div className="lg:w-1/5 md:w-1/2 p-0 m-4 w-full border-2 border-trade gap-2">
        <Link
          to={`/productdetails/${props.card_id}`}
          className="block relative h-48 rounded overflow-hidden"
          key={props.card_id}
        >
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={props.imgSrc}
          />
        </Link>
        <div className="mt-3">
          <h3 className="text-primary text-xs tracking-widest title-font mb-1 px-3 ">
            {props.productName}
          </h3>
          <p className="mt-1 text-trade px-2 pb-2">{props.productPrice}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
