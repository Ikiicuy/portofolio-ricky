import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Project from "./Component/Project";
import Partikel from "./Component/Partikel";
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
       <Partikel id="particles"/>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
