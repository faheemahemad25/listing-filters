import React from 'react';
import { Link, NavLink } from 'react-router';

function Home() {
    return (
        <>
            <h1>Component 1 :  Home Page</h1> <br />
            <Link to='/contact'>Contact</Link> <br /> <br />
            <Link to='/about'>About</Link> <br /> <br />
            <Link to='/jobs'>Jobs</Link> 
            {/* <Link to='/about/team'>About</Link>
            <Link to='/about/company'>About</Link> */}

        </>
    )
}
export default Home;