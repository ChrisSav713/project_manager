import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

const Navbar = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Temple' />
          <span>
            <NavLink to='/'>Temple</NavLink>
          </span>
        </li>

        {!user && (
          <>
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
          </>
        )}

        {user && (
          <li>
            {isPending ? (
              <button className='btn' disabled>
                Logging out...
              </button>
            ) : (
              <button className='btn' onClick={logout}>
                Logout
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
