import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const toggleMenu = () => {
    document.querySelector("nav").classList.toggle("active");
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav>
        <button onClick={() => toggleMenu()} className="btn-toggle">
          {menuActive ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul className="menu-items">
          <Link to="/">
            <li
              onClick={() => setActivePage(0)}
              className={`menu-item ${
                activePage === 0 ? "menu-item-active" : ""
              }`}
            >
              <span className="number">00</span>HOME
            </li>
          </Link>
          <Link to="/destination">
            <li
              onClick={() => setActivePage(1)}
              className={`menu-item ${
                activePage === 1 ? "menu-item-active" : ""
              }`}
            >
              <span className="number">01</span>DESTINATION
            </li>
          </Link>
          <Link to="/crew">
            <li
              onClick={() => setActivePage(2)}
              className={`menu-item ${
                activePage === 2 ? "menu-item-active" : ""
              }`}
            >
              <span className="number">02</span>CREW
            </li>
          </Link>
          <Link to="/technology">
            <li
              onClick={() => setActivePage(3)}
              className={`menu-item ${
                activePage === 3 ? "menu-item-active" : ""
              }`}
            >
              <span className="number">03</span>TECHNOLOGY
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
