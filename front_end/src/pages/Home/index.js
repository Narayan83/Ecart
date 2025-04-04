import React from "react";  // Import React library to use JSX
import Slider from "./slider/index";  // Import the Slider component
import CatSlider from "../../components/catSlider";  // Import category slider component
import Banners from "../../components/banners/banner";  // Import banner component
import Product from "../../components/product/product";  // Import Product component

import "./style.css";  // Import stylesheet for styling

// Define the Home component
const Home = () => {
    return (
      <>
        {/* Render the slider component */}
        <Slider/>

        {/* Render the category slider component */}
        <CatSlider/>

        {/* Render the banners component */}
        <Banners/>

        {/* Section for displaying popular products */}
        <section className="homeProduct">
            <div className="container-fluid">
              
              {/* Header section with filter tabs */}
              <div className="d-flex align-items-center">
                <h4 className="hd">Popular Products</h4>

                {/* Filter tabs for product categories */}
                <ul className="list list-inline ml-auto filterTab mb-0">
                  <li className="list-inline-item"><a className="cursor">All</a></li>
                  <li className="list-inline-item"><a className="cursor">Electronics</a></li>
                  <li className="list-inline-item"><a className="cursor">Books</a></li>
                  <li className="list-inline-item"><a className="cursor">Shoes</a></li>
                  <li className="list-inline-item"><a className="cursor">Clothing</a></li>
                  <li className="list-inline-item"><a className="cursor">Medicines</a></li>
                  <li className="list-inline-item"><a className="cursor">Fruits & Vegetables</a></li>
                </ul>
              </div>

              {/* Grid layout for product items */}
              <div className="row productRow">
                {/* Display multiple Product components */}
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Sale"/></div>
                <div className="item"><Product tag="New"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Best"/></div>
                <div className="item"><Product tag="New"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Best"/></div>
                <div className="item"><Product tag="Sale"/></div>
              </div>
            </div>
        </section>
      </>
    )
}

// Export the Home component for use in other parts of the application
export default Home;
