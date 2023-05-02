import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Reference from "./Components/References";
import Certification from "./Components/Certification";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Reference/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
