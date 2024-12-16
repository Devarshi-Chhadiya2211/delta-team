import React from 'react'
import Container from '../Componets/Container'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import img1 from '../assets/images/col1.jpg'
import img2 from '../assets/images/col2.jpg'
import img3 from '../assets/images/hodd.jpg'
import img4 from '../assets/images/jac.jpg'
import img5 from '../assets/images/jeans.jpg'
import img6 from '../assets/images/shirt.jpg'
import img7 from '../assets/images/tshirt.jpg'

const Home = () => {
  return (
    <>

    <Header/>
    <Container/> 
 
    <div id="visitingCardDropdown" class="dropdown hidden">
        <div class="dropdown-content">
            <h2>Visiting Cards</h2>
            <div class="categories">
                <div class="column">
                    <h3>Visiting Cards</h3>
                    <ul>
                        <li><a href="standard.html">Standard Visiting Cards</a></li>
                        <li><a href="classic.html">Classic Visiting Cards</a></li>
                        <li><a href="rounded.html">Rounded Corner Visiting Cards</a></li>
                        <li><a href="square.html">Square Visiting Cards</a></li>
                        <li><a href="leaf.html">Leaf Visiting Cards</a> <span class="new-tag">NEW</span></li>
                        <li><a href="oval.html">Oval Visiting Cards</a> <span class="new-tag">NEW</span></li>
                        <li><a href="circle.html">Circle Visiting Cards</a> <span class="new-tag">NEW</span></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Brilliant Finishes</h3>
                    <ul>
                        <li><a href="spot-uv.html">Spot UV Visiting Cards</a></li>
                        <li><a href="raised-foil.html">Raised Foil Visiting Cards</a></li>
                    </ul>
                    <h3>Standard Papers</h3>
                    <ul>
                        <li><a href="glossy.html">Glossy Visiting Cards</a></li>
                        <li><a href="matte.html">Matte Visiting Cards</a></li>
                        <li><a href="bulk.html">Bulk Visiting Cards</a> <span class="new-tag">NEW</span></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Specialty Cards</h3>
                    <ul>
                        <li><a href="magnetic.html">Magnetic Visiting Cards</a></li>
                        <li><a href="transparent.html">Transparent Visiting Cards</a></li>
                    </ul>
                    <h3>Premium Papers</h3>
                    <ul>
                        <li><a href="premium-plus.html">Premium Plus Visiting Cards</a></li>
                        <li><a href="non-tearable.html">Non-Tearable Visiting Cards</a></li>
                        <li><a href="velvet-touch.html">Velvet Touch Visiting Cards</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Design and Logo</h3>
                    <ul>
                        <li><a href="design-services.html">Design Services</a></li>
                        <li><a href="logo-maker.html">Logo Maker</a></li>
                        <li><a href="qr-code.html">QR Code Generator</a></li>
                    </ul>
                    <h3>Visiting Cards Holder</h3>
                    <ul>
                        <li><a href="engraved-metal.html">Engraved Metal Visiting Card Holders</a></li>
                        <li><a href="metal.html">Metal Visiting Card Holder</a></li>
                        <li><a href="leatherite.html">Leatherite Visiting Cards Holder</a></li>
                        <li><a href="premium-metal.html">Premium Metal Card Holders</a> <span class="new-tag">NEW</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  
        


    <div class="dropdown-container" id="viewAllDropdown">
        <div class="dropdown-column">
          <h3>Business Essentials</h3>
          <ul>
            <li><a href="#">Visiting Cards</a></li>
            <li><a href="#">Signs, Posters & Marketing Materials</a></li>
            <li><a href="#">Stationery, Letterheads & Notebooks</a></li>
            <li><a href="#">Labels, Stickers & Packaging</a></li>
            <li><a href="#">Stamps & Ink</a></li>
            <li><a href="#">Office Supplies</a></li>
          </ul>
        </div>
        <div class="dropdown-column">
          <h3>Love Your New Look</h3>
          <ul>
            <li><a href="#">Clothing, Caps & Bags</a></li>
            <li><a href="#">Custom Polo T-Shirts</a></li>
            <li><a href="#">Printed T-Shirts</a></li>
            <li><a href="#">Custom Office Shirts</a></li>
            <li><a href="#">Caps</a></li>
          </ul>
        </div>
        <div class="dropdown-column">
          <h3>Home & Gifts</h3>
          <ul>
            <li><a href="#">Mugs, Albums & Gifts</a></li>
            <li><a href="#">Drinkware</a></li>
            <li><a href="#">Gift Hampers</a></li>
          </ul>
        </div>
      </div>
    

      <div class="announcement-bar">
        🚚 FREE SHIPPING on all Orders! | 📞 Need Assistance? Call at 
        <a href="tel:02522-669393">02522-669393</a>
      </div>
      
      <div class="main-container">
        <div class="image-section">
          <img src={img1} alt="Winterwear"/>
          <div class="content-overlay">
            <h2>Wear your brand with pride</h2>
            <p>Winterwear starts at Rs 700</p>
            <a href="shop-winterwear.html" class="cta-button">Shop Now</a>
          </div>
        </div>
      
        <div class="image-section">
          <img src={img2} alt="Calendars"/>
          <div class="content-overlay">
            <h2>Premium quality at best Price</h2>
            <p>Calendars, Notebooks and Diaries <br/> Starting at Rs. 160</p>
            <div class="cta-buttons">
              <a href="calendars.html" class="cta-button">Calendars</a>
              <a href="notebooks.html" class="cta-button">Notebooks</a>
              <a href="diaries.html" class="cta-button">Diaries</a>
            </div>
          </div>
        </div>
      </div>
      
      <h1 class="explore-title">Explore All Categories</h1>
      <div class="circle-container">
          <div class="circle">
              <img src={img4} alt="Cloths"/>
              <span>Cloths</span>
          </div>
      
          <div class="circle">
              <img src={img3} alt="Cloths"/>
              <span>Cloths</span>
          </div>
      
          <div class="circle">
              <img src={img5} alt="Cloths"/>
              <span>Cloths</span>
          </div>
      
          <div class="circle">
              <img src={img6} alt="Cloths"/>
              <span>Cloths</span>
          </div>
      
          <div class="circle">
              <img src={img2} alt="Cloths"/>
              <span>Cloths</span>
          </div>
      
          <div class="circle">
              <img src={img7} alt="Cloths"/>
              <span>Cloths</span>
          </div>

          <div class="circle">
            <img src={img1} alt="Cloths"/>
            <span>Cloths</span>
        </div>

        <div class="circle">
          <img src={img1} alt="Cloths"/>
          <span>Cloths</span>
      </div>
</div>


 

    <section class="product-section">
        <h2 class="section-heading">Our Most Popular Products</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src={img3} alt="Hoodie"/>
                <h3 class="product-name">Hoodies</h3>
                <p class="product-price">BUY 1 @ Rs.1100</p>
                <button class="buy-btn">Buy Now</button>
            </div>


            <div class="product-card">
              <img src={img3} alt="Hoodie"/>
              <h3 class="product-name">Hoodies</h3>
              <p class="product-price">BUY 1 @ Rs.1100</p>
              <button class="buy-btn">Buy Now</button>
          </div>

          <div class="product-card">
            <img src={img3} alt="Hoodie"/>
            <h3 class="product-name">Hoodies</h3>
            <p class="product-price">BUY 1 @ Rs.1100</p>
            <button class="buy-btn">Buy Now</button>
        </div>

        <div class="product-card">
          <img src={img3} alt="Hoodie"/>
          <h3 class="product-name">Hoodies</h3>
          <p class="product-price">BUY 1 @ Rs.1100</p>
          <button class="buy-btn">Buy Now</button>
      </div>


      <div class="product-card">
        <img src={img3} alt="Hoodie"/>
        <h3 class="product-name">Hoodies</h3>
        <p class="product-price">BUY 1 @ Rs.1100</p>
        <button class="buy-btn">Buy Now</button>
    </div>

        <div class="product-card">
          <img src={img3} alt="Hoodie"/>
          <h3 class="product-name">Hoodies</h3>
          <p class="product-price">BUY 1 @ Rs.1100</p>
          <button class="buy-btn">Buy Now</button>
      </div>

      <div class="product-card">
        <img src={img3} alt="Hoodie"/>
        <h3 class="product-name">Hoodies</h3>
        <p class="product-price">BUY 1 @ Rs.1100</p>
        <button class="buy-btn">Buy Now</button>
    </div>

    <div class="product-card">
      <img src={img3} alt="Hoodie"/>
      <h3 class="product-name">Hoodies</h3>
      <p class="product-price">BUY 1 @ Rs.1100</p>
      <button class="buy-btn">Buy Now</button>
  </div>
            {/* <!-- Product 2 --> */}
            <div class="product-card">
                <img src={img7} alt="T-Shirt"/>
                <h3 class="product-name">Men's Polo T-Shirts</h3>
                <p class="product-price">BUY 1 @ Rs.550</p>
                <button class="buy-btn">Buy Now</button>
            </div>
            {/* <!-- Product 3 --> */}
            <div class="product-card">
                <img src={img2} alt="Notebook"/>
                <h3 class="product-name">Personalised Notebooks</h3>
                <p class="product-price">BUY 1 @ Rs.300</p>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>

    {/* <!-- Second Section --> */}
    <section class="product-section">
        <h2 class="section-heading">Trending Products</h2>
        <div class="product-grid">
            {/* <!-- Product 1 --> */}
            <div class="product-card">
                <img src={img1} alt="Jacket"/>
                <h3 class="product-name">Jackets</h3>
                <p class="product-price">BUY 1 @ Rs.1250</p>
                <button class="buy-btn">Buy Now</button>
            </div>

            <div class="product-card">
              <img src={img2} alt="Jacket"/>
              <h3 class="product-name">Jackets</h3>
              <p class="product-price">BUY 1 @ Rs.1250</p>
              <button class="buy-btn">Buy Now</button>
          </div>

          <div class="product-card">
            <img src={img1} alt="Jacket"/>
            <h3 class="product-name">Jackets</h3>
            <p class="product-price">BUY 1 @ Rs.1250</p>
            <button class="buy-btn">Buy Now</button>
        </div>

        <div class="product-card">
          <img src={img1} alt="Jacket"/>
          <h3 class="product-name">Jackets</h3>
          <p class="product-price">BUY 1 @ Rs.1250</p>
          <button class="buy-btn">Buy Now</button>
      </div>


      <div class="product-card">
        <img src={img1} alt="Jacket"/>
        <h3 class="product-name">Jackets</h3>
        <p class="product-price">BUY 1 @ Rs.1250</p>
        <button class="buy-btn">Buy Now</button>
    </div>

    <div class="product-card">
      <img src={img3} alt="Jacket"/>
      <h3 class="product-name">Jackets</h3>
      <p class="product-price">BUY 1 @ Rs.1250</p>
      <button class="buy-btn">Buy Now</button>
  </div>

  <div class="product-card">
    <img src={img3} alt="Jacket"/>
    <h3 class="product-name">Jackets</h3>
    <p class="product-price">BUY 1 @ Rs.1250</p>
    <button class="buy-btn">Buy Now</button>
</div>

<div class="product-card">
  <img src={img3} alt="Jacket"/>
  <h3 class="product-name">Jackets</h3>
  <p class="product-price">BUY 1 @ Rs.1250</p>
  <button class="buy-btn">Buy Now</button>
</div>

<div class="product-card">
  <img src={img3} alt="Jacket"/>
  <h3 class="product-name">Jackets</h3>
  <p class="product-price">BUY 1 @ Rs.1250</p>
  <button class="buy-btn">Buy Now</button>
</div>
            {/* <!-- Product 2 --> */}
            <div class="product-card">
                <img src={img1} alt="Calendar"/>
                <h3 class="product-name">Calendars</h3>
                <p class="product-price">BUY 1 @ Rs.280</p>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    </section>


  
        <div class="main">
            {/* <!-- First Section --> */}
            <div class="section">
                <div class="content">
                    <h2>My Name, My Pride</h2>
                    <p>100 Visiting Cards at Rs 200</p>
                    <button class="btn">Shop Now</button>
                </div>
                <img src={img1} alt="Visiting Cards"/>
            </div>
    
            {/* <!-- Second Section --> */}
            <div class="section">
                <div class="content">
                    <h2>Preserve your memories with high quality Printing</h2>
                    <p>Start at Rs 650</p>
                    <button class="btn">Photo Albums</button>
                    <button class="btn">Layflat Photo Albums</button>
                </div>
                <img src={img2} alt="Photo Albums"/>
            </div>
        </div>
    
 <Footer/>


      
    </>
  )
}

export default Home