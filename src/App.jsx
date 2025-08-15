import { BrowserRouter, Routes, Route } from "react-router";
// import { useState } from "react";
import Header from "./components/Header/Header";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
