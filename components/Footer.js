import React from "react";
import { Section } from "./Section";

function Footer() {
    return (
        <Section id="Footer">
            <footer className="text-xs text-gray-500 mt-10">
                &copy; Wade Fletcher { new Date().getFullYear() }.
                <br/>
                Content is licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, a Free Culture License.
            </footer>
        </Section>
    )
}

export default Footer