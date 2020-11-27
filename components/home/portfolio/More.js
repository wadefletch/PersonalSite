import MajorSection from "../../sections/MajorSection";
import MinorSection from "../../sections/MinorSection";
import React from "react";

function More() {
    return (
        <MajorSection title="More" subtitle="competitions, skills, other stuff">
            <div className="body">
                <p>I am certified in artificial and natural face rock climbing and bouldering instruction (BSA <a href="https://filestore.scouting.org/filestore/pdf/C&C_Foundation_LI.pdf">COPE & Climbing Level I</a> and <a href="https://filestore.scouting.org/filestore/pdf/Climbing_LII.pdf">Climbing Level II</a>)</p>

                <p>I am comfortable programming in Python and Java, as well as the typical web technologies (HTML+JS+CSS). Lately I've been vibing with Django and Tailwind, as well as learning React.</p>

                <p>I won an <a href="https://theemmys.tv/nspa-2019-winners-announced/">Emmy</a> (well, a student Emmy) in 2019. <a href="https://en.wikipedia.org/wiki/Bill_Nye">Bill Nye</a> presented our category.</p>

                <p>I'm an <a href="https://en.wikipedia.org/wiki/Eagle_Scout_(Boy_Scouts_of_America)">Eagle Scout</a> in <a href="https://en.wikipedia.org/wiki/Boy_Scouts_of_America">BSA</a> Troop 202 and a <a href="https://en.wikipedia.org/wiki/Order_of_the_Arrow_honors_and_awards#Vigil_Honor">Vigil Honor</a> member of the <a href="https://en.wikipedia.org/wiki/Order_of_the_Arrow">Order of the Arrow</a>, Muscogee Lodge #221.</p>

                <p>I've some familiarity with hackathons&mdash;participating in more of them in the next year is one of my goals.<sup>3</sup></p>
            </div>

            <MinorSection title="hackathons and competitions">
                <ul>
                    <li><strong>1st place @ Intel-OA Hackathon</strong> (Fall 2017): won first place in the Communications division in the inaugural <a href="http://event.oa-bsa.org/events/hackathon2017/">Intel-OA Hackathon</a> with <a href="https://github.com/wadefletch/NOACTS">NOACTS</a>.</li>
                    <li><strong>1st place @ CodeDay Columbia</strong> (Spring 2016): won first place in the Web division at <a href="https://www.codeday.org/columbia">CodeDay Columbia</a> with <a href="https://github.com/wadefletch/theforest">TheForest</a>.</li>
                </ul>
            </MinorSection>

            <div className="footnotes">
                <div><sup style={ { marginRight: "2px" } }>3</sup> I imagine COVID-19 will make this difficult. (November Update: It did.)</div>
            </div>
        </MajorSection>
    )
}

export default More