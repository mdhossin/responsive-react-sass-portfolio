import { BsCheck } from "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import { serviceData } from "../../fakedata/fakeData";
import { motion } from "framer-motion";
import "./Services.scss";
const Services = () => (
  <section className="services section" id="services">
    <SubHeading subtitle="My Services" title="What I Offer" />

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="services__container container grid"
    >
      {serviceData.map(({ name }, index) => (
        <div className="services__card" key={`index-${index}`}>
          <h3 className="services__card__title">{name}</h3>

          <ul className="services__card__list">
            <li className="services__card__list__item">
              <BsCheck className="services__card__list__item-icon" />
              <p className="services__card__list__item-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="services__card__list__item">
              <BsCheck className="services__card__list__item-icon" />
              <p className="services__card__list__item-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="services__card__list__item">
              <BsCheck className="services__card__list__item-icon" />
              <p className="services__card__list__item-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Services;
