import React from 'react'
import UserHeader from './UserHeader'
import { useState } from 'react';
import axios from 'axios';

export default function EditProfile() {
    const token_data=localStorage.getItem("token_key")
    console.log(token_data)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: token_data,
        phone: '',
         gender: '',
        profile_pic: null
    });
    const URL="http://localhost:7000/api/auth/editprofile"
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profile_pic: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
      
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('username', formData.username);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('gender', formData.gender);
            formDataToSend.append('profile_pic', formData.profile_pic);

            const response = await axios.post(URL, formDataToSend,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"                    }
                }
            );
            console.log("Response:", response.data);
            // Handle successful response
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert(error.response ? error.response.data.message : "Server error");
            // Handle error
        }
        setFormData({
            username: '',
            password: '',
            email: '',
            phone: '',
             profile_pic: null,
            gender: '',
            photo: null
        });
    };


  
    
  return (
    <>
    <UserHeader/>
    <div style={{
                backgroundColor: "gray",
                height: "85vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    width: "400px"
                }}>
                    <h2>Edit Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Gender:</label>
                            <div>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                /> Male
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    style={{ marginLeft: "10px" }}
                                /> Female
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange}
                                    style={{ marginLeft: "10px" }}
                                /> Other
                            </div>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Profile Photo:</label>
                            <input
                                type="file"
                                name="profile_pic"
                                onChange={handleFileChange}  accept="image/*"
                                
                                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                            />
                        </div>
                        <button type="submit" style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}>
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
      
    </>
  )
}
