import React from 'react'
import './Navbar.css'
import Temple from '../assets/temple.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Temple' />

          <span>
            <NavLink to='/dashboard'>Temple</NavLink>
          </span>
        </li>
        <li>
          <NavLink
            to='/login'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : 'blue'
            })}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signup'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : 'blue'
            })}
          >
            Signup
          </NavLink>
        </li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
