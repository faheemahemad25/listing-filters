// import './App.css'
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/our-placements" element={<Placements />} />
          <Route path="/jobs" element={<Jobs />} />
        </Route>

        {/* Routes without Navbar */}
        <Route path="/user/:id" element={<User />} />

        {/* Nested routes for College Dashboard */}
        <Route path="/college" element={<College />}>
          <Route index element={<Students />} />
          <Route path="students" element={<Students />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="documents" element={<Documents />} />
          <Route path="fees" element={<Fees />} />
        </Route>

        {/* Other standalone routes */}
        <Route path="/search" element={<Search />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/Signup" element={<Login />} />
        <Route path="/user/forgot" element={<Login />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}
export default App