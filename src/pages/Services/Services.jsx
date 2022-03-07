import React from "react";

import { BsCheck } from "react-icons/bs";
import "./Services.scss";
const Services = () => {
  const serviceData = [
    {
      name: `Backend  Development`,
    },
    {
      name: "Frontend  Development",
    },
    {
      name: "UI/UX Designer",
    },
  ];

  return (
    <section className="services section" id="services">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>
      <div className="services__container container grid">
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
      </div>
    </section>
  );
};

export default Services;
