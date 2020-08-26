import React, { Component } from "react";
import { Section } from "./Section";

export class Name extends Component {
    render() {
        return (
            <Section>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center max-w-2xl">
                    <img src="/me.jpg" alt="Wade Fletcher Headshot" className="relative w-32 rounded-xl mb-6 lg:mb-0 shadow border-4 border-gray-600"/>
                    <div>
                        <div className='font-extrabold tracking-wide leading-tight text-5xl'>Wade Fletcher</div>
                        <div className='ml-2 text-gray-600 font-medium text-xl'>
                            SWE Intern at <a href='//urxcommunity.com' className='text-blue-700 font-semibold no-underline'>@URx</a>
                            <br className='block sm:hidden'/>
                            <span className='text-gray-400'> \\ </span>
                            CS and Finance at <a href='//indiana.edu' className='text-red-800 font-semibold no-underline'>@Indiana</a>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}
