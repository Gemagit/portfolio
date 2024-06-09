import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Technologies from './Technologies/Technologies';
import Portfolio from './Portfolio/Portfolio';

const MainComponent = () => {
    return (
        <>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </Routes>
            </main>
        </>
    )
}

export default MainComponent;