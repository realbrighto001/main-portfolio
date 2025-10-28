import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AboutMe from "./components/AboutMe"
import "./App.css";
import Myservice from "./components/Myservice";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer"


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Navbar dark={dark} setDark={setDark} />
      
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/myservice" element={<Myservice/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
