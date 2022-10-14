import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Home from "../Components/Home";
import Dashboard from '../Components/Dashboard';
export default function rout() {
  return (
          <>
            <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="Dashboard/*" element={<Dashboard/>}/>
            </Routes>
        </Router>
        </>)
}
