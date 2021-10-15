import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./boxes.css"

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <h1>Pricing</h1>
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div 
        className="boxes"
        data-aos="fade-up"
        >3</div>
        <div 
        className="boxes"
        data-aos="fade-right"
        >4</div>
        <div         
        className="boxes"
        data-aos="fade-left"
        >5</div>
        <div         
        className="boxes"
        data-aos="flip-left"
        >6</div>
      </div>
    </div>
  );
};

export default Pricing;
