import React, { Component } from "react";
import { Section } from "./Section";

export class Currently extends Component {
    render() {
        return (
            <Section title="Currently" id="Currently">
                <p>
                    I'm back in Indiana for hybrid classes, and I'm working hard to recruit our first class of fellows for <a href="https://undercover.vc">UndercoverVC</a>.
                </p>
                <p>
                    Additionally, I'm a remote SWE Intern for <a href="https://urxcommunity.com">URx</a> (a community of university recruiters) building an application platform for early-career technical recruiting called TalentBoard.
                </p>
                <div className="text-xs text-gray-600">
                    <div>

                    </div>
                </div>
            </Section>
        );
    }
}