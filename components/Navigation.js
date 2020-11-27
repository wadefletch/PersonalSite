import React from "react";

function Navigation() {
    return (
        <nav className="flex md:flex-col md:w-32
                text-gray-400
                sticky top-0
                mr-6 mt-6 md:mt-16 ml-4
                pt-4
                md:space-y-1
                transform rotate-90 md:rotate-0 origin-top-left">

            <a href="#About">About</a>
            <a href="#Currently">Currently</a>
            <a href="#Portfolio">Portfolio</a>

            <div className="hidden md:block ml-6 space-y-1 text-xs">
                <a href="#Portfolio">Projects</a>
                <a href="#Portfolio">Academics</a>
                <a href="#Portfolio">Professional</a>
                <a href="#Portfolio">Media</a>
                <a href="#Portfolio">More</a>
            </div>

            <a href="#Contact">Contact</a>
        </nav>
    )
}

export default Navigation