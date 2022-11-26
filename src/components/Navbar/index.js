import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./style";

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/vote">vote</Link>
        </li>
        <li>
          <Link to="/mypage">mypage</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
