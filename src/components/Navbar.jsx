import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

import '../styles/navbar.css'

function Navbar() {
    return (
        <div  >
            {/* 👆style={{border:"2px solid red", padding:"5px"}} */}
            {/* <h1>Navbar Page</h1> */}
            {/* Navigation    -move one url to another */}

            <div className='header'  >
                {/*👆 style={{border:"2px solid blue", padding:"5px"}} */}
                <div >
                    {/* <NavLink id='logo' to="/">Logo</NavLink> */}
                    {/* <NavLink id='logo' to="/"><img style={{width:"100px"}} src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png" alt="yourLogo" /></NavLink> */}
                    <NavLink id='logo' to="/"><img style={{ width: "100px" }} src="yourlogoBLUE.jpeg" alt="yourLogo" /></NavLink>
                </div>
                <div id='navbar-menu'>
                    <NavLink className='menu' to="/">Home</NavLink> 
                    <NavLink className='menu' to="/about">About</NavLink> 
                    <NavLink className='menu' to="/contact">Contact</NavLink> 
                    {/* <NavLink className='menu' to="users">Users</NavLink> */}
                    <NavLink className='menu' to="/jobs">Jobs</NavLink> 
                    {/* <NavLink className='menu' to="/user/login">Login</NavLink>
                    <NavLink className='menu' to="/college">Dashboard</NavLink>
                    <NavLink className='menu' to="Courses">Courses</NavLink> 
                    <NavLink className='menu' to="/our-placements">Placements</NavLink>   */}

                </div>
            </div>

            {/* outlet component child component ko render, append krta h jis componet mei isko define krte h vha pr sabhi child ko so that show ho jae. */}
            <div style={{ overflow: "hidden" }}>
                {/* 👆style={{border:"2px solid green", padding:"5px"}} */}
                <Outlet />
            </div>
        </div>
    );
}
export default Navbar;
