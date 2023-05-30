import React from 'react'
import Logo1 from "../../assets/image-10.png";
import Logo2 from "../../assets/image-11.png";
import Logo3 from "../../assets/image-12.png";
import Logo4 from "../../assets/image-13.png";
import Bg from "../../assets/capa.png"
const SectionFive = () => {
  return (
    <div className="section5__container">
        <h1 style={{fontSize: '2rem', textAlign: 'center'}}>Nuestros clientes ya <br /> aumentaron su rentabilidad</h1>
        <div className="section5__logos">
            <img src={Logo1} alt="logo1" />
            <img src={Logo2} alt="logo1" />
            <img src={Logo3} alt="logo1" />
            <img src={Logo4} alt="logo1" />
        </div>
        <img src={Bg} alt="" style={{width:'98%', height:'40vh', rotate:'-5deg'}}/>
    </div>
  )
}

export default SectionFive