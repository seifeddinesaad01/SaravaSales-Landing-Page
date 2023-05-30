import React from 'react'

const SectionThree = () => {
  return (
   <div className="section3__container">
    <div className="section3__left">
      <h1 style={{fontSize: '4rem'}}>About Us</h1>
      <p style={{marginTop:'-1rem', fontSize: '1.2rem'}}>Do You Have Any Question?</p>
      <button className='hero__btn'>Contact Us</button>
      {/* <div className="section3__icons">
        <p>facebook</p>
        <p>instagram</p>
      </div> */}
    </div>
    <div className="section3__right">
        <div className="section3__card">
          <p>B2B Sales Outsourcing Services.
            Saravá Sales makes Businesses and Startups grow in terms</p>
        </div>
        <div className="section3__card">
          <p>B2B Sales Outsourcing Services.
            Saravá Sales makes Businesses and Startups grow in terms</p>
        </div>
        <div className="section3__card">
          <p>B2B Sales Outsourcing Services.
            Saravá Sales makes Businesses and Startups grow in terms</p>
        </div>
        <div className="section3__card">
          <p>B2B Sales Outsourcing Services.
            Saravá Sales makes Businesses and Startups grow in terms</p>
        </div>
    </div>
   </div>
  )
}

export default SectionThree