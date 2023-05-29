import React from "react";
import Card4 from "../../assets/card4.png";
const Section2 = () => {
  return (
    <div className="sectionTwo__container">
      <div className="sectionTwo__top">
        <h2 style={{ fontSize: "3rem" }}>Services</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          We provide B2B sales services that are tailored <br /> to your needs.
        </p>
      </div>
      <div className="section2__cards">
        <div className="section2__card">
          <img src={Card4} alt="card" />
          <h2 style={{fontSize: '2rem', textAlign: 'left'}}>Outbond <br /> <span style={{color: "#F8C71A"}}>Sales</span> </h2>
          <p style={{textAlign: 'left', fontSize: '0.9rem'}}>Rorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Etiam eu <br /> turpis molestie, dictum est</p>
        </div>
        <div className="section2__card">
          <img src={Card4} alt="card" />
          <h2 style={{fontSize: '2rem', textAlign: 'left'}}>Outbond <br /> <span style={{color: "#F8C71A"}}>Sales</span> </h2>
          <p style={{textAlign: 'left', fontSize: '0.9rem'}}>Rorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Etiam eu <br /> turpis molestie, dictum est</p>
        </div>
        <div className="section2__card">
          <img src={Card4} alt="card" />
          <h2 style={{fontSize: '2rem', textAlign: 'left'}}>Outbond <br /> <span style={{color: "#F8C71A"}}>Sales</span> </h2>
          <p style={{textAlign: 'left', fontSize: '0.9rem'}}>Rorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Etiam eu <br /> turpis molestie, dictum est</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
