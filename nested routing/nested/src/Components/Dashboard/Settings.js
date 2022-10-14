import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import"../Dashboard.css";
export default function   Settings() {
  const navigate=useNavigate();
  return (
    <div className="full">
        
      <div className="upper">
      <Button onClick={()=>navigate("/Dashboard")} variant="contained"sx={{marginLeft:"20px",marginTop:"10px"}}>Back to Dashboard</Button>
        <Typography  variant="h3" sx={{color:"white",marginLeft:"470px",marginTop:"-24px",fontFamily:"'Times New Roman', Times, serif", fontSize:" 60px" }}>Welcome to Settings</Typography></div>
        <div className="center">
            <Typography sx={{color:"black",fontWeight:"bold",fontFamily:"'Times New Roman', Times, serif", fontSize:" 42px" }} variant="h4"> This is your Settings</Typography>
            <Typography variant="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sequi facilis nam nisi temporibus, adipisci autem vel ipsum beatae ullam iure fugit maiores doloremque ipsa quod quo nostrum suscipit inventore hic architecto atque iste officiis aliquam facere! Aliquid, modi nam! Voluptate repellendus amet voluptas at ullam ut, distinctio illum porro, eveniet soluta fugit cupiditate incidunt nulla eos natus quis! Consequatur distinctio fugit autem rerum amet sit facere corrupti vero! Incidunt tempore eaque at molestias odit aut, quo eum! Nulla reiciendis officiis optio sapiente dignissimos exercitationem impedit eum autem quas. Deleniti vel corporis beatae, amet illum sint? Quas optio eveniet iure.</Typography>
        </div>
      <div className="vertical">
        <hr className="lines"/>
        <Typography sx={{marginLeft:"49px",color: 'white'}}variant="h6">Setitings</Typography>
        <hr className="lines"/><br/>
        </div>
    </div>
  )
}
