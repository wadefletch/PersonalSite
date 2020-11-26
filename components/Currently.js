import React, { Component } from "react";
import { Section } from "./Section";

export class Currently extends Component {
    render() {
        return (
            <Section title="Currently" id="Currently">
                <p>
                    I'm back home in SC for a long and much-needed winter break.
                    I'm also working hard to interview our first class of fellows for <a href="https://undercover.vc">UndercoverVC</a>.
                </p>
                <div className="text-xs text-gray-600">
                    <div>

                    </div>
                </div>
            </Section>
        );
    }
}