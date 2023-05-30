import React from "react";

const SectionSix = () => {
  return (
    <div className="section6__container">
      <div className="section6__left">
        <h2 style={{fontSize: '4rem', marginTop:'-14rem'}}>Blog</h2>
      </div>
      <div className="section6__cards">
        <div className="section6__card">
          <h2 style={{paddingTop: '10rem'}} >Lorem</h2>
          <p style={{fontSize: '1.1rem'}}>
            Rorem ipsum dolor <br /> sit amet, consectetur <br /> adipiscing
            elit. Etiam eu <br /> turpis molestie, dictum <br /> est a, mattis
            tellus.
          </p>
        </div>
        <div className="section6__card1">
          <h2 style={{paddingTop: '10rem'}}>Lorem</h2>
          <p>
            Rorem ipsum dolor <br /> sit amet, consectetur <br /> adipiscing
            elit. Etiam eu <br /> turpis molestie, dictum <br /> est a, mattis
            tellus.
          </p>
        </div>
        <div className="section6__card2">
          <h2 style={{paddingTop: '10rem'}}>Lorem</h2>
          <p>
            Rorem ipsum dolor <br /> sit amet, consectetur <br /> adipiscing
            elit. Etiam eu <br /> turpis molestie, dictum <br /> est a, mattis
            tellus.
          </p>
        </div>
        </div>
      <button className="hero__btn" style={{alignSelf: 'flex-end', justifySelf: 'flex-end'}}>See All</button>
    </div>
  );
};

export default SectionSix;
