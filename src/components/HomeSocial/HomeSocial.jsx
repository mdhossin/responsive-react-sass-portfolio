import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./HomeSocial.scss";
const HomeSocial = () => (
  <div className="home__social">
    <a href="htttps://linkedin.com" className="home__social-link">
      <AiFillLinkedin />
    </a>
    <a href="htttps://github.com" className="home__social-link">
      <AiFillGithub />
    </a>
    <a href="htttps://facebook.com" className="home__social-link">
      <AiFillFacebook />
    </a>
  </div>
);

export default HomeSocial;
