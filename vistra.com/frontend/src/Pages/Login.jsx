import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/signup.css'
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://vistra-backend-1.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        alert("User Login Successfull");
        navigate("/");
      } else {
        console.error("Failed to add User:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }
  return (
    <>
    <Header/>
  
      <div class="container">
        <div class="sign-up">
          <h1 class="heading">Hello, friend!</h1>

          <form className="App" onSubmit={handlesubmit}>

            <div class="text">
              <img src="https://i.postimg.cc/DZBPRgvC/email.png" alt="icon" height="12" />
              <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            </div>

            <div class="text">
              <img src="https://i.postimg.cc/Nj5SDK4q/password.png" alt="icon" height="20" />
              <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            </div>


            <div class="terms">
              <input type="checkbox" />
              <p class="conditions1">I read and agree to <a href="#">terms & conditions</a></p>
            </div>

            <input type="submit" className="bbtn" />
            {/* <button><></>CREATE ACCOUNT</button> */}
            <p class="conditions2">Dont have an account <Link to="/signup">CREATE ACCOUNT </Link></p>
          </form>

           
        </div>
      </div>

      {/* <Footer/> */}

    </>

  )
}
export default Login
