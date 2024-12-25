import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/add.css';

const Container = () => {
  // State management
  const [isViewAllDropdownOpen, setIsViewAllDropdownOpen] = useState(false);
  const [isVisitingCardDropdownOpen, setIsVisitingCardDropdownOpen] = useState(false);
  const [isStationeryContentVisible, setIsStationeryContentVisible] = useState(false);

  // Click handlers
  const handleViewAllClick = (e) => {
    e.stopPropagation();
    setIsViewAllDropdownOpen(prev => !prev);
  };

  const handleVisitingCardClick = (e) => {
    e.stopPropagation();
    setIsVisitingCardDropdownOpen(prev => !prev);
  };

  const handleStationeryClick = (e) => {
    e.preventDefault();
    setIsStationeryContentVisible(prev => !prev);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only close if clicking outside the dropdown area
      if (!e.target.closest('.dropdown-container') && !e.target.closest('.view-all-btn')) {
        setIsViewAllDropdownOpen(false);
      }
      if (!e.target.closest('.visiting-card-dropdown') && !e.target.closest('#visitingCardBtn')) {
        setIsVisitingCardDropdownOpen(false);
      }
    };

    // Only add the event listener if any dropdown is open
    if (isViewAllDropdownOpen || isVisitingCardDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isViewAllDropdownOpen, isVisitingCardDropdownOpen]);

  return (
    <div>
      <div className="cart-container">
        <Link to='/cart'>
          <i className="fas fa-shopping-cart cart-icon"></i>
        </Link>
      </div>   
      <div className="hy">
        <nav className="custom-navbar">
          <ul className="navbar-menu">
            <li>
              <a className="view-all-btn" onClick={handleViewAllClick}>
                View All
              </a>
            
            </li>
            <li>
              <a id="visitingCardBtn" onClick={handleVisitingCardClick}>
                Visiting Cards
              </a>
              {isVisitingCardDropdownOpen && (
                <div className="visiting-card-dropdown" id="visitingCardDropdown">
                 <div class="dropdown-container" id="viewAllDropdown">
        <div class="dropdown-column">
          <h3>Business Essentials</h3>
          <ul>
            <li><span href="#">Visiting Cards</span></li>
            <li><span href="#">Signs, Posters & Marketing Materials</span></li>
            <li><span href="#">Stationery, Letterheads & Notebooks</span></li>
            <li><span href="#">Labels, Stickers & Packaging</span></li>
            <li><span href="#">Stamps & Ink</span></li>
            <li><span href="#">Office Supplies</span></li>
          </ul>
        </div>
        <div class="dropdown-column">
          <h3>Love Your New Look</h3>
          <ul>
            <li><span href="#">Clothing, Caps & Bags</span></li>
            <li><span href="#">Custom Polo T-Shirts</span></li>
            <li><span href="#">Printed T-Shirts</span></li>
            <li><span href="#">Custom Office Shirts</span></li>
            <li><span href="#">Caps</span></li>
          </ul>
        </div>
        <div class="dropdown-column">
          <h3>Home & Gifts</h3>
          <ul>
            <li><span href="#">Mugs, Albums & Gifts</span></li>
            <li><span href="#">Drinkware</span></li>
            <li><span href="#">Gift Hampers</span></li>
          </ul>
        </div>
      </div>
                </div>
              )}
            </li>
            <li>
              <a id="stationery-btn" onClick={handleStationeryClick}>
                Stationery, Letterheads & Notebooks
              </a>
            </li>
            <li><a >Personalised Pens</a></li>
            <li><a >Stamps and Ink</a></li>
            <li><a >Signs, Posters
               & Marketing Materials</a></li>
            <li><a >Labels, Stickers & Packaging</a></li>
            <li><a >Clothing, Caps & Bags</a></li>
            <li><a >Mugs, Albums & Gifts</a></li>
            <li><a >Bulk Orders</a></li>
            <li><a >Calendars, Notebooks & Diaries</a></li>
            <li><a >Custom Winter Wear</a></li>
          </ul>
        </nav>
      </div>

      <div 
        id="stationery-content" 
        className={`content-box ${isStationeryContentVisible ? 'visible' : 'hidden'}`}
      >
        <div className="stationery-inner">
          <div className="content-header">
            <h2>Stationery, Letterheads & Notebooks</h2>
          </div>
          <div className="content-body">
            <ul className="stationery-category">
              <li>
                <h3>Custom Stationery</h3>
                <ul>
                  <li><a >Letterheads</a></li>
                  <li><a >Custom Letterhead Pads</a></li>
                  <li><a >Bill Books</a></li>
                  <li><a >Envelopes</a></li>
                  <li><a >Custom Mouse Pads</a></li>
                  <li><a >Envelope Seals</a></li>
                  <li><a >Custom Pen Drive</a></li>
                  <li><a >Laptop Skins</a></li>
                  <li><a >Bulk Letterheads</a></li>
                  <li><a >Shop all Stationery</a></li>
                </ul>
              </li>
              <li>
                <h3>Office Supplies</h3>
                <ul>
                  <li><a >Lanyards</a></li>
                  <li><a >ID Cards</a></li>
                  <li><a >Invoice Books</a></li>
                  <li><a >Note Cards</a></li>
                  <li><a >Custom Certificates</a></li>
                  <li><a >Awards</a></li>
                  <li><a >Coasters</a></li>
                  <li><a >Employee Welcome Kit</a></li>
                  <li><a >Cash Vouchers</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
