import React from 'react';
import { Link, NavLink } from 'react-router';

function Home() {
    return (
        <>
            <h1>Component 1 :  Home Page</h1> <br />
            <Link to='/contact'>Contact</Link> <br /> <br />
            <NavLink to='/about'>About</NavLink> <br /> <br />
            <NavLink to='/jobs'>Jobs</NavLink> 
            {/* <NavLink to='/about/team'>About</NavLink>
            <NavLink to='/about/company'>About</NavLink> */}

        </>
    )
}
export default Home;