import React from "react";
import { Section } from "../Section";

function About() {
    return (
        <Section id="About">
            <div className="p-4 -m-4 bg-gray-900 mb-12">
                <p><img src="/hi.svg" alt="Hi! I'm Wade." className="text-gray-200"/></p>

                <p>
                    I'm interested in startups, community building, and student entrepreneurship.
                    In 2019, I was named <em>South Carolina Young Entrepreneur of the Year</em> for a company I created, <a href="https://scoretwo.com">ScoreTwo Media</a>.
                    In March 2020, I created <a href="https://covintern.com/jobs/">CovIntern</a>, a remote internship aggregator for students quarantined by COVID-19 I grew to over 120k users.
                    Now, I'm building <a href="//undercover.vc">UndercoverVC</a> to give underestimated founders across the country equitable access to venture capital.
                    Find my work in <a href="https://www.morningbrew.com/daily/stories/2020/07/31/get-internship-covid">Morning Brew</a>, <a href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23">MarketWatch</a>, and the <a href="https://www.idsnews.com/article/2020/04/iu-students-navigate-summer-internships-remote-coronavirus">Indiana Daily Student</a><sup>1</sup>.
                </p>

                <p>
                    I graduated from high school in June 2019. I'm currently at <a href="//iu.edu">Indiana University Bloomington</a> working on degrees in Computer Science and Finance.<sup>2</sup>
                </p>

                <div className="footnotes">
                    <div><sup style={ { marginRight: "2px" } }>1</sup>For more information and links to other media references, please see my <a href="#Portfolio">portfolio</a>.</div>
                    <div><sup style={ { marginRight: "2px" } }>2</sup><a href="//yeet.wadefletcher.com/wellyesbutactuallyno">Well yes, but actually no</a> as I'm currently home for a <a href="//utilities.registrar.indiana.edu/calendars/official-calendar/">long winter break</a>.</div>
                </div>
            </div>
        </Section>
    )
}

export default About