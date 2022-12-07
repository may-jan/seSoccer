import React from "react";
import { NavContainer, SidebarList } from "./style";
import "./Sidebar.scss";
import Logo from "../../asset/images/sesoccer.png";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="navbar">
        <img
          className="seSoccerLogo"
          src={Logo}
          alt="Logo"
          style={{ width: "240px", height: "80px" }}
        />
      </div>

      <div className="sidebar">
        <SidebarList to="/">Home</SidebarList>
        <SidebarList to="/vote">Vote</SidebarList>
        <SidebarList to="/mypage">MyPage</SidebarList>
      </div>
    </NavContainer>
  );
};

export default Navbar;
