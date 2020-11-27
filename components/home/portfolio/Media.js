import MajorSection from "../../sections/MajorSection";
import MediaAppearance from "./MediaAppearance";
import React from "react";

function Media() {
    return (
        <MajorSection title="Media" subtitle="print, podcasts, and more">
            <h2>Print + Web</h2>

            <MediaAppearance
                outlet="The Santa Clara" title="Students See Career Plans Altered Amid Coronavirus"
                date="April 16, 2020" author="Kyle De La Fuente"
                href="https://www.thesantaclara.org/blog/students-see-career-plans-altered-amid-covid-19"
            />
            <MediaAppearance
                outlet="Morning Brew" title="How to Get an Internship During COVID"
                date="July 31, 2020" author="Amanda Yao"
                href="https://www.morningbrew.com/daily/stories/2020/07/31/get-internship-covid"
            />
            <MediaAppearance
                outlet="MarketWatch" title="What pandemic? How Goldman Sachs and Amazon may bring the office home for these interns."
                date="April 24, 2020" author="Archie Mitchell"
                href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23"
            />
            <MediaAppearance
                outlet="Indiana Daily Student" title="How IU is helping students navigate summer internships through COVID-19"
                date="April 26, 2020" author="Ben Price"
                href="https://www.idsnews.com/article/2020/04/iu-students-navigate-summer-internships-remote-coronavirus"
            />
            <MediaAppearance
                outlet="The GW Local" title="Unstuck at Home: These companies want to keep us entertained"
                date="April 2, 2020" author="Sophia Sasson"
                href="https://thegwlocal.com/unstuck-at-home-these-companies-want-to-keep-us-entertained/"
            />

            <h2>Podcasts</h2>

            <MediaAppearance
                outlet="Fundraising Radio" title="Building scout network[s] - how can it help founders and future VCs?"
                date="April 2, 2020" author="Konstantin Dubovitskiy"
                href="https://www.fundraisingradio.com/Wade-Fletcher/"
            />
            <MediaAppearance
                outlet="OurFuture_" title="#73 Saturday Special: Entrepreneurship During COVID-19 with Wade Fletcher, Creator of Covintern.com and Founder of UndercoverVC"
                date="November 14, 2020" author="Michael Sikand"
                href="https://open.spotify.com/episode/1qyNeW3rrY5A1ImuFOgHsE?si=R5o3ufjKTKeJD1iS5mkgGA"
            />
            <MediaAppearance
                outlet="Lead That Thing" title="Lead That Thing (S1 Ep21)"
                date="November 14, 2020" author="Aruna Krishnan"
                href="https://www.amazon.com/S1-Ep21-Aruna-Krishnan-Fletcher/dp/B08KMXHXRC"
            />
        </MajorSection>

    )
}

export default Media