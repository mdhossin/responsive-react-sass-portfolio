import SubHeading from "../../components/SubHeading/SubHeading";
import { portfolioData } from "../../fakedata/fakeData";
import "./Portfolio.scss";
const Portfolio = () => (
  <section className="portfolio section">
    <SubHeading subtitle="My Recent Work" title="Portfolio" />

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

export default Portfolio;
