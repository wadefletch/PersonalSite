import Name from "../components/home/Name";
import About from "../components/home/About";
import Currently from "../components/home/Currently";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";
import React from "react";
import Navigation from "../components/Navigation";

function Home() {
    return (
        <div className="mx-8 sm:mx-16 md:mx-20 lg:mx-56">
            <Name/>

            <div className="flex items-start">
                <Navigation/>

                <div className="max-w-2xl -ml-72 md:ml-0 mb-40 space-y-4">
                    <About/>
                    <Currently/>
                    <Portfolio/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home
