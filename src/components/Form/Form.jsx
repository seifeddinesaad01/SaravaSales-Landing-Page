import React from "react";

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__left">
        <h2 style={{color: '#fff', fontSize: '4rem'}}>Let's Talk</h2>
        <p style={{color: '#fff', fontSize: '1.4rem'}}>Tell us abit about your needs and let’s explore some solution ideas.</p>
        <button className="hero__btn">Book a videocall</button>
      </div>
      <form className="form">
        <label>Name</label>
        <input type="text" style={{border: 'none', borderBottom: '1px solid black'}} />
        <label>Email</label>
        <input type="text" style={{border: 'none', borderBottom: '1px solid black'}} />
        <label>Number</label>
        <input type="text" style={{border: 'none', borderBottom: '1px solid black'}} />
        <label>Company</label>
        <input type="text" style={{border: 'none', borderBottom: '1px solid black'}} />
        <button className="hero__btn">Send</button>
      </form>
    </div>
  );
};

export default Form;
