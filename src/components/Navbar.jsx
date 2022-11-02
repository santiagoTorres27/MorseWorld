import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <img src="./public/img/logo.png" alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/history"}>History</Link>
        </li>
        <li>
          <Link to={"/letters"}>Letters</Link>{" "}
        </li>
        <li>
          <Link to={"/practice"}>Practice</Link>
        </li>
        <li>
          <Link to={"/translator"}>Translator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
