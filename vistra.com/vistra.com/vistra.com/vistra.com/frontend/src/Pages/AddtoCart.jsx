import React from 'react'
import '.././assets/css/cart.css'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'


import React, { useEffect, useState } from "react";
// import Navbar from "../Componets/Navbar";
import { useNavigate } from "react-router-dom";
// import Footer from "../Componets/Footer";
// import "../assets/cart.css";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
// import { cartData } from "../Redux/Cartpage/action";

const AddtoCart = () => {


    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { isLoading, isError, data } = useSelector((s) => s.cartReducer);
  
    // useEffect(() => {
    //   dispatch(cartData);
    // }, []);
  
    // let total = data.reduce((sum, el) => sum + +el.price, 0); 
    // let discount = Math.round(total * 0.1);
    // let mainTotal = total - discount; 
  
    const handleclick = () => {
      axios
        .get("https://vistra-backend-1.onrender.com/addtocart")
        .then((res) => {
          const cartItems = res.data; 
          if (cartItems.length > 0) {
            const deletePromises = cartItems.map((el) =>
              axios.delete(`https://vistra-backend-1.onrender.com/addtocart/${el.id}`) 
            );
            Promise.all(deletePromises)
              .then(() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your cart has been successfully cleared. Thank you for shopping :)",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  navigate("/"); 
                });
              })
              .catch((err) => {
                console.error("Error clearing cart:", err);
              });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "info",
              title: "Your cart is already empty",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate("/"); 
            });
          }
        })
        .catch((err) => {
          console.error("Error fetching cart:", err);
        });
    };

  return (
    <>
    <Header/>
  <main>
    <div className="basket">
      <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price">Price</li>
          {/* <li className="subtotal">Subtotal</li> */}
        </ul>
      </div>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame"/>
          </div>
          <div className="product-details">
            <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
            <p><strong>Navy, Size 18</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">26.00</div>
        {/* <div className="subtotal">104.00</div> */}
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
      {/* <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame" />
          </div>
          <div className="product-details">
            <h1><strong><span className="item-quantity">1</span> x Whistles</strong> Amella Lace Midi Dress</h1>
            <p><strong>Navy, Size 10</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">26.00</div>
        <div className="quantity">
          <input type="number" value="1" min="1" className="quantity-field"/>
        </div>
        <div className="subtotal">26.00</div>
        <div className="remove">
          <button>Remove</button>
        </div>
      </div> */}
    </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
            <option value="0" selected="selected">Select Collection or Delivery</option>
            <option value="collection">Collection</option>
            <option value="first-class">Royal Mail 1st Class</option>
            <option value="second-class">Royal Mail 2nd Class</option>
            <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">130.00</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
    </aside>
  </main>
  <Footer/>
    </>
  )
}

export default AddtoCart
