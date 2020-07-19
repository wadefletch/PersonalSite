import React, { Component } from "react";
import { Section } from "./Section";

export class Footer extends Component {
    render() {
        return (
            <Section id="Footer">
                <footer className="text-xs text-gray-600 mt-10">
                    &copy; Wade Fletcher { new Date().getFullYear() }. Content is licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, a Free Culture License.
                    <br/>
                    Based on the wonderful website of <a href="https://github.com/milesmcc/personal">R. Miles McCain</a> (CC Attribution), licensed under <a href="https://github.com/milesmcc/personal/blob/master/LICENSE">GPLv3</a>.
                </footer>
            </Section>
        )
    }
}