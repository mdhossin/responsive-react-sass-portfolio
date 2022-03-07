import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Sahadat
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                <AiOutlineHome />
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser />
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <BiBook />
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <RiServiceLine />
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <BiMessageSquareDetail />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
