import React from "react";
import { images } from "../../constants";
import "./Portfolio.scss";
const Portfolio = () => {
  const portfolioData = [
    {
      img: images.dental,
      title: "A Ecommerce Landing page",
      codeLink: "https://github.com",
      codeText: "Github",
      liveLink: "https://github.com",
      liveText: "Live Demo",
    },
    {
      img: images.helios,
      title: "A Helios Landing page",
      codeLink: "https://github.com",
      codeText: "Github",
      liveLink: "https://github.com",
      liveText: "Live Demo",
    },
    {
      img: images.resturant,
      title: "A Resturant Landing page",
      codeLink: "https://github.com",
      codeText: "Github",
      liveLink: "https://github.com",
      liveText: "Live Demo",
    },
  ];
  return (
    <section className="portfolio section">
      <span className="section__subtitle">My Recent Work</span>
      <h3 className="section__title">Portfolio</h3>
      <div className="container portfolio__container">
        {portfolioData.map(
          ({ img, title, codeLink, codeText, liveLink, liveText }, index) => (
            <article key={`index-${index}`} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={img} alt="" className="portfolio__item__image-img" />
              </div>

              <h3 className="portfolio__item-title">{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={codeLink}
                  rel="noreferrer"
                  target="_blank"
                  className="button button-ghost"
                >
                  {codeText}
                </a>
                <a
                  href={liveLink}
                  rel="noreferrer"
                  target="_blank"
                  className="button"
                >
                  {liveText}
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
