import React from 'react'
import { NavContainer, SidebarList } from './style'
import './Sidebar.scss'
import Logo from '../../asset/images/sesoccer.png'
import useAuth from '../../context/auth-context'
import { alertHandler } from '../../utils/alert'

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <NavContainer>
      <div className="navbar">
        <img
          className="seSoccerLogo"
          src={Logo}
          alt="Logo"
          style={{ width: '240px', height: '80px' }}
        />
      </div>

      <div className="sidebar">
        <SidebarList to="/">Home</SidebarList>
        {isLoggedIn ? (
          <React.Fragment>
            <SidebarList to="/vote">Vote</SidebarList>
            <SidebarList to="/mypage">MyPage</SidebarList>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SidebarList
              to="/"
              onClick={() => {
                alertHandler()
              }}
            >
              Vote
            </SidebarList>
            <SidebarList
              to="/"
              onClick={() => {
                alertHandler()
              }}
            >
              MyPage
            </SidebarList>
          </React.Fragment>
        )}
      </div>
    </NavContainer>
  )
}

export default Navbar
