import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/add.css'
import Header from '../Componets/Header';
import Footer from '../Componets/Footer';

const AddProduct = () => {
  const [state, setState] = useState({
    img: "",
    productname: "",
    productprice: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://vistra-backend-1.onrender.com/addproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Product Successfull");
        navigate("/");
      } else {
        console.error("Failed to add Product:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }
  return (
    <>
    <Header/>
      {/* <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handleChange} name='imagelink' placeholder='image link' />
        <input type="text" onChange={handleChange} name='price' placeholder='price' />
        <input type="submit" />
      </form> */}

<div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<div class="form-container3">
  {/* <span><i class="fa-solid fa-xmark"></i></span> */}
  <h2>Add your Product</h2>
  <form action="" onSubmit={handlesubmit}>
    <div class="form-group">
      <label for="full-name">Image-Link</label>
        <input type="text" id="full-name" onChange={handleChange} name='img' placeholder='image link' />
        {/* <input type="text" id="full-name" name="imagelink"/> */}
    </div>

    <div class="form-group">
      <label for="product-name">Product-Name</label>
        <input type="text" id="full-name" onChange={handleChange} name='productname' placeholder='product-name' />
        {/* <input type="text" id="full-name" name="full_name"/> */}
    </div>

    <div class="form-group">
      <label for="price">Price</label>
        <input type="text" id="full-name" onChange={handleChange} name='productprice' placeholder='price' />
        {/* <input type="text" id="full-name" name="full_name"/> */}
    </div>
    
    <button type="submit" class="submit-button">Submit form</button>
  </form>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default AddProduct
