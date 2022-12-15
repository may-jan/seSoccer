import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
  flex-direction: column;
  width: 200px;
  padding: 20px;
  margin-right: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`

export const SidebarList = styled(Link)`
  list-style: none;
  text-decoration: none;
  text-align: center;
  font-size: 2.2rem;
  height: 50px;
  max-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  width: 80%;
  background-color: #8d1b3d;
  color: white;
  border-radius: 30px;
  padding: 30px 10px;
  margin-bottom: 20px;

  cursor: pointer;

  transition: 1s all ease-in-out;

  &:hover {
    background-color: white;
    color: #8d1b3d;
  }
`
