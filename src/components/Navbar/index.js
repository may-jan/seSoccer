import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar
