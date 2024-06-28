import React, { useEffect, useState } from 'react'
import bg from '../assets/ig.jpg'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


import { useNavigate } from "react-router-dom";


export default function SignIn() {

  // js{}
  const [formData,setFormData]=useState({email:"",password:""});
  const navigate=useNavigate()

  const URL="http://localhost:7000/api/auth/signin"

const handleChange=(e)=>{
  let value=e.target.value;
  let name=e.target.name;

  setFormData((currVal)=>{
    return {
      ...currVal,[name]:value
    }
  })



}
console.log(formData.email)

const handleSubmit=async (e)=>{
  e.preventDefault();
  console.log(formData)
  try{
    const res=await axios.post(URL,formData);
    console.log(res.data);
         
      
    if(res.data.code===200){
      // alert('user exist')
      navigate('/userhome')
      localStorage.setItem("token_key",res.data.token)
    

    }
    else if(res.data.code===404){
      alert('password does not match')
    }
    else{
      alert('user not found')
    }
  }


  
  catch(err){
    console.log(err);

  }
  setFormData({email:"",password:""})


}








































  const formStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    
    textAlign: 'center',
    width:"500px",
    backgroundColor:"rgb(29, 38, 125)"
    
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '8px'
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url(" + bg + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <>
    <Navbar/>
    
   <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ display: 'block', marginBottom: '15px' }}>Sign In</h2>
        <form>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input type="email" id="email" name="email" style={inputStyle} onChange={handleChange}  value={formData.email}/>
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input type="password" id="password" name="password"onChange={handleChange} style={inputStyle} value={formData.value} />
          </div>
          <div>
            <button onClick={handleSubmit} style={buttonStyle}>Sign In</button>
            <h6>Not an Account? please Sign Up!!</h6>
            {/* <button  style={buttonStyle}><NavLink style={{textDecoration:"none",color:"white",backgroundColor:"black"}}>Sign Up</NavLink></button> */}

          </div>
        </form>
      </div>
    </div>
      <Footer/>
    </>
  )
}
