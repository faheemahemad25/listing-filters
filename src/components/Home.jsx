import React from 'react';
import { Link, NavLink } from 'react-router';

function Home() {
    return (
        <>
            <h1>Component 1 :  Home Page</h1> <br />
            <Link to='/contact/instagram'>Contact</Link> <br /> <br />
            <NavLink to='/about/founder'>About</NavLink>
            {/* <NavLink to='/about/team'>About</NavLink>
            <NavLink to='/about/company'>About</NavLink> */}

        </>
    )
}
export default Home;