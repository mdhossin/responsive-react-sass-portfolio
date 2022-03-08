import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import "./Footer.scss";
const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <h3 className="footer__title">SAHADAT</h3>
      <ul className="footer__list">
        <li>
          <a href="#home" className="footer__list-link">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="footer__list-link">
            Project
          </a>
        </li>
        <li>
          <a href="#testimonial" className="footer__list-link">
            Testimonial
          </a>
        </li>
      </ul>

      <ul className="footer__social">
        <a href="https://facebook.com" className="footer__social__link">
          <FaFacebookF className="footer__social__link-icon" />
        </a>
        <a href="https://facebook.com" className="footer__social__link">
          <AiOutlineGithub className="footer__social__link-icon" />
        </a>
        <a href="https://github.com" className="footer__social__link">
          <AiOutlineGithub className="footer__social__link-icon" />
        </a>
      </ul>

      <span className="footer__copy">
        &copy; Sahadat. All right reserved 2022
      </span>
    </div>
  </footer>
);

export default Footer;
