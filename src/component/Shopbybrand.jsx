// Shopbybrand.js
import React, { useContext } from 'react';
import CartContext from './CartContext';
import '../css/Shopbybrand.css';

const Shopbybrand = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item); // Debugging line
    addToCart(item);
  };

  const items = [
    {
      brand: "LEGO",
      products: [
        {
          id: 1,
          name: "City Recycling Truck",
          price: 4000,
          image: "https://assets.ajio.com/medias/sys_master/root/20230516/I43a/6463b35842f9e729d78d85da/-473Wx593H-4931763560-multi-MODEL.jpg",
        },
        {
          id: 2,
          name: "Iron Man",
          price: 2200,
          image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664529/665/493664529-1_2804.webp",
        },
        {
          id: 3,
          name: "City Fire Station",
          price: 3500,
          image: "https://assets.ajio.com/medias/sys_master/root/20230516/qM3D/6463a0acd55b7d0c63b99d88/-473Wx593H-4931763500-multi-MODEL.jpg",
        },
        {
          id: 4,
          name: "Minifigures",
          price: 5100,
          image: "https://www.lego.com/cdn/cs/set/assets/blt78b39f5757ec88eb/40649_alt1.png",
        }
      ]
    },
    {
      brand: "Hasbro",
      products: [
        {
          id: 5,
          name: "Marvel Titan Hero",
          price: 1800,
          image: "https://m.media-amazon.com/images/I/71yli+JLbBL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 6,
          name: "Transformer",
          price: 2200,
          image: "https://samstoy.in/cdn/shop/files/Buy-Hasbro-Genuine-Transformers-Toys-Bumblebee-Autobot-Action-Figure-Deformation-Robot-Toys-For-Boys-Kids-Birthday-Gift-samstoy-in-near-me-in-Ahmedabad-gujarat-7274.jpg?v=1705215764",
        },
        {
          id: 7,
          name: "The Hulk",
          price: 3500,
          image: "https://www.juguetesdondino.com/media/catalog/product/cache/1/image/1e4fa0ea24d73fd1dac74155b48018b7/h/a/has07572.jpg",
        },
        {
          id: 8,
          name: "ZOID Dragon",
          price: 5100,
          image: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1601343360963-RDWFRBAQNC0CAQRGQOGM/image-asset.jpeg",
        }
      ]
    },
    {
      brand: "Hot Wheels",
      products: [
        {
          id: 9,
          name: "Racer Ride Car",
          price: 1800,
          image: "https://images-cdn.ubuy.co.in/66051b9028db312096719998-power-wheels-hot-wheels-racer.jpg",
        },
        {
          id: 10,
          name: "Car Track Set",
          price: 2200,
          image: "https://m.media-amazon.com/images/I/71QrxsyjtwL.jpg",
        },
        {
          id: 11,
          name: "Character Car",
          price: 3500,
          image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395251_sd.jpg",
        },
        {
          id: 12,
          name: "Monster Trucks",
          price: 5100,
          image: "https://m.media-amazon.com/images/I/714zsiETJyL._AC_UF1000,1000_QL80_.jpg",
        }
      ]
    }
  ];
  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Toys Categorized by Brands</h1>
      </div>
      {items.map((brandItem, index) => (
        <div key={index} className='zto2'>
          <h2>{brandItem.brand}</h2>
          <div className='zto2img'>
            {brandItem.products.map((product) => (
              <div className='zto2sub' key={product.id}>
                <div className='wishlist-icon'>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <div className='price-cart'>
                  <h3>Price: ₹{product.price}</h3>
                  <button
                    className="shopbutton"
                    type="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopbybrand;
