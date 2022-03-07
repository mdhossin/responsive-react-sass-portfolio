import React from "react";
import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My Abilites</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__content-title">Frontend Developer</h3>

          <div className="skills__content__box">
            <div className="skills__content__box__group">
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    CSS
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    JavaScript
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Advance
                  </span>
                </div>
              </div>
            </div>
            <div className="skills__content__box__group">
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    React
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Advance
                  </span>
                </div>
              </div>
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    Material Ui
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__content-title">Backend Developer</h3>

          <div className="skills__content__box">
            <div className="skills__content__box__group">
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    Node
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Advance
                  </span>
                </div>
              </div>
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    Express
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>
            <div className="skills__content__box__group">
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    Mongodb
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Advance
                  </span>
                </div>
              </div>
              <div className="skills__content__box__group__data">
                <BsPatchCheckFill className="skills__content__box__group__data-icon" />
                <div>
                  <h3 className="skills__content__box__group__data-name">
                    Mongoose
                  </h3>
                  <span className="skills__content__box__group__data-level">
                    Good
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
