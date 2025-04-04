import React from "react"; // Import the React library
import Slider from "react-slick"; // Import the Slider component from the react-slick library
import "./style.css"; // Import external CSS file for styling

// Import banner images for the slider
import Banner1 from "../../../assets/images/bn1.png";
import Banner2 from "../../../assets/images/bn2.png";
import Banner3 from "../../../assets/images/bn3.png";
import Banner4 from "../../../assets/images/bn4.png";
import Banner5 from "../../../assets/images/bn5.png";
import Banner6 from "../../../assets/images/bn6.png";

// Functional component to display a home page slider
const HomeSlider = () => {
    // Configuration settings for the slider
    var settings = {
        dots: true, // Show navigation dots below the slider
        infinite: true, // Enable infinite looping of slides
        speed: 900, // Transition speed in milliseconds
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 5000 // Time between slides (5 seconds)
    };

    return (
       <section className="homeSlider"> {/* Main container for the slider */}
          <div className="container-fluid"> {/* Fluid container for full-width display */}
             <Slider {...settings} className="sliderMain"> {/* Slider component with settings */}
                 {/* Individual banner slides */}
                 <div className="sliderItem">
                     <img src={Banner1} alt="Banner1" className="w-100"/> {/* Display banner image */}
                 </div>
                 <div className="sliderItem">
                     <img src={Banner2} alt="Banner2" className="w-100"/>
                 </div>
                 <div className="sliderItem">
                     <img src={Banner3} alt="Banner3" className="w-100"/>
                 </div>
                 <div className="sliderItem">
                     <img src={Banner4} alt="Banner4" className="w-100"/>
                 </div>
                 <div className="sliderItem">
                     <img src={Banner5} alt="Banner5" className="w-100"/>
                 </div>
                 <div className="sliderItem">
                     <img src={Banner6} alt="Banner6" className="w-100"/>
                 </div>
             </Slider>
          </div>
       </section>
    )
}

export default HomeSlider; // Export the component for use in other files