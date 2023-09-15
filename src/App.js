// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Contact from "./Pages/Contact";

function App() {
    return (
        <div>
            <div className=" min-vh-100">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
