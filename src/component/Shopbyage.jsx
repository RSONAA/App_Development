// Shopbyage.js
import React from 'react';
import ProductCard from './ProductCard';
import "../css/Shopbyage.css";

const products = {
  '0-2 Years': [
    { image: 'https://images-cdn.ubuy.co.in/6437ffa14073cb64e44d51d3-montessori-pull-string-toys-for-babies.jpg', name: 'Montessori Toy', price: '₹1800' },
    { image: 'https://quasarworld.in/wp-content/uploads/2021/06/41nAOBwaLGL.jpg', name: 'Wooden Number Train', price: '₹2200' },
    { image: 'https://m.media-amazon.com/images/I/51lbyZ4stGL.jpg', name: 'ABC Pyramid', price: '₹3500' },
    { image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/crib-toy-play-gym/3/h/k/6-baby-play-gym-mat-and-play-piano-for-kids-0-2-years-lights-original-imah2heza5hcwguy.jpeg?q=20&crop=false', name: 'Piano Baby Gym', price: '₹5100' }
  ],
  '3-8 Years': [
    { image: 'https://images-cdn.ubuy.ae/655950d01f86fd7a13704114-games-for-4-5-6-7-year-olds-boys-girls.jpg', name: 'Tetra Tower', price: '₹2500' },
    { image: 'https://m.media-amazon.com/images/I/61mNsbu-zsL.jpg', name: 'Art and Craft Kit', price: '₹5000' },
    { image: 'https://samstoy.in/cdn/shop/files/Buy-Childrens-Electric-Motorcycle-Tricycle-Can-Sit-In-Baby-Toy-bike-Battery-1-3-5-6-12-Years-Old-Trikes-Ride-on-Toys-in-Ahmedabad-samstoy-in-near-me-in-Ahmedaba-4969_1445x.jpg?v=1705215305', name: 'Harley Electric Bike', price: '₹7500' },
    { image: 'https://m.media-amazon.com/images/I/61CBvC7qbzL._AC_UF1000,1000_QL80_.jpg', name: 'Kizmos 250 Pieces', price: '₹900' }
  ],
  '9-15 Years': [
    { image: 'https://m.media-amazon.com/images/I/81G6eCvtGBL.jpg', name: 'Junior Engineer', price: '₹3000' },
    { image: 'https://nationaltoday.com/wp-content/uploads/2022/10/Laser-Tag-Guns-with-Vests-Set-of-4-500x390.png', name: 'Armo Recharge Guns', price: '₹1100' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvKjs5jaoRKRNtDrPDUeqh0wzlneBQGu9Ag&usqp=CAU', name: 'DIY Guitar', price: '₹1000' },
    { image: 'https://jaimantoys.com/wp-content/uploads/2023/05/1-6.jpg', name: 'Math Kit', price: '₹1200' }
  ]
};

const Shopbyage = () => {
  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Shop By Age From 0-15 Years</h1>
      </div>

      {Object.keys(products).map(ageGroup => (
        <div className='zto2' key={ageGroup}>
          <h2>{ageGroup.replace('-', ' to ')}</h2>
          <div className='zto2img'>
            {products[ageGroup].map((item, index) => (
              <ProductCard key={index} image={item.image} name={item.name} price={item.price} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopbyage;

