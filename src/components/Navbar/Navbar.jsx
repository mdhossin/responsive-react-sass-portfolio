import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("#home");
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
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={`nav__link ${active === "#home" ? "active" : ""}`}
              >
                <AiOutlineHome />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActive("#about")}
                className={`nav__link ${active === "#about" ? "active" : ""}`}
              >
                <AiOutlineUser />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActive("#skills")}
                className={`nav__link ${active === "#skills" ? "active" : ""}`}
              >
                <BiBook />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActive("#services")}
                className={`nav__link ${
                  active === "#services" ? "active" : ""
                }`}
              >
                <RiServiceLine />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActive("#contact")}
                className={`nav__link ${active === "#contact" ? "active" : ""}`}
              >
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
