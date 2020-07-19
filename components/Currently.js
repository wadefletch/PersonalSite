import React, { Component } from "react";
import { Section } from "./Section";

export class Currently extends Component {
    render() {
        return (
            <Section title="Currently" id="Currently">
                <p>
                    Since mid-March I've been at home in South Carolina with my family amidst the Coronavirus pandemic. I'm also a remote SWE Intern for <a href="https://urxcommunity.com">URx</a>, a community of university recruiters<sup>3</sup>.
                </p>
                <div className="text-xs text-gray-600">
                    <div>
                        <sup style={{marginRight: "2px"}}>3</sup>
                        I'm working with the founder to democratize access to entry-level tech positions.
                    </div>
                </div>
            </Section>
        );
    }
}