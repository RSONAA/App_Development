import React, { useContext } from 'react';
import CartContext from './CartContext';
import '../css/Shopbychar.css'; // Ensure you have appropriate styles

const Shopbychar = () => {
  const { addToCart } = useContext(CartContext); // Access the addToCart function from context

  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
  };

  const items = [
    {
      brand: "Spiderman",
      products: [
        {
          id: 1,
          name: "Montessori Toy",
          price: 1800,
          image: "https://m.media-amazon.com/images/I/710Wh-nh7aL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          name: "Wooden Number Train",
          price: 2200,
          image: "https://m.media-amazon.com/images/I/71jqWFd-orL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          name: "ABC Pyramid",
          price: 3500,
          image: "https://lh3.googleusercontent.com/proxy/job54NTafJ7epgyMWIB1GESFJvH1AMYs9xlQo8TdII_ixcgdY_BuTbrK9Nj4TOLdCaxcAxdW5nKanG2XX7s6VfDQNtK8Y5yexXKYrFsFkkoInGooa7iM-2sJNXtLKR-lFq81LreDHIF4qAcUA4fzRAWV7S_XBNsxJjI6GI2TEllySeEVhs1jdyFZnerfzIdB",
        },
        {
          id: 4,
          name: "Piano Baby Gym",
          price: 5100,
          image: "https://www.lego.com/cdn/cs/set/assets/bltf0ab693c19bdebeb/40670_alt1.png?fit=crop&quality=80&width=600&height=600&dpr=1",
        }
      ]
    },
    {
      brand: "Barbie",
      products: [
        {
          id: 5,
          name: "Montessori Toy",
          price: 1800,
          image: "https://m.media-amazon.com/images/I/71P0BSKiWzL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 6,
          name: "Wooden Number Train",
          price: 2200,
          image: "https://hmadmin.hamleys.in/product/491232286/300/491636216-2.jpg",
        },
        {
          id: 7,
          name: "ABC Pyramid",
          price: 3500,
          image: "https://images.mattel.net/image/upload/w_360,c_scale/shop-emea-prod/files/vvi6os9sf84hv8ckrlgv_c067d7d0-cbc9-4ae3-a641-a45054090068.jpg?v=1718381051",
        },
        {
          id: 8,
          name: "Piano Baby Gym",
          price: 5100,
          image: "https://www.parents.com/thmb/eo5lLrDqiEqj7cPRa8i3H1jIJZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/barbie-doll-house-glam-getaway-portable-house-playset-71fdbc90915142fcbf5b63dd71b1d8fa.jpg",
        }
      ]
    },
    {
      brand: "Avengers",
      products: [
        {
          id: 9,
          name: "Montessori Toy",
          price: 1800,
          image: "https://m.media-amazon.com/images/I/81Bc2YHTb8L._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 10,
          name: "Wooden Number Train",
          price: 2200,
          image: "https://ew.com/thmb/RHJ111W2C2xyXRfH-_vzV0sNKC0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marvel-avengers-endgame-titan-hero-deluxe-hulk-6-inch-figure-in-pck-b317fc47503b420eac544f959639364c.jpg",
        },
        {
          id: 11,
          name: "ABC Pyramid",
          price: 3500,
          image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491568833/665/491568833-3.webp",
        },
        {
          id: 12,
          name: "Piano Baby Gym",
          price: 5100,
          image: "https://i.ebayimg.com/images/g/GN0AAOSwAaNhmBWx/s-l1600.jpg",
        }
      ]
    },
    {
      brand: "Mickey Mouse",
      products: [
        {
          id: 13,
          name: "Montessori Toy",
          price: 1800,
          image: "https://m.media-amazon.com/images/I/81EU-t5kRqL.jpg",
        },
        {
          id: 14,
          name: "Wooden Number Train",
          price: 2200,
          image: "https://m.media-amazon.com/images/I/61WOeN0nXaS.jpg",
        },
        {
          id: 15,
          name: "ABC Pyramid",
          price: 3500,
          image: "https://m.media-amazon.com/images/I/71CA4CBDQ0L.jpg",
        },
        {
          id: 16,
          name: "Piano Baby Gym",
          price: 5100,
          image: "https://m.media-amazon.com/images/I/71WCzJ+DyJL.jpg",
        }
      ]
    },
    {
      brand: "Frozen",
      products: [
        {
          id: 17,
          name: "Montessori Toy",
          price: 1800,
          image: "https://images-cdn.ubuy.co.in/63b2085d19a31d0408070012-disney-frozen-toys-singing-anna-doll-in.jpg",
        },
        {
          id: 18,
          name: "Wooden Number Train",
          price: 2200,
          image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1575476862-51KQxkYE9oL.jpg",
        },
        {
          id: 19,
          name: "ABC Pyramid",
          price: 3500,
          image: "https://images-cdn.ubuy.co.in/655dece294ddf40ba336673b-disney-frozen-2-small-doll-playset.jpg",
        },
        {
          id: 20,
          name: "Piano Baby Gym",
          price: 5100,
          image: "https://ae01.alicdn.com/kf/Sbf337c8f75884d019fa147b6d8a1fa6f8.jpg_640x640Q90.jpg_.webp",
        }
      ]
    }
  ];

  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Toys Categorized by Characters</h1>
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

export default Shopbychar;
