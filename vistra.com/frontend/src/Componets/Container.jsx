import React from 'react'

const Container = () => {
  return (
    <div>
      <div class="cart-container">
        <a href="./links/cart.html"><i class="fas fa-shopping-cart cart-icon"></i></a>
      </div>   
<div class="hy">
    <nav class="custom-navbar">
        <ul class="navbar-menu">
            <li><a href="#" class="view-all-btn">View All</a></li>
            <li><a href="#" id="visitingCardBtn">Visiting Cards</a></li>
      
            <li>
              <a href="#" id="stationery-btn">Stationery, Letterheads & Notebooks</a>
          </li>
          <li><a href="#">Personalised Pens</a></li>
          <li><a href="#">Stamps and Ink</a></li>
          <li><a href="#">Signs, Posters
             & Marketing Materials</a></li>
          <li><a href="#">Labels, Stickers & Packaging</a></li>
          <li><a href="#">Clothing, Caps & Bags</a></li>
          <li><a href="#">Mugs, Albums & Gifts</a></li>
          <li><a href="#">Bulk Orders</a></li>
          <li><a href="#">Calendars, Notebooks & Diaries</a></li>
          <li><a href="#">Custom Winter Wear</a></li>
        </ul>
      </nav>
    </div>

   <div id="stationery-content" class="content-box hidden">
    <div class="stationery-inner">
        <div class="content-header">
            <h2>Stationery, Letterheads & Notebooks</h2>
        </div>
        <div class="content-body">
            <ul class="stationery-category">
                <li>
                    <h3>Custom Stationery</h3>
                    <ul>
                        <li><a href="#">Letterheads</a></li>
                        <li><a href="#">Custom Letterhead Pads</a></li>
                        <li><a href="#">Bill Books</a></li>
                        <li><a href="#">Envelopes</a></li>
                        <li><a href="#">Custom Mouse Pads</a></li>
                        <li><a href="#">Envelope Seals</a></li>
                        <li><a href="#">Custom Pen Drive</a></li>
                        <li><a href="#">Laptop Skins</a></li>
                        <li><a href="#">Bulk Letterheads</a></li>
                        <li><a href="#">Shop all Stationery</a></li>
                    </ul>
                </li>
                <li>
                    <h3>Office Supplies</h3>
                    <ul>
                        <li><a href="#">Lanyards</a></li>
                        <li><a href="#">ID Cards</a></li>
                        <li><a href="#">Invoice Books</a></li>
                        <li><a href="#">Note Cards</a></li>
                        <li><a href="#">Custom Certificates</a></li>
                        <li><a href="#">Awards</a></li>
                        <li><a href="#">Coasters</a></li>
                        <li><a href="#">Employee Welcome Kit</a></li>
                        <li><a href="#">Cash Vouchers</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
    </div>
  )
}

export default Container
