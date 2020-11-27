import MajorSection from "../../sections/MajorSection";
import React from "react";

function Academics() {
    return (
        <MajorSection title="Academics" subtitle="classes, awards, organizations">
            <h2 className="font-normal text-base"><strong>Indiana University</strong> &mdash; undergraduate &mdash; class of 2023</h2>
            <article>
                <div className="body space-y-2">
                    <p>I'm working on dual degrees, a B.S. in Computer Science and a B.S.B. in Finance. Unfortunately, IU doesn't have a formal dual-degree program, but my IB Diploma from high school earned me enough transfer credit to make this possible within 4 years.</p>

                    <p className="font-semibold">GPA 4.0</p>

                    <div>
                        <h3>Awards</h3>
                        <ul>
                            <li>Founder's Scholar{ ' ' }<em>(our equivalent of a Dean's List)</em></li>
                            <li>Comp Science Student Scholarship &mdash; awarded for being a top student in the CS major track</li>
                            <li>Rev. Dr. Karen Layman Gift of Hope Scholarship &mdash; <em>"created to recognize leaders and potential leaders in the United Methodist Church."</em></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Teaching</h3>
                        <ul>
                            <li><a href="https://luddy.indiana.edu/academics/courses/class/iub-fall-2020-csci-h200">CSCI-H 200 Intro to Computers and Programming, Honors</a><br/><em>Undergraduate Instructor</em></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="">Organizations</h3>
                        <ul>
                            <li><a href="https://csclub.sice.indiana.edu/">Computer Science Club at Indiana University</a><br/><em>Vice-President (Former Co-Director of Curriculum Development)</em></li>
                            <li><a href="https://iujur.iu.edu/">Indiana University Journal of Undegraduate Research (IUJUR)</a><br/><em>Student Editorial Board, Applied Sciences</em></li>
                            <li><a href="https://ecmg.us">Endowment Consulting and Management Group (ECMG)</a><br/><em>Technology Analyst</em></li>
                            <li><a href="https://www.indianamun.com/">Indiana Model United Nations (IndianaMUN)</a><br/><em>Travel Team Competitor (General Assembly)</em></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Selected Coursework</h3>
                        <ul>
                            <li>CSCI-H 200 Intro to Computers and Programming, Honors</li>
                            <li>CSCI-H 212 Software Systems, Honors</li>
                            <li>CSCI-C 241 Discrete Structures</li>
                            <li>CSCI-H 343 Data Structures, Honors</li>
                        </ul>
                    </div>
                </div>
            </article>
        </MajorSection>
    )
}

export default Academics