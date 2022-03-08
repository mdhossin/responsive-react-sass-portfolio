import SubHeading from "../../components/SubHeading/SubHeading";
import { backendData, frontendData } from "../../fakedata/fakeData";
import { motion } from "framer-motion";
import "./Skills.scss";
const Skills = () => (
  <section className="skills section" id="skills">
    <SubHeading subtitle="My Abilites" title="My Experience" />

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="skills__container container grid"
    >
      <div className="skills__content">
        <h3 className="skills__content-title">Frontend Developer</h3>

        <div className="skills__content__box">
          <div className="skills__content__box__group">
            {frontendData
              .slice(0, 2)
              .map(({ icon, name, experience }, index) => (
                <div
                  key={`index-${index}`}
                  className="skills__content__box__group__data"
                >
                  {icon}
                  <div>
                    <h3 className="skills__content__box__group__data-name">
                      {name}
                    </h3>
                    <span className="skills__content__box__group__data-level">
                      {experience}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="skills__content__box__group">
            {frontendData
              .slice(2, 4)
              .map(({ icon, name, experience }, index) => (
                <div
                  key={`index-${index}`}
                  className="skills__content__box__group__data"
                >
                  {icon}
                  <div>
                    <h3 className="skills__content__box__group__data-name">
                      {name}
                    </h3>
                    <span className="skills__content__box__group__data-level">
                      {experience}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="skills__content">
        <h3 className="skills__content-title">Backend Developer</h3>

        <div className="skills__content__box">
          <div className="skills__content__box__group">
            {backendData
              .slice(0, 2)
              .map(({ icon, name, experience }, index) => (
                <div
                  key={`index-${index}`}
                  className="skills__content__box__group__data"
                >
                  {icon}
                  <div>
                    <h3 className="skills__content__box__group__data-name">
                      {name}
                    </h3>
                    <span className="skills__content__box__group__data-level">
                      {experience}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="skills__content__box__group">
            {backendData
              .slice(2, 4)
              .map(({ icon, name, experience }, index) => (
                <div
                  key={`index-${index}`}
                  className="skills__content__box__group__data"
                >
                  {icon}
                  <div>
                    <h3 className="skills__content__box__group__data-name">
                      {name}
                    </h3>
                    <span className="skills__content__box__group__data-level">
                      {experience}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Skills;
