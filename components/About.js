import React, { Component } from "react";
import { Section } from "./Section";

export class About extends Component {
    render() {
        return (
            <Section id="About">
                <div className="p-4 bg-gray-900 -m-4 mb-12">
                    <p>
                        <div className="text-gray-200">
                            <img src="/hi.svg" alt="Hi! I'm Wade." className="text-gray-200"/>
                        </div>
                    </p>
                    <p>
                        In 2019, I was named <em>South Carolina Young Entrepreneur of the Year</em> for a company I created, <a href="https://scoretwo.com">ScoreTwo Media</a>.
                        In March 2020, I created <a href="https://covintern.com/jobs/">CovIntern</a>, a remote internship aggregator for students quarantined by COVID-19 that was used by over 120k people in more than 100 countries.
                        Now, I'm building <a href="//undercover.vc">UndercoverVC</a> to give underestimated founders across the country equitable access to venture capital.
                        Find my work in <a href="https://www.morningbrew.com/daily/stories/2020/07/31/get-internship-covid">Morning Brew</a>, <a href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23">MarketWatch</a>, and the <a href="https://www.idsnews.com/article/2020/04/iu-students-navigate-summer-internships-remote-coronavirus">Indiana Daily Student</a><sup>1</sup>.
                    </p>
                    <p>I graduated from high school in June 2019. I'm currently at <a href="//iu.edu">Indiana University Bloomington</a> working on degrees in Computer Science and Finance.<sup>2</sup></p>
                    <div className="footnotes">
                        <div><sup style={ { marginRight: "2px" } }>1</sup>For more information and links to other media references, please see my <a href="#Portfolio">portfolio</a>.</div>
                        <div><sup style={ { marginRight: "2px" } }>2</sup><a href="//yeet.wadefletcher.com/wellyesbutactuallyno">Well yes, but actually no</a> as I'm currently home for a <a href="//utilities.registrar.indiana.edu/calendars/official-calendar/">long winter break</a>.</div>
                    </div>
                </div>
            </Section>
        );
    }
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
</svg>