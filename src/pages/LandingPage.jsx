import React from "react";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <h1>Morse world</h1>
        <div className="landing__content">
          <div className="landing__content-text">
            <p>Practice and learn morse code</p>
            <button className="btn">Get Started</button>
          </div>
          <div className="landing__content-img">
            <img src="./public/img/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
