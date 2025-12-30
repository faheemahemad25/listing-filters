import React from 'react';
import { Link, Outlet } from 'react-router'
import '../../styles/college.css'

// 📗🔖parent route ye h humara
function College() {
    return (
        <div style={{border:"2px solid red", padding:"5px"}}>
            <nav id='dashboardHeader'>
                <div>
                    {/* <Link className='linkTag' to="/">Home</Link> */}
                    <Link id='logo' to="/">
                        <img style={{ width: "100px" }} src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png" alt="yourLogo" />
                    </Link>
                </div>
                <div>
                    Logout
                </div>
            </nav>

            <div id='centerDiv'>
                {/* <Link className='linkTag' to="college"><h1>Dashboard</h1></Link> */}
                <Link className='linkTag' to="/college"><h1>Dashboard</h1></Link>
                <nav id='centerLinks'>
                    <Link className='linkTag' to="students">Students</Link>
                    <Link className='linkTag' to="faculty">Faculty</Link>
                    <Link className='linkTag' to="documents">Documents</Link>
                    <Link className='linkTag' to="fees">Fees</Link>
                </nav>
            </div>

           
            <Outlet />   {/* 📗🔖Learning 4 : Child Routes ke component hi yha pr render/appear hota h. */}

        </div>
    );
}
export default College;