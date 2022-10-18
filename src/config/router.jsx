import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Screen/about";
import Contact from "../Screen/contact";
import Home from "../Screen/home";
import NotFound from "../Screen/notF";
import Service from "../Screen/service"; 
import Profile from "../Screen/profile"; 
import Dashboard from "../dashboard/dashboard";

const WebRouter = () => {
  return (

    <Router>
        
        <div>

     <Link to="home">Home</Link>
     <Link to="about">About</Link>
     <Link to="service">Service</Link>
     <Link to="contact">Contact</Link>
     <Link to="dashboard">dashboard</Link>
     

        </div>




      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default WebRouter;
