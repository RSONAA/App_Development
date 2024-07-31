// ProductCard.js
import React, { useContext } from 'react';
import CartContext from './CartContext';
import "../css/ProductCard.css";

const ProductCard = ({ image, name, price, item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className='zto2sub'>
      <div className='wishlist-icon'>
        <i className="fa-solid fa-heart"></i>
      </div>
      <img src={image} alt="not found" />
      <h5>{name}</h5>
      <div className='price-cart'>
        <h3>Price: {price}</h3>
        <button className="shopbutton" type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


