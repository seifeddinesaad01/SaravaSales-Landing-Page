import React from 'react'
import HeroBg from "../../assets/hero.png";


const Hero = () => {
  return (
 <div className="hero__container">
    <div className="hero__top">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ratione.</p>
    </div>
    <img src={HeroBg} alt="Hero" style={{height:'70vh', width:'80%'}}/>
 </div>
  )
}

export default Hero