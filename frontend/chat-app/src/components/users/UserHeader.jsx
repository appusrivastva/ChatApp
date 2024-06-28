import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/user.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserHeader() {
    const token_data = localStorage.getItem("token_key");
    console.log(token_data);
    const [imageSrc, setImageSrc] = useState("");

    const navigate = useNavigate();
    const URL = "http://localhost:7000/api/auth/getpic";

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const handlebtn = () => {
        navigate('/signin');
    };

    useEffect(() => {
        fetchImageSrc();
    }, [token_data]);

    const fetchImageSrc = async () => {
        try {
            const params = { user_email: token_data };
            const res = await axios.get(URL, { params });
           const path=res.data.user_pic;
            setImageSrc(path);
            console.log(path);
            // console.log(imageSrc)
        } catch (err) {
            console.log(err);
        }
    };
      
    const imageUrl =imageSrc ? `http://localhost:7000/public/All_profile_pic/${imageSrc}` : img;

    console.log(imageUrl)

    return (
        <>
            <div style={{
                position: "relative",
                display: "flex",
                height: "15vh",
                width: "100%",
                backgroundColor: "rgb(7, 15, 43)",
                color: "whitesmoke"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "fantasy",
                    color: "rgb(200, 200, 200)",
                    fontSize: "30px",
                    marginLeft: "10px",
                    textDecorationColor: "GrayText",
                    textDecorationLine: "underline"
                }}>
                    <NavLink style={{ textDecoration: "none", color: "rgb(200,200,200)" }} to="/userhome">
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "cursive",
                    color: "rgb(200, 200, 200)",
                    fontSize: "20px",
                    marginLeft: "10px",
                    position: "absolute",
                    right: "20%"
                }}>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <p>Set Up Your Profile</p>
                        <img src={imageUrl} onClick={handleClick}
                            alt="profile pic"  accept="image/*" style={{
                                height: "25px",
                                width: "30px",
                                borderRadius: "50%",
                                border: "0px dotted black"
                            }} />
                        {click && (
                            <div style={{
                                backgroundColor: "rgb(83, 92, 145)",
                                height: "200px",
                                width: "300px",
                                border: "2px solid black",
                                position: 'absolute',
                                top: "50px"
                            }}>
                                <div style={{
                                    color: "white",
                                    marginTop: "15px",
                                    marginLeft: "50px",
                                    fontWeight: "bold",
                                    fontFamily: "roman"
                                }}>
                                    <p>userId: {token_data}</p>
                                     {/* <img src={imageUrl} alt='profile pic' accept="image/*"/> */}
                                
                                  

                                </div>
                                <div style={{ marginTop: "35px", marginLeft: "50px" }}>
                                    <NavLink to="/editprofile" style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontSize: "15px",
                                        fontFamily: "roman",
                                        fontWeight: "20px"
                                    }}>
                                        Edit Your Profile
                                    </NavLink>
                                </div>
                                <div style={{
                                    marginTop: "15px",
                                    padding: "10px",
                                    marginLeft: "50px",
                                    borderRadius: "20px",
                                    width: "95px"
                                }}>
                                    <button style={{ backgroundColor: "rgb(83, 92, 145)" }} onClick={handlebtn}>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
