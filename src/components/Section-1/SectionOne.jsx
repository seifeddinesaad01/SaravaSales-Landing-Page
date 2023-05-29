import React from "react";
import card1Img from "../../assets/card1.png";
import card2Img from "../../assets/card2.png";
import card3Img from "../../assets/card3.png"

const SectionOne = () => {
  return (
    <div className="section1__container">
      <p className="section1__title">
        We make Businesses and Startups <br /> <span style={{color: '#228EEB'}}>GROW</span> <br /> in terms of revenue and clients
      </p>
      <div className="section1__cards">
        <div className="section1__card">
            <img className="card__img" src={card1Img} alt="card" />
            <h2 style={{color: '#228EEB', marginTop:'-1.1rem'}}>Close</h2>
            <p style={{marginLeft:'-2.5rem', marginTop:'2rem', fontWeight:'bold'}}>More Deals</p>
        </div>
        <div className="section1__card">
            <img className="card__img" src={card2Img} alt="card" />
            <h2 style={{color: '#228EEB', marginTop:'-1.1rem'}}>Find</h2>
            <p style={{marginLeft:'-2.5rem', marginTop:'2rem', fontWeight:'bold'}}>More Clients</p>
        </div>
        <div className="section1__card">
            <img className="card__img" src={card3Img} alt="card" />
            <h2 style={{color: '#228EEB', marginTop:'-1.1rem'}}>Increase</h2>
            <p style={{marginLeft:'-2.5rem', marginTop:'2rem', fontWeight:'bold'}}>Your Sales</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
