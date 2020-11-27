import MajorSection from "../../sections/MajorSection";
import MinorSection from "../../sections/MinorSection";
import React from "react";

function Professional() {
    return (
        <MajorSection title="Professional" subtitle="URx, ScoreTwo, Wallick Investments">
            <article>
                <p className="dates">May 2020 - August 2020</p>
                <p className="body">
                    <a href="https://www.urxcommunity.com/" className="title"><strong>URx</strong></a>: created a new platform for technical assessment in university recruiting used by Facebook, Netflix, eBay, and Greylock.
                </p>
            </article>

            <article>
                <p className="dates">December 2017 - February 2020</p>
                <p className="body">
                    <a href="https://scoretwo.com/" className="title"><strong>ScoreTwo</strong></a>: founded a convergent media company focused on athletics; named SC Young Entrepreneur of the Year in 2019. <em>Exited via acquisition in 2020.</em>
                </p>
                <MinorSection title="more about ScoreTwo">
                    <ul>
                        <li>I started ScoreTwo while still a student in the Richland Northeast Convergence Media magnet program. At its peak, I was quarterbacking 5 part-time employees working with top prep athletics programs travelling across the state.</li>
                        <li>In 2019, I was named a <i>SC Young Entrepreneur of the Year</i> by the SC Economic Education Foundation and SC Governor Henry McMaster for my work with ScoreTwo.</li>
                    </ul>
                </MinorSection>
            </article>

            <article>
                <p className="dates">May 2019 - August 2019</p>
                <p className="body">
                    <a href="https://www.wallickinvestments.com/" className="title"><strong>Wallick Investments</strong></a>: built a backtesting and automation suite (still) used to manage a $70MM+ portfolio.
                </p>
                <MinorSection title="more about Wallick Investments">
                    <ul>
                        <li>I worked one-on-one with a Junior Portfolio Manager to automate away hours of daily work monitoring portfolio performance and collecting relevant data on acquisition targets.</li>
                        <li>Day-to-day work often included creating Jupyter Notebooks to test, visualize, and validate the partners' theory of the day.</li>
                        <li>I also created a backtesting pipeline used to validate a novel <a href="https://us.spindices.com/indices/strategy/sp-economic-rotator-index-equity-only">factor rotation</a> strategy that is still used to manage millions of client money.</li>
                    </ul>
                </MinorSection>
            </article>
        </MajorSection>

    )
}

export default Professional