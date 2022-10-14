import { Button, Typography } from '@mui/material';
import React from 'react'
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import Profile from './Dashboard/Profile';
import Settings from './Dashboard/Settings';
import Help from './Dashboard/Help';
import Updates from './Dashboard/Updates';
import YourCourses from './Dashboard/YourCourses';


export default function Dashboard() {
    const Navigate = useNavigate();
    return (<>
        <Routes>
            <Route path="Profile" element={<Profile />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="YourCourses" element={<YourCourses />} />
            <Route path="Updates" element={<Updates />} />
            <Route path="Help" element={<Help />} />
        </Routes>
        <div className="full">

            <div className="upper">
                <Button onClick={() => Navigate(`/Home`)} variant="contained" sx={{ marginLeft: "20px", marginTop: "10px" }}>Back to Home</Button>
                <Typography variant="h3" sx={{ color: "white", marginLeft: "470px", marginTop: "-24px", fontFamily: "'Times New Roman', Times, serif", fontSize: " 60px" }}>Welcome to Dashboard</Typography></div>
            <div className="center">
                <Typography sx={{ color: "black", fontWeight: "bold", fontFamily: "'Times New Roman', Times, serif", fontSize: " 42px" }} variant="h4"> This is your dashboard</Typography>
                <Typography variant="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sequi facilis nam nisi temporibus, adipisci autem vel ipsum beatae ullam iure fugit maiores doloremque ipsa quod quo nostrum suscipit inventore hic architecto atque iste officiis aliquam facere! Aliquid, modi nam! Voluptate repellendus amet voluptas at ullam ut, distinctio illum porro, eveniet soluta fugit cupiditate incidunt nulla eos natus quis! Consequatur distinctio fugit autem rerum amet sit facere corrupti vero! Incidunt tempore eaque at molestias odit aut, quo eum! Nulla reiciendis officiis optio sapiente dignissimos exercitationem impedit eum autem quas. Deleniti vel corporis beatae, amet illum sint? Quas optio eveniet iure.</Typography>
            </div>
            <div className="vertical">
                <hr className="lines" />
                <Typography sx={{ marginLeft: "49px", color: 'white' }} variant="h6">Menu</Typography>
                <hr className="lines" /><br />
                <Button onClick={() => Navigate(`/Dashboard/Profile`)} sx={{ marginLeft: "30px" }}>Profile</Button>
                <Button onClick={() => Navigate(`/Dashboard/Settings`)} sx={{ marginLeft: "30px" }}>Settings</Button>
                <Button onClick={() => Navigate(`/Dashboard/YourCourses`)} sx={{ marginLeft: "30px" }}>Your Courses</Button>
                <Button onClick={() => Navigate(`/Dashboard/Updates`)} sx={{ marginLeft: "30px" }}>Updates</Button>
                <Button onClick={() => Navigate(`/Dashboard/Help`)} sx={{ marginLeft: "30px" }}>Need Help?</Button>
            </div>

        </div></>
    )
}
