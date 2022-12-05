import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  flex-direction: column;
  background-color: #81c147;
  width: 200px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SidebarList = styled(Link)`
  color: white;
  list-style: none;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  height: 50px;
  max-height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  &:hover {
    background: #252831;
    border-left: 7px solid white;
  }

  cursor: pointer;
`;
