import React, { useState } from 'react';
import { useNavigate } from 'react-router';

//!📗🔖 TOPIC : useNavigate() hook in react-router

function Login() {
    const navigate = useNavigate()

    const[email, setEmail]=useState("")
    const[pswd, setPswd]=useState("")
 

    const handelSubmit = () => {
      
        // validation and Authorization

        if(email==="faheemahemad25@gmail.com" && pswd==="1234"){
            navigate('/college')
        }
        else{
            alert("Enter email or password is incorrect.")
        }

    }



    return (
        <>
             <h1> Topic :  useNavigate()  </h1> 
             <br />
             <hr />
             <br />

            <h1>Login Page</h1>
            
            <form style={{margin:"1.5rem"}} onSubmit={handelSubmit}>
                <label htmlFor="email">Email </label>
                <input type="text" name="email" id="email"  placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br />
                <label htmlFor="password">Password </label>
                <input type="text" name="pswd" id="password" placeholder='Enter password' onChange={(e)=>setPswd(e.target.value)}/>
                <br />
                <br />
                <button>Submit</button>
            </form>

        </>
    );
}
export default Login;