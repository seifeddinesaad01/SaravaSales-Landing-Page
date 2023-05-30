import React from "react";
import Section4 from "../../assets/section4.png";
import googleImg from "../../assets/sect4.png";
import twitterImg from "../../assets/sec4.png";
const SectionFour = () => {
  return (
    <div className="section4__container">
      <div className="section4__left">
        <h1 style={{ color: "#fff" }}>Boost yourgrowth & revenue</h1>
        <p style={{ color: "#fff" }}>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br />{" "}
          eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, <br />{" "}
          metus nec fringilla accumsan, risus sem sollicitudin lacus,
          <br />
          ut interdum tellus elit sed Maecenas eget condimentum velit,
          <br />
          sit amet feugiat lectus. Class aptent taciti sociosque.
        </p>
        <button className="section4__btn">See More</button>
      </div>
      <img style={{ width: "30rem", paddingTop:'4rem' , height:'35vh'}} src={Section4} alt="section4" />
      <div style={{display: 'flex'}}>
      <div className="section4__1" style={{backgroundColor: '#2372B8'}}>
        <img style={{width: '5rem'}} src={googleImg} alt="gl" />
        <p style={{color: "#fff", fontSize: '1.1rem'}}>Lorem ipsum</p>
      </div>
      <div className="section4__1" style={{backgroundColor: '#0F5695'}}>
        <img style={{width: '5rem'}} src={twitterImg} alt="gl" />
        <p style={{color: "#fff", fontSize: '1.1rem'}}>Lorem ipsum</p>
      </div>
      </div> 
     
    </div>
  );
};

export default SectionFour;
