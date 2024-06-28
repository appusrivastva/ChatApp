import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../assets/images.jpg";
import bg from "../assets/images2.jpg";
import bgvideo from "../assets/video2.mp4";
import axios from 'axios'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const URL="http://localhost:7000/api/auth/signup"
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
  
    try {
        const response = await axios.post(URL, { email,password });
        console.log("Response:", response.data);
        // Handle successful response
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.message : "Server error");
        // Handle error
    }
    setEmail("");
    setConfirmPassword("");
    setPassword("");
};

  const containerStyle = {
    height: "80%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",

    padding: "20px",
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  };

  const formStyle = {
    border: "1px solid #ccc",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",

    backgroundColor: "rgb(29, 38, 125)",
  };

  const inputStyle = {
    width: "85%",
    padding: "12px 15px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "15px",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
  
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(" + bg + ")",
          height: "75vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={containerStyle}>
          <div style={{ height: "100%" }}>
            <video
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <source src={bgvideo} type="video/mp4" />
            </video>
            {/* <img src={image} alt="Your Image" style={imageStyle} /> */}
          </div>
          <div style={formContainerStyle}>
            <div style={formStyle}>
              <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    style={inputStyle}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button type="submit" style={buttonStyle}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
