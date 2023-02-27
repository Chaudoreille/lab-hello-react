import React from 'react'
import './Navbar.css'
import logo from '../../images/ironhack-logo-xs.png'
import menuIcon from '../../images/menu-top-xs.png'


const Navbar = () => {
  return (
    <nav className='Navbar'>
        <img src={logo} alt="Ironhack Logo" className="Navbar-logo"/>
        <img src={menuIcon} alt="Menu" className="Navbar-menu-icon"/>
    </nav>
  )
}

export default Navbar