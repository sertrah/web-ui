import React from "react";
import "./homepage.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__content">
        <article>
          <h2>Hello,</h2>
          <h1>I'M Harlen Giraldo</h1>
          <p>FrontEnd Engineer</p>
        </article>
        <img
          src="https://e7.pngegg.com/pngimages/101/541/png-clipart-skull-skull.png"
          alt=""
          className="header__img"
        />
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="header__draw">
        <path
          fill="var(--baseColor)"
          fillOpacity="1"
          d="M0,224L40,218.7C80,213,160,203,240,192C320,181,400,171,480,176C560,181,640,203,720,186.7C800,171,880,117,960,117.3C1040,117,1120,171,1200,165.3C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
