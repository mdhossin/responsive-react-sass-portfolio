import React from "react";
import Cta from "../../components/Cta/Cta";
import HomeSocial from "../../components/HomeSocial/HomeSocial";
import { BiMouse } from "react-icons/bi";

import { images } from "../../constants";
import "./Home.scss";
const Home = () => (
  <section className="home section" id="home">
    <div className="container home__container grid">
      <div className="home__data">
        <span className="home__gretting">Hello I'm</span>
        <h1 className="home__name">Sahadat</h1>
        <h3 className="home__education">Fullstack Developer</h3>
      </div>
      <Cta />

      <div className="home__handle">
        <img src={images.me} alt="sahadat" className="home__handle-img" />
      </div>
      <HomeSocial />
      <a href="#contact" className="home__scroll">
        <BiMouse className="home__scroll-icon" />
        <span className="home__scroll-name">Scroll Down</span>
      </a>
    </div>
  </section>
);
export default Home;