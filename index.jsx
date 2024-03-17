import React, { useState, useEffect } from 'react';
import './index.css'; // Import CSS file

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const trends = document.querySelectorAll('.trends');
    const button = document.querySelectorAll('.cart');
    const cards = document.querySelectorAll('.card');

    trends.forEach((curElem, index) => {
      curElem.style.left = ${index * 100}%;
    });

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === trends.length - 1 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const myFood = () => {
    const trends = document.querySelectorAll('.trends');
    trends.forEach((curImg) => {
      curImg.style.transform = translateX(-${count * 100}%);
    });
  };

  useEffect(() => {
    myFood();
  }, [count]);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav>
        <div className="logo">
          <h1>FoodPark</h1>
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#food">Foods</a>
          </li>
          <li>
            <a href="#trend">Trends</a>
          </li>
          <li>
            <a href="#review">Reviews</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <i id="bar" className="fa-solid fa-bars"></i>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main">
        <div className="mainText">
          <h1>Discover the Best Food & Drinks in FreshMenu</h1>
          <p>
            From hearty classics to trendy favorites, our diverse menu has something to delight every palate.
            Whether you're craving comforting classics or exploring new flavors, we're here to make every meal
            an unforgettable culinary adventure.
          </p>
          <button onClick={handleClick}>Explore Foods</button>
        </div>
        <img src="images/pizza.jpg" alt="pizza" />
      </div>

      {/* Foods Section */}
      <div id="food">
        {/* Food Cards */}
        <div className="head">
          <h1>Our Foods</h1>
        </div>
        <div className="foods">
          {/* Card contents go here */}
        </div>
      </div>

      {/* Reviews Section */}
      <div id="review">
        {/* Review Cards */}
        <div className="head">
          <h1>Customer Reviews</h1>
        </div>
        <div className="reviews">
          {/* Review card contents go here */}
        </div>
      </div>

      {/* Trending Foods Section */}
      <div id="trend">
        {/* Trending Food Images */}
        <div className="head">
          <h1>Trending Foods</h1>
        </div>
        <div className="trendFood">
          {/* Trend images go here */}
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog">
        {/* Blog Cards */}
        <div className="head">
          <h1>Read Food Blogs</h1>
        </div>
        <div className="blogs">
          {/* Blog card contents go here */}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="text">
          <h3>About Us</h3>
          <p>
            From hearty classics to trendy favorites, our diverse menu has something to delight every palate.
            Whether you're craving comforting classics or exploring new flavors, we're here to make every meal
            an unforgettable culinary adventure.
          </p>
        </div>
        <div className="text">
          <h3>Our Food</h3>
          <p>Quality</p>
          <p>Affordable</p>
          <p>Best Price</p>
          <p>Low Cost</p>
        </div>
        <div className="text">
          <h3>Offers</h3>
          <p>20% OFF</p>
          <p>Free 1st meal</p>
          <p>Quality</p>
          <p>Affordable</p>
        </div>
        <div className="text">
          <h3>Connect Us</h3>
          <p>Linked In</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default App;
