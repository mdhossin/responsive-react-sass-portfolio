import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <div className="about__me">
          <img src={images.me} alt="me" className="about__me__img" />
        </div>

        <div className="about__data">
          <div className="about__data__info">
            <div className="about__data__info__box">
              <FaAward className="about__data__info__box-icon" />
              <h3 className="about__data__info__box-title">Experience</h3>
              <div className="about__data__info__box-subtitle">
                2+ Years Working
              </div>
            </div>
            <div className="about__data__info__box">
              <FiUsers className="about__data__info__box-icon" />

              <h3 className="about__data__info__box-title">Completed</h3>
              <div className="about__data__info__box-subtitle">
                40 + Projects
              </div>
            </div>
            <div className="about__data__info__box">
              <VscFolderLibrary className="about__data__info__box-icon" />
              <h3 className="about__data__info__box-title">Support</h3>
              <div className="about__data__info__box-subtitle">Online 24/7</div>
            </div>
          </div>

          <p className="about__data__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            repudiandae rerum earum praesentium quisquam? Nihil nemo qui
            similique asperiores quibusdam optio iste? Mollitia delectus nobis,
            praesentium commodi ipsum consectetur numquam!
          </p>
          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
