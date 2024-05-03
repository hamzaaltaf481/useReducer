import React from 'react';
import { useGlobalContext } from './context'
const Card = ({ product }) => {
  const { id, title, img, price} = product;
  const {addCart} = useGlobalContext();
  return (
    <div className="card w-288 mt-10  mb-10">
      <img src={img} className="card-img-top" alt={`Product image ${id}`} />
      <div className="card-body text-center">
        <h5 className="card-title font-bold capitalize">{title}</h5>
        <p className="card-text text-[gray] font-medium">Price: ${price}</p>
        <button className="btn btn-primary font-extrabold" onClick={() => addCart(id,title,img,price)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;