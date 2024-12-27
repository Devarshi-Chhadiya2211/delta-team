import React, { useEffect, useState } from 'react'
import Container from '../Componets/Container'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import img1 from '../assets/images/col1.jpg'
import img2 from '../assets/images/col2.jpg'
import img3 from '../assets/images/hodd.jpg'
import img4 from '../assets/images/jac.jpg'
import img5 from '../assets/images/jeans.jpg'
import img6 from '../assets/images/shirt.jpg'
// import image from '../assets/images/logofinal.jpg'
import img7 from '../assets/images/tshirt.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://vistra-backend-1.onrender.com/allproduct")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  // Log the full API response for debugging
        // Extract the data array from the response
        if (data && Array.isArray(data.data)) {
          setProduct(data.data);  // Set the 'data' array to the product state
        } else {
          setProduct([]);  // Set to empty array if data is not in the expected format
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProduct([]);  // In case of an error, set to an empty array
      });
  }, []);

  const handleBuyNow = async (productId) => {
    try {
      const response = await fetch("https://vistra-backend-1.onrender.com/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });

      navigate('/addtocart')
      // if (response.ok) {
      //   alert("Product added to cart successfully!");
      // } else {
      //   alert("Failed to add product to cart");
      // }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding product to cart");
    }
  };

  return (
    <>
      <Header />
      <Container />

      <div id="visitingCardDropdown" className="dropdown hidden">
        <div className="dropdown-content">
          <h2>Visiting Cards</h2>
          <div className="categories">
            <div className="column">
              <h3>Visiting Cards</h3>
              <ul>
                <li><span href="standard.html">Standard Visiting Cards</span></li>
                <li><span href="classic.html">Classic Visiting Cards</span></li>
                <li><span href="rounded.html">Rounded Corner Visiting Cards</span></li>
                <li><span href="square.html">Square Visiting Cards</span></li>
                <li><span href="leaf.html">Leaf Visiting Cards</span> <span className="new-tag">NEW</span></li>
                <li><span href="oval.html">Oval Visiting Cards</span> <span className="new-tag">NEW</span></li>
                <li><span href="circle.html">Circle Visiting Cards</span> <span className="new-tag">NEW</span></li>
              </ul>
            </div>
            <div className="column">
              <h3>Brilliant Finishes</h3>
              <ul>
                <li><span href="spot-uv.html">Spot UV Visiting Cards</span></li>
                <li><span href="raised-foil.html">Raised Foil Visiting Cards</span></li>
              </ul>
              <h3>Standard Papers</h3>
              <ul>
                <li><span href="glossy.html">Glossy Visiting Cards</span></li>
                <li><span href="matte.html">Matte Visiting Cards</span></li>
                <li><span href="bulk.html">Bulk Visiting Cards</span> <span className="new-tag">NEW</span></li>
              </ul>
            </div>
            <div className="column">
              <h3>Specialty Cards</h3>
              <ul>
                <li><span href="magnetic.html">Magnetic Visiting Cards</span></li>
                <li><span href="transparent.html">Transparent Visiting Cards</span></li>
              </ul>
              <h3>Premium Papers</h3>
              <ul>
                <li><span href="premium-plus.html">Premium Plus Visiting Cards</span></li>
                <li><span href="non-tearable.html">Non-Tearable Visiting Cards</span></li>
                <li><span href="velvet-touch.html">Velvet Touch Visiting Cards</span></li>
              </ul>
            </div>
            <div className="column">
              <h3>Design and Logo</h3>
              <ul>
                <li><span href="design-services.html">Design Services</span></li>
                <li><span href="logo-maker.html">Logo Maker</span></li>
                <li><span href="qr-code.html">QR Code Generator</span></li>
              </ul>
              <h3>Visiting Cards Holder</h3>
              <ul>
                <li><span href="engraved-metal.html">Engraved Metal Visiting Card Holders</span></li>
                <li><span href="metal.html">Metal Visiting Card Holder</span></li>
                <li><span href="leatherite.html">Leatherite Visiting Cards Holder</span></li>
                <li><span href="premium-metal.html">Premium Metal Card Holders</span> <span className="new-tag">NEW</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="announcement-bar">
        🚚 FREE SHIPPING on all Orders! | 📞 Need Assistance? Call at
        <span href="tel:02522-669393">02522-669393</span>
      </div>

      <div className="main-container">
        <div className="image-section">
          <img src={img1} alt="Winterwear" />
          <div className="content-overlay">
            <h2>Wear your brand with pride</h2>
            <p>Winterwear starts at Rs 700</p>
            <span href="shop-winterwear.html" className="cta-button">Shop Now</span>
          </div>
        </div>

        <div className="image-section">
          <img src={img2} alt="Calendars" />
          <div className="content-overlay">
            <h2>Premium quality at best Price</h2>
            <p>Calendars, Notebooks and Diaries <br /> Starting at Rs. 160</p>
            <div className="cta-buttons">
              <span href="calendars.html" className="cta-button">Calendars</span>
              <span href="notebooks.html" className="cta-button">Notebooks</span>
              <span href="diaries.html" className="cta-button">Diaries</span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="section-heading">Explore All Categories</h1>
      <div className="circle-container">
        <div className="circle">
          <img src={img4} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img3} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img5} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img6} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img2} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img7} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src={img1} alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>

        <div className="circle">
          <img src="https://www.thegiftingmarketplace.in/cdn/shop/files/BGB107-Personalized-Cork-Notebook.png?v=1733678503" alt="Cloths" />
          {/* <span>Cloths</span> */}
        </div>
      </div>




      <section className="product-section">
         <h2 className="section-heading">Our Most Popular Products</h2> 
         {/* <h2 className="section-heading">Trending Products</h2> */}
         <div className="product-grid">
         {Array.isArray(product) && product.length > 0 ? (
            product.map((el) => (
              <div className="product-card" key={el.id}>
                <img src={el.img} alt={el.proname} />
                <h3 className="product-name">{el.proname}</h3>
                <p className="product-price">Rs. {el.proprice}</p>
                <button className="buy-btn" onClick={() => handleBuyNow(el._id)}>Buy Now</button>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}    
              </div>
      </section>

         {/*<div className="product-grid">
          <div className="product-card1">
            <img src="https://media.gq.com/photos/641a048fad42ea4449505d27/3:4/w_748%2Cc_limit/flint.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div> */}

{/* 
          <div className="product-card2">
            <img src="https://m.media-amazon.com/images/I/81il7Hc3YsL._AC_UY1100_.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card3">
            <img src="https://m.media-amazon.com/images/I/61J80jFIkHL._AC_UY1100_.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div> */}

          {/* <div className="product-card4">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663605064-1649349832-m02k09-te-front-1663605059.png?crop=0.9990000000000001xw:1xh;center,top&resize=980:*" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div>


          <div className="product-card5">
            <img src="https://s.alicdn.com/@sc04/kf/Hdbffa409b6614aa0bdc0d716197dcb65b.jpeg_300x300.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card6">
            <img src="https://m.media-amazon.com/images/I/61OSjMzQlLL._AC_UY1100_.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div> */}

          {/* <div className="product-card7">
            <img src="https://assets.ajio.com/medias/sys_master/root/20231018/hv4A/652ee12dddf7791519448332/-473Wx593H-466719724-purple-MODEL.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card8">
            <img src="https://m.media-amazon.com/images/I/61fH5qTCFvL._AC_UY1100_.jpg" alt="Hoodie" />
            <h3 className="product-name">Hoodies</h3>
            <p className="product-price">BUY 1 @ Rs.1100</p>
            <button className="buy-btn">Buy Now</button>
          </div> */}
          {/* <!-- Product 2 --> */}
          {/* <div className="product-card9">
            <img src="https://www.jiomart.com/images/product/original/rvowvf0akl/eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rvowvf0akl-1-202402121853.jpg?im=Resize=(500,630)" alt="T-Shirt" />
            <h3 className="product-name">Men's Polo T-Shirts</h3>
            <p className="product-price">BUY 1 @ Rs.550</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          {/* <!-- Product 3 --> */}
          {/* <div className="product-card10"> */}
            {/* <img src="https://www.themessycorner.in/cdn/shop/files/personalised-hardbound-notebook-grey-the-messy-corner-notebook-20000673628316_810x.jpg?v=1726831231" alt="Notebook" />
            <h3 className="product-name">Personalised Notebooks</h3>
            <p className="product-price">BUY 1 @ Rs.300</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div> */} 

      {/* <section className="product-section">
        <h2 className="section-heading">Trending Products</h2>
        <div className="product-grid">
          <div className="product-card11">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPqzdUoM_Ao0urt0audUiAv-UkBwFJUFFVg&s" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card12">
            <img src="https://images.jdmagicbox.com/quickquotes/images_main/men-jackets-381973164-v3lp2.jpeg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card13">
            <img src="https://5.imimg.com/data5/GM/XI/MY-59351747/mens-cotton-jacket--500x500.jpg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card14">
            <img src="https://m.media-amazon.com/images/I/61AmlnXY3oL._AC_SL1500_.jpg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>


          <div className="product-card15">
            <img src="https://m.media-amazon.com/images/I/91iE18fqhZL._AC_SY550_.jpg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card16">
            <img src="https://5.imimg.com/data5/DI/LQ/DB/SELLER-100242259/men-jacket-500x500.jpg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card17">
            <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470067/sub/goods_470067_sub17_3x4.jpg?width=494" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card18">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyPMVswIcaX-kDVvMGvOa5HmZJSgj0Yz7JMBN-APHAqOC_SAT0CbbJ7yIfww3k3XI14U&usqp=CAU" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card19">
            <img src="https://litb-cgis.rightinthebox.com/images/500x500/202210/bps/product/inc/iwcywk1666183862498.jpg" alt="Jacket" />
            <h3 className="product-name">Jackets</h3>
            <p className="product-price">BUY 1 @ Rs.1250</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="product-card20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFb5THG9Ah_3uYigRxqR6k336LjysEezZEw&s" alt="Calendar" />
            <h3 className="product-name">Calendars</h3>
            <p className="product-price">BUY 1 @ Rs.280</p>
            <button className="buy-btn">Buy Now</button>
          </div>{
          "img":"", "proname":"", "proprice":""
          }
        </div>
      </section> */}

       <Link to="/addproduct"> <h5>Tap to add product</h5></Link> 

      <div className="main">
        {/* <!-- First Section --> */}
        <div className="section">
          <div className="content">
            <h2>My Name, My Pride</h2>
            <p>100 Visiting Cards at Rs 200</p>
            <button className="btn">Shop Now</button>
          </div>
          <img src={img1} alt="Visiting Cards" />
        </div>

        {/* <!-- Second Section --> */}
        <div className="section">
          <div className="content">
            <h2>Preserve your memories with high quality Printing</h2>
            <p>Start at Rs 650</p>
            <button className="btn">Photo Albums</button>
            <button className="btn">Layflat Photo Albums</button>
          </div>
          <img src={img2} alt="Photo Albums" />
        </div>
      </div>

      <Footer />



    </>
  )
}

export default Home