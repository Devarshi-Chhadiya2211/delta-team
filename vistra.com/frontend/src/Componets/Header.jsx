import React from 'react'
import img9 from '../assets/images/navdemo.webp'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logofinal.png'

const Header = () => {
    return (
      <>

<header>
    <nav class="navbar">
      {/* <!-- Logo and Name --> */}
      <div class="logo-container">
        <Link to="/"><img src={logo} alt="Logo" class="logo"/></Link>
        {/* <span class="site-name">My Website</span> */}
      </div>

      {/* <!-- Search Box --> */}
      <div class="search-container">
        <input type="text" placeholder="Search..." class="search-box"/>
        <i class="fas fa-search search-icon"></i>
      </div>

      <div class="helping-number">
        <span><i class="fas fa-phone"></i> <a href="tel:02522-669393">02522-669393</a></span>
      </div>
      <div class="cart-logo">
        <span><i class="fa-solid fa-cart-shopping"></i> <a>Cart</a> </span>
      </div>
      <div class="signin-container">
        <div class="dropdown-profile">
          <button class="signin-btn">
            <i class="fas fa-user-circle"></i> Profile
            <ul class="dropdown-menu">
                <li><Link to="/login"><i class="fas fa-sign-in-alt"></i> Login</Link></li>
                <li><Link to="/signup"><i class="fas fa-user"></i> Signup</Link></li>
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
