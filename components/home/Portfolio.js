import React from "react";
import { Section } from "../Section";
import Media from "./portfolio/Media";
import Professional from "./portfolio/Professional";
import More from "./portfolio/More";
import Academics from "./portfolio/Academics";
import Projects from "./portfolio/Projects";

function Portfolio() {
    return (
        <Section title="Portfolio" id="Portfolio">
            <p>I work on a wide array of projects, but lately my focus has been on venture capital for students and community building.</p>

            <Projects/>

            <Academics/>

            <Professional/>

            <Media/>

            <More/>
        </Section>
    );
}

export default Portfolio