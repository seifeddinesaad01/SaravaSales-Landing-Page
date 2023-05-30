import React from 'react'
import HeroBg from "../../assets/hero.png";


const Hero = () => {
  return (
 <div className="hero__container">
    <div className="hero__top">
      <h2 style={{fontSize:'4rem', lineHeight:'1px'}} className="hero__title">Boost yourgrowth & revenue</h2>
      <p style={{fontSize: '1.4rem'}}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className='hero__btn'>Contact Us</button>
    </div>
    <img src={HeroBg} alt="Hero" style={{height:'70vh', width:'100%'}}/>
 </div>
  )
}

export default Hero