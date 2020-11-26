import React, { Component } from "react";
import { Section } from "./Section";

export class Name extends Component {
    render() {
        return (
            <Section>
                <div className="mt-24 mb-16 ml-0 md:ml-4 md:pl-36">
                    <div className='font-extrabold leading-tight text-5xl w-full'>Wade Fletcher</div>
                    <div className='ml-2 text-gray-400 font-medium text-xl w-full'>
                        Building <a href='//undercover.vc' className='text-gray-300 transition hover:text-red-600 font-semibold no-underline'>@UndercoverVC</a>

                        <br className='block sm:hidden'/><span className='text-gray-400'> \\ </span>

                        CS and Finance at <a href='//indiana.edu' className='text-gray-300 transition hover:text-red-600 font-semibold no-underline'>@Indiana</a>
                    </div>
                </div>
            </Section>
        )
    }
}
