import React from 'react'
import img9 from '../assets/images/navdemo.webp'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logofinal.png'

const Header = () => {
    return (
      <>

<header>
    <nav className="navbar">
      {/* <!-- Logo and Name --> */}
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo" className="logo"/></Link>
        {/* <span className="site-name">My Website</span> */}
      </div>

      {/* <!-- Search Box --> */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-box"/>
        <i className="fas fa-search search-icon"></i>
      </div>

      <div className="helping-number">
        <span><i className="fas fa-phone"></i> <a href="tel:02522-669393">02522-669393</a></span>
      </div>
      <div className="cart-logo">
        <span><i className="fa-solid fa-cart-shopping"></i> <a>Cart</a> </span>
      </div>
      <div className="signin-container">
        <div className="dropdown-profile">
          <button className="signin-btn">
            <i className="fas fa-user-circle"></i> Profile
            <ul className="dropdown-menu">
                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                <li><Link to="/signup"><i className="fas fa-user"></i> Signup</Link></li>
              </ul>
        </button>
        </div>
      </div>
    </nav>
</header>

      </>
    )
}

export default Header
