import React from 'react'

export default function Footer() {
  return (
    <>
    <div style={{display:"flex",
        backgroundColor:"rgb(83, 92, 145)",
        height:"10vh",flexDirection: "column",color:"rgb(200, 200, 200)",fontFamily:"cursive"}}>
        
        <div style={{display:"flex",justifyContent:"center",
        alignItems:"center",padding:"5px"}}>
            <h3>Connect more! @apoorva2024</h3>
        </div>
        
        <div style={{display:"flex",justifyContent:"center",
            alignItems:"center",
            flexDirection: "row"
        }}>

            <div style={{padding:"10px"}}><i class="fa-brands fa-facebook"></i></div>
            <div style={{padding:"10px"}}><i class="fa-brands fa-instagram"></i></div>
           <div style={{padding:"10px"}}><i class="fa-brands fa-whatsapp"></i></div>
            <div style={{padding:"10px"}}><i class="fa-brands fa-twitter"></i></div>
        </div>
    </div>
      
    </>
  )
}
