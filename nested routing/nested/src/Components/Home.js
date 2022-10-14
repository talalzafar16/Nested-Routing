import React from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  
    
  return (
    <>
    <Box>
      <div className="body">
        
        <AppBar >
        <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}> Courseurea</Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button onClick={()=>navigate(`/Home`)} sx={{ color: '#fff', padding:"18px" }}>Home</Button>
                <Button onClick={()=>navigate(`/Dashboard`)} sx={{ color: '#fff', padding:"18px" }}>Dashboard</Button>
                </Box>
        </Toolbar>
        </AppBar>
        <div className="imag"/>
        </div>
        <div className="content"><Typography sx={{fontFamily:"'Times New Roman', Times, serif", fontWeight:"bold",fontSize:"62px"}}  variant="h3">Number 1 platform</Typography>
        <Typography sx={{fontFamily:"'Times New Roman', Times, serif",fontSize:"42px"}} variant="h3">to improve yourself</Typography>
        <Typography sx={{fontFamily:"'Times New Roman', Times, serif",fontWeight:"bold",marginTop:"42px",fontSize:"62px"}} variant="h3">Start Your Journey now</Typography>
        <Button size="large" sx={{fontFamily:"'Times New Roman', Times, serif",marginTop:"36px",fontSize:"32px",height:"102px",width:"284px"}} variant="contained">Get Started</Button>
        </div>
    </Box></>
  )
}
