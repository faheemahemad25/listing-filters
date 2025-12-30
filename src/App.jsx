// import './App.css'
import { Routes, Route, Outlet } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import User from "./components/User";
import Login from "./components/Login";


import College from "./components/Dashboard/College";
import Students from "./components/Dashboard/Students";
import Faculty from "./components/Dashboard/Faculty";
import Documents from "./components/Dashboard/Documents";
import Fees from "./components/Dashboard/Fees";


import Search from "./components/URLparameters/Search";
import Filter from "./components/URLparameters/Filter";
import Courses from "./components/URLparameters/Courses";
import Placements from "./components/URLparameters/Placements";
import Jobs from "./components/URLparameters/Jobs";

// import 'bootstrap/dist/css/bootstrap.min.css'; // this Step 2


function App() {
  return (
    <>
      {/* <h1>1st Style : JSX-based Routing</h1> */}


      {/* 🟢Topic 2 :  Navigation*/}
      {/* <Navbar /> */}


      {/* 🟢Topic 1 : Routes created */}
      <Routes>
        <Route element={<Navbar />}> {/* 🟢Topic 4 : Layout Route */} {/* 📗🔖Learning 2 : <Navbar />: open and close tag is used to when specific compoent just show on selected routes other than or outer route pe ye nhi show hoga.   */}
          <Route path="/listing-filters"
            element={
              <div>
                <Home />
              </div>
            } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Courses"
            element={
              <>
                {/* <Filter />
                   <Search /> */}
                <Courses />
              </>
            } />
          <Route path="/our-placements" element={<Placements />} />
          <Route path="/jobs" element={<Jobs />} />
        </Route>
         {/* 👇 Routes without Navbar */}

       
        {/* 🟢Topic 5 : Dynamic Route */}        
        {/* <Route path="/users" element={<Users />} />          */}  
        <Route path="/user/:id" element={<User />} />  


        {/* 🟢Topic 3 : Nested Route  //📗🔖 parent route ye h humara*/}
        <Route path="/college" element={<College />} >         {/*  Parent Route  */}
          <Route index element={<Students />} />    {/* 🟢Topic 4 : Index Route */}
          <Route path="students" element={<Students />} />     {/*  Child Route or Routes   */}
          <Route path="faculty" element={<Faculty />} />
          <Route path="documents" element={<Documents />} />
          <Route path="fees" element={<Fees />} />
        </Route>

        <Route path="/search" element={<Search />} />
        {/* <Route path="/login" element={<Login />} /> */}

        {/* 🟢Topic 6 : Route Prefixes */}
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/Signup" element={<Login />} />
        <Route path="/user/forgot" element={<Login />} />

        <Route path="/*" element={<NotFound />} />

      </Routes>

    </>
  )
}
export default App
