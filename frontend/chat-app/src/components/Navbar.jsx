import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    
    <div style={{position:"relative"
    ,display:"flex",height:"15vh"
    ,width:"100%",backgroundColor:"rgb(7, 15, 43)",color:"whitesmoke"}}>
        <div style={{display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontFamily:"fantasy",
            color:"rgb(200, 200, 200)",
            fontSize:"30px",marginLeft:"10px",textDecorationColor:"GrayText",textDecorationLine:"underline"


        }}>
           <NavLink style={{textDecoration:"none",color:"rgb(200,200,200)"}} to="/">
                  ChatApp
                </NavLink>
          
        </div>

        <div style={{display:"flex",  justifyContent:"center",
            alignItems:"center",
            fontFamily:"cursive",
            color:"rgb(200, 200, 200)",
            fontSize:"20px",marginLeft:"10px",position:"absolute",right:"20%"}}>
            <div style={{display:"flex",margin:"20px"}}>
            <NavLink style={{textDecoration:"none",color:"rgb(200,200,200)"}} to="/signup">
                  SignUp
                </NavLink>
            </div>
            <div style={{display:"flex",margin:"20px"}}> 
               <NavLink style={{textDecoration:"none",color:"rgb(200,200,200)"}} to="/signin">
                  SignIn
                </NavLink></div>
            
        </div>
        


        
        
        
        
    </div>
      
    
  )
}
