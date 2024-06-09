import React from "react";
import AboutMe from '../AboutMe/AboutMe';
import Technologies from "../Technologies/Technologies";
import Portfolio from "../Portfolio/Portfolio";



const Home = () => {
    return (
        <>
            <main className="home">
               <AboutMe/>
               <Technologies/>
               <Portfolio/>
            </main>
        </>
    )
}

export default Home;