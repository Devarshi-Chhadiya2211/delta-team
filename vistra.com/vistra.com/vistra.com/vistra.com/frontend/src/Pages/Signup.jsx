import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/signup.css'
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";

const Signup = () => {
  const [state, setState] = useState({
    username:"",
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
      const response = await fetch(`https://vistra-backend-1.onrender.com/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        alert("User Register Successfull");
        navigate("/login");
      } else {
        console.error("Failed to add User:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };
  return (
    <>

    <Header/>

    <div className="container">
        <div className="sign-up">
            <h1 className="heading">Hello, friend!</h1>

      <form className="App" onSubmit={handlesubmit}>

            <div className="text">
                <img src="https://i.postimg.cc/1zgS8WTF/user.png" alt="icon" height="20"/>
                <input type="text" placeholder="Name" name="username"  onChange={handleChange}/>
            </div>

            <div className="text">
                <img src="https://i.postimg.cc/DZBPRgvC/email.png" alt="icon" height="12"/>
                <input type="email" placeholder="Email" name="email"  onChange={handleChange}/>
            </div>

            <div className="text">
                <img src="https://i.postimg.cc/Nj5SDK4q/password.png" alt="icon" height="20"/>
                <input type="password" placeholder="Password" name="password"  onChange={handleChange}/>
            </div>

        

        <input className="bbtn" type="submit" />
            {/* <button><></>CREATE ACCOUNT</button> */}
            <p className="conditions">Already have an account? <Link to="/login">LOGIN </Link></p>
    </form>

        {/* <div className="text-container">
            <h1>Glad to see you!</h1>
            <p>Welcome, please fill in the blanks for sign up</p>
        </div> */}
    </div>
    </div>

      {/* <Footer/> */}

    </>
  );
};

export default Signup;
