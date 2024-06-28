import React from 'react'
import bgvideo from '../assets/video.mp4'

export default function Home() {
  return (
    <>
    <div style={{backgroundColor:"rgb(27, 26, 85)",
        height:"75vh",position:"relative"}}>
            <video autoPlay loop muted style={{
                width:"100%",height:"100%",
                overflow:"hidden",objectFit:"cover"
                }}>
                <source src={bgvideo} type='video/mp4'/>
            </video>
  <div style={{position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)",
  textAlign:"center",
  fontFamily:"cursive",
  fontSize:"35px",
  fontWeight:"bold"

  }}>
    <h1>Welcome to Chat App</h1>
    <marquee behavior="" direction="">  <h4>Let's Start the conversation</h4></marquee>
    <h6>Kindly Sign In!</h6>
  </div>

            
            {/* <div style={{fontFamily:"monospace",display:"flex",fontSize:"35px",color:"rgb(200,200,200)",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",
                    marginTop:"30px",fontWeight:"bolder"}}>Welcome to ChatApp!

                </div>


                {/* <button>Get Started</button> */}
            {/* </div> */} 
    </div>
      
    </>
  )
}
