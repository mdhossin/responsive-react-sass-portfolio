import { images } from "../../constants";
import "./Cta.scss";
const Cta = () => (
  <div className="home__buttons">
    <a href={images.pdf} download className="button button-ghost">
      Download CV
    </a>
    <a href="#contact" className="button">
      Let's Talk
    </a>
  </div>
);

export default Cta;
