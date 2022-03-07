import React, { useEffect, useRef } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Navbar.scss";
const Navbar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
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
