import React, { Component } from "react";
import { Section } from "./Section";

export class Currently extends Component {
    render() {
        return (
            <Section title="Currently" id="Currently">
                <p>
                    I'm back in Indiana for hybrid classes. I'm also a UI for <a href="https://luddy.indiana.edu/academics/courses/class/iub-fall-2020-csci-h200">CSCI-H 200</a>. Additionally, I'm a remote SWE Intern for <a href="https://urxcommunity.com">URx</a>, a community of university recruiters.
                </p>
                <div className="text-xs text-gray-600">
                    <div>

                    </div>
                </div>
            </Section>
        );
    }
}