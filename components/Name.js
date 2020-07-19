import React, { Component } from "react";
import { Section } from "./Section";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Name extends Component {
    render() {
        return (
            <Section>
                <div>
                    <div className='font-extrabold tracking-wide leading-tight text-6xl'>Wade Fletcher</div>
                    <div className='ml-2 text-gray-600 font-medium text-xl md:text-2xl'>
                        SWE Intern at <a href='//urxcommunity.com' className='text-blue-700 font-semibold no-underline'>@URx</a>
                        <br className='block sm:hidden'/>
                        <span className='text-gray-400'> \\ </span>
                        CS and Finance at <a href='//indiana.edu' className='text-red-800 font-semibold no-underline'>@Indiana</a>
                    </div>
                </div>
            </Section>
        )
    }
}
