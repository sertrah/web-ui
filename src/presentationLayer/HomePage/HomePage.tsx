import React, { useRef, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Title from "./Title";
import Footer from "./Footer";
import "./homepage.scss";

const HomePage = () => {
  return (
    <main>
      <Header />
      <section
        className="animationcul"
        style={{
          width: "100vw",
          height: "100vh",
          display: "table-cell",
          verticalAlign: "middle",
          textAlign: "center",
        }}
      >
        <h1> ACA va una animacion chida....</h1>{" "}
      </section>
      <section className="resume">
        <img
          src="https://e7.pngegg.com/pngimages/101/541/png-clipart-skull-skull.png"
          alt=""
        />
        <article>
          <h3>I am a nice person</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, facere! Voluptate dicta rerum nam modi, nostrum
            dignissimos earum odit sit doloribus amet. Adipisci, nesciunt libero
            perspiciatis totam aut eius saepe.
          </p>
        </article>
      </section>
      <Title />
      <section>
        <Card />
      </section>
      <section>
        <img
          src="https://e7.pngegg.com/pngimages/101/541/png-clipart-skull-skull.png"
          alt=""
        />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
