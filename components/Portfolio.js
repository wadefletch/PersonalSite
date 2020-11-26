import React, { Component } from "react";
import { Section } from "./Section";
import MajorSection from "./sections/MajorSection";
import MinorSection from "./sections/MinorSection";

export class Portfolio extends Component {
    render() {
        return (
            <Section title="Portfolio" id="Portfolio">
                <p>I work on a wide array of projects, but lately my focus has been on venture capital for students and Gen-Z, through my work with <a href="//undercover.vc">UndercoverVC</a>.</p>

                <MajorSection title="Projects" subtitle="UndercoverVC, CovIntern, and more">
                    <article>
                        <div className="dates">August 2020 - Present</div>
                        <div className="title"><strong>UndercoverVC</strong> &mdash; <a href="//undercover.vc">site</a></div>
                        <p className="body">We're building a network of venture funds and university students to bring access to campuses historically underrepresented in venture capital programs. We're currently interviewing for our first class of 40 campus fellows.</p>
                    </article>
                    <article>
                        <div className="dates">May 2020 - August 2020</div>
                        <div className="title"><strong>TalentBoard</strong> &mdash; <a href="//talentboard.io">site</a></div>
                        <p className="body"><em>(URx Internship Project)</em> TalentBoard allows students to use <em>one</em> technical assessment and <em>one</em> application to apply to internships in just a few clicks, reducing cost for recruiters and saving time for students. It's built with <a href="https://www.djangoproject.com/">Django</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>. <a href="//talentboard.io/companies/">It's used by Netflix, Facebook, Robinhood, Cloudera, and Greylock Partners, among others.</a></p>
                    </article>
                    <article>
                        <div className="dates">March 2020 - August 2020</div>
                        <div className="title"><strong>CovIntern</strong> &mdash; <a href="https://covintern.com">site</a>, <a href="//github.com/wadefletch/covintern">source</a></div>
                        <p className="body">
                            CovIntern aggregates remote internships for university and secondary students staying at home quarantining amidst the 2020 COVID-19 global pandemic. The site has helped over 100k unique users in 100+ countries. It has also been shared by the career centers of 50 colleges and universities, and it has been featured in&nbsp;
                            <a href="https://www.morningbrew.com/daily/stories/2020/07/31/get-internship-covid">Morning Brew</a>,&nbsp;
                            <a href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23">Marketwatch</a>,&nbsp;
                            <a href="https://www.boston.com/jobs/job-doc/2020/05/04/internship-cancelled-now-what">Boston.com</a>,&nbsp;
                            <a href="https://www.idsnews.com/article/2020/04/iu-students-navigate-summer-internships-remote-coronavirus">IDS</a>,&nbsp;
                            <a href="https://www.thesantaclara.org/blog/students-see-career-plans-altered-amid-covid-19">The Santa Clara</a>, and&nbsp;
                            <a href="https://thegwlocal.com/unstuck-at-home-these-companies-want-to-keep-us-entertained/">The GW Local</a>.
                        </p>
                        <MinorSection title="CovIntern in Marketwatch">
                            <p className="has-text-grey">"With internships at companies from Disney to Airbnb being canceled, demand for those remaining is high. So Wade Fletcher, a first-year computer science and finance student at Indiana University, created a database of remote internships, called CovIntern. Looking for an internship of his own, he saw the need for an easy way to browse opportunities. The site, showcasing good internships and substitutes unaffected by the crisis, has seen over 60,000 users in the three weeks since he shared it with his LinkedIn network. 'My post has like 150,000 views or something ridiculous,' he said." &mdash; <i>Archie Mitchell, writing for <a href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23">Marketwatch</a></i></p>
                        </MinorSection>
                        <MinorSection title="more people using CovIntern">
                            <p><a href="https://www.thesantaclara.org/blog/students-see-career-plans-altered-amid-covid-19">The Santa Clara</a>: "Covintern.com, developed by a student at Indiana University, serves to provide a crowdsourced list of remote internships in a wide variety of fields, including non-profit work, graphic design, data science and marketing. "</p>
                            <p><a href="https://thegwlocal.com/unstuck-at-home-these-companies-want-to-keep-us-entertained/">The GW Local</a>: "If you were like me, starting to worry about summer internships, fear no longer. Through Linkedin, I discovered an amazing student at Indiana University who created an app for pairing students with internships that work remotely! Wade Fletcher created an app called CovIntern and you can visit their website and look at the awesome internship opportunities they have to offer."</p>
                            <p><a href="https://www.boston.com/jobs/job-doc/2020/05/04/internship-cancelled-now-what">Boston.com</a>: "Check out covintern.com, a brilliant idea launched by a college student."</p>
                            <p><a href="https://launch.drew.edu/blog/2020/04/05/student-built-service-aggregates-remote-internships-with-status-updates/">Drew University</a>: "It has been said that necessity is the mother of invention and in the wake of Covid-19, many students are in need of remote internship opportunities. Wade Fletcher, a student at Indiana University, saw this need and created COVINTERN, a service that aggregates remote internship opportunities at major companies and start-ups and provides status updates."</p>

                            <p>
                                Also:&nbsp;
                                <a href="https://web.archive.org/web/20200430215839/https://educators.aiga.org/to-graduates-everywhere/">AIGA, the professional association for design</a>,&nbsp;
                                <a href="https://twitter.com/AUCareerCenter/status/1249770608717713408?s=20">American University</a>,&nbsp;
                                <a href="https://www.uah.edu/career-services/news/14925-remote-positions-and-hiring-during-covid-19">University of Alabama Huntsville</a>,&nbsp;
                                <a href="https://twitter.com/BaylorCBC/status/1245338505120751618?s=20">Baylor University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200430215852/https://www.biola.edu/career-development/covid-19">Biola University</a>,&nbsp;
                                <a href="https://bu-beyond.blog/2020/05/21/covid-19-job-search-resources-updated/">Boston University</a>,&nbsp;
                                <a href="https://twitter.com/CSUFcareer/status/1250463668879450112?s=20">California State University, Fullerton</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200509061934/https://www.csusb.edu/career-center/careers-jobs-internships-during-covid-19">California State University, San Bernardino</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053747/https://www.chapman.edu/business/career-services/student/resources.aspx">Chapman University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428051946/https://as.cornell.edu/summer2020-resources">Cornell University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200525075204/https://engineering.dartmouth.edu/careers/students/remote-services">Dartmouth College</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506152313/http://www.glunis.com/web/20200506152313">Delta State University</a>,&nbsp;
                                <a href="https://tartanedge.edinboro.edu/resources/covintern-get-your-virtual-internship/">Edinboro University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506151813/https://www.elon.edu/u/spdc/resources/">Elon University</a>,&nbsp;
                                <a href="https://twitter.com/CesGateway/status/1246120572351848448?s=20">Gateway Technical College</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053318/https://about.gitlab.com/company/culture/all-remote/internship/">GitLab</a>,&nbsp;
                                <a href="https://www.good-goes-viral.com/post/covintern">Good Goes Viral</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200525075127/https://undergrad.gov.harvard.edu/summer-opportunities">Harvard University</a>,&nbsp;
                                <a href="https://www.hercampus.com/school/gwu/how-keep-developing-professionally-quarantine">HerCampus</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506152145/https://myemail.constantcontact.com/Bunche-Center-Monthly-Newsletter---March-2020.html?soid=1123721102917&aid=-uYL9d0MNM4">Howard University</a>,&nbsp;
                                <a href="https://joinup.ec.europa.eu/collection/digital-response-covid-19/open-source-solutions">Joinup (an official website of the European Union)</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052917/https://www.kutztown.edu/about-ku/administrative-offices/career-development-center/staying-resilient-during-your-search.html">Kutztown University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053024/https://bsosundergrad.umd.edu/your-career/internship">Universtiy of Maryland</a>,&nbsp;
                                <a href="https://medium.com/phamiliarizing-myself-with-computer-science/my-internship-was-cancelled-due-to-covid-19-now-what-bb11e8e82b5f">Medium (Isabella Pham)</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506152522/https://www.millersville.edu/elcm/internships/internship-search-engines.php">Millersville University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200430215823/https://cla.umn.edu/career-services-office/students/covid-19-response-resources-students">University of Minnesota</a>,&nbsp;
                                <a href="https://twitter.com/MSU_StudentGov/status/1247954362099535874?s=20">Morehead State University</a>,&nbsp;
                                <a href="https://nyuwassermanblog.com/2020/03/25/helpful-articles-resources-in-the-time-of-coronavirus/">New York University (NYU)</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506151309/https://career.tcnj.edu/covid-19-career-resources/">The College of New Jersey (TCNJ)</a>,&nbsp;
                                <a href="https://www.nicksingh.com/posts/how-to-land-tech-jobs-during-covid-19">Nick Singh</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052530/https://careers.unc.edu/students/covid-19-job-search">University of North Carolina (UNC)</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052843/https://poole.ncsu.edu/undergraduate/careers/student-resources/apply/who-is-hiring-during-the-covid-19-pandemic/">NC State Universtiy</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052002/https://www.northwestern.edu/careers/about-us/covid-faq/index.html">Northwestern University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200509061905/https://ecs.osu.edu/sites/default/files/uploads/special_job_search_resources_during_covid-19.pdf">The Ohio State University</a>,&nbsp;
                                <a href="https://www.omaha.com/money/markets/lynnley-browning-not-all-internships-are-canceled-snag-one-and-show-your-grit/article_5587bd2e-4a85-5c0e-80e5-3ee9b82ebfdf.html">Omaha World-Herald</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200427054210/https://krannert.purdue.edu/kpdc/current-students.php">Purdue University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506151320/https://www.rochester.edu/careercenter/covid19/resources.html">University of Rochester</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200509062344/https://www.rit.edu/careerservices/student/coronavirus-career-resources">Rochester Institute of Technology</a>,&nbsp;
                                <a href="https://twitter.com/RutgersCommInfo/status/1248000198711836677">Rutgers University</a>,&nbsp;
                                <a href="https://twitter.com/ShipCareer/status/1252644568656482305">Shippensburg Univeristy</a>,&nbsp;
                                <a href="http://careersapps.usc.edu/carl/index.php?se=c&mId=0&sId=739&ssId=741&page=1&order=media_type&flag=1">University of Southern California (USC)</a>,&nbsp;
                                <a href="https://twitter.com/SECareerService/status/1247995843451465729">Southwest Missouri State University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052741/https://careertools.binghamton.edu/channels/covid-19-career-resources/">SUNY Binghamton</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052420/https://www.oswego.edu/career-services/virtual-internships-and-jobs">SUNY Oswego</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428051829/https://www.swarthmore.edu/career-services/navigating-remote-summer-experiences">Swarthmore College</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053504/https://www.utsa.edu/today/2020/04/story/university-career-center-virtual.html">University of Texas at San Antonio</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053555/https://careerengagement.utexas.edu/students-alumni/undergrad-virtual-career-connections/">University of Texas at Austin</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506152149/https://www.towson.edu/careercenter/students/">Towson University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052644/https://www.union.edu/becker-career-center/internship-and-job-resources-field">Union College</a>,&nbsp;
                                <a href="https://twitter.com/VCUCareers/status/1251242799271497728?s=20">Virginia Commonwealth University</a>,&nbsp;
                                <a href="https://www.pilotonline.com/business/vp-bz-career-connection-0628-20200628-xtsjriew4bhcbexn7pw6zd6bzi-story.html">The Virginian-Pilot</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053640/https://career.vt.edu/content/career_vt_edu/en/covid-19.html">Virginia Tech</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052752/https://confluence.uwf.edu/pages/viewpage.action?pageId=146422463">University of West Florida</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428053209/https://wmich.edu/career/part-time-remote-covid-19">Western Michigan University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428051620/http://www.westfield.ma.edu/academics/career-center/internships">Westfield State University</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200428052433/https://www.uwlax.edu/aaccs/">University of Wisconsin</a>,&nbsp;
                                <a href="https://web.archive.org/web/20200506152214/https://ocs.yale.edu/narrative/summer-plans-covid-19">Yale University</a>, and&nbsp;
                                <a href="https://web.archive.org/web/20200428053145/https://yorkinternational.yorku.ca/go-global/remote-virtual-internships/">York University</a>.
                            </p>
                        </MinorSection>
                    </article>

                    <MinorSection title="additional projects">
                        <ul>
                            <li><a href="https://internalerts.io">InternAlerts</a>&nbsp;&mdash; tracks more than 50 job boards for the posting of new intern roles. When an application opens, the members tracking it get an email.</li>
                            <li><a href="https://github.com/wadefletch/python-ergast">python-ergast</a>&nbsp;&mdash; ORM-ing 60 years of F1 lap data with python.</li>
                            <li><a href="https://github.com/csclubiu/ChatbotWorkshop">HotelBot</a>&nbsp;&mdash; part of a CSClub@IU workshop I did with Brady Anderson on chatbots for business.</li>
                            <li><a href="https://munrank.com/">MUNrank.com</a>&nbsp;&mdash; a new ranking engine for collegiate Model United Nations. (Never figured out how to get conference data consistently.)</li>
                        </ul>
                    </MinorSection>
                </MajorSection>

                <MajorSection title="Academics" subtitle="classes, awards, organizations">
                    <div className="mb-1 text-base text-gray-200"><strong>Indiana University</strong> &mdash; undergraduate &mdash; class of 2023</div>
                    <article>
                        <div className="body">
                            <p>I'm working on dual degrees, a B.S. in Computer Science and a B.S.B. in Finance. Unfortunately, IU doesn't have a formal dual-degree program, but my IB Diploma from high school earned me enough transfer credit to make this possible within 4 years.</p>
                            <p className="font-semibold mt-2">GPA 4.0</p>
                            <div className="font-semibold mt-2 text-gray-300">Awards</div>
                            <ul>
                                <li>Founder's Scholar&nbsp;<em>(our equivalent of a Dean's List)</em></li>
                                <li>Comp Science Student Scholarship &mdash; awarded for being a top student in the CS major track</li>
                                <li>Rev. Dr. Karen Layman Gift of Hope Scholarship &mdash; <em>"created to recognize leaders and potential leaders in the United Methodist Church."</em></li>
                            </ul>
                            <div className="font-semibold mt-2 text-gray-300">Teaching</div>
                            <ul>
                                <li><a href="https://luddy.indiana.edu/academics/courses/class/iub-fall-2020-csci-h200">CSCI-H 200 Intro to Computers and Programming, Honors</a><br/><em>Undergraduate Instructor</em></li>
                            </ul>
                            <div className="font-semibold mt-2 text-gray-300">Organizations</div>
                            <ul>
                                <li><a href="https://csclub.sice.indiana.edu/">Computer Science Club at Indiana University</a><br/><em>Vice-President (Former Co-Director of Curriculum Development)</em></li>
                                <li><a href="https://iujur.iu.edu/">Indiana University Journal of Undegraduate Research (IUJUR)</a><br/><em>Student Editorial Board, Applied Sciences</em></li>
                                <li><a href="https://ecmg.us">Endowment Consulting and Management Group (ECMG)</a><br/><em>International Equities Analyst (Incoming Quant PM)</em></li>
                                <li><a href="https://www.indianamun.com/">Indiana Model United Nations (IndianaMUN)</a><br/><em>Travel Team Competitor (General Assembly)</em></li>
                            </ul>
                            <div className="font-semibold mt-2 text-gray-300">Selected Coursework</div>
                            <ul>
                                <li>CSCI-H 200 Intro to Computers and Programming, Honors</li>
                                <li>CSCI-C 241 Discrete Structures</li>
                                <li>CSCI-H 212 Software Systems, Honors</li>
                            </ul>
                        </div>
                    </article>
                </MajorSection>

                <MajorSection title="Professional" subtitle="URx, ScoreTwo, Wallick Investments">
                    <article>
                        <p className="dates">May 2020 - August 2020</p>
                        <p className="body"><a href="https://www.urxcommunity.com/" className="title"><strong>URx</strong></a>: created a new platform for technical assessment in university recruiting used by Facebook, Netflix, eBay, and Greylock.</p>
                    </article>
                    <article>
                        <p className="dates">December 2017 - February 2020</p>
                        <p className="body"><a href="https://scoretwo.com/" className="title"><strong>ScoreTwo</strong></a>: founded a convergent media company focused on athletics; named SC Young Entrepreneur of the Year in 2019. <em>Exited via acquisition in 2020.</em></p>
                        <MinorSection title="more about ScoreTwo">
                            <ul>
                                <li>I started ScoreTwo while still a student in the Richland Northeast Convergence Media magnet program. At its peak, I was quarterbacking 5 part-time employees working with top prep athletics programs travelling across the state.</li>
                                <li>In 2019, I was named a <i>SC Young Entrepreneur of the Year</i> by the SC Economic Education Foundation and SC Governor Henry McMaster for my work with ScoreTwo.</li>
                            </ul>
                        </MinorSection>
                    </article>
                    <article>
                        <p className="dates">May 2019 - August 2019</p>
                        <p className="body"><a href="https://www.wallickinvestments.com/" className="title"><strong>Wallick Investments</strong></a>: built a backtesting and automation suite (still) used to manage a $70MM+ portfolio.</p>
                        <MinorSection title="more about Wallick Investments">
                            <ul>
                                <li>I worked one-on-one with a Junior Portfolio Manager to automate away hours of daily work monitoring portfolio performance and collecting relevant data on acquisition targets.</li>
                                <li>Day-to-day work often included creating Jupyter Notebooks to test, visualize, and validate the partners' theory of the day.</li>
                                <li>I also created a backtesting pipeline used to validate a novel <a href="https://us.spindices.com/indices/strategy/sp-economic-rotator-index-equity-only">factor rotation</a> strategy that is still used to manage millions of client money.</li>
                            </ul>
                        </MinorSection>
                    </article>
                </MajorSection>

                <MajorSection title="More" subtitle="competitions, skills, other stuff">
                    <div className="body">
                        <p>I am certified in artificial and natural face rock climbing and bouldering instruction (BSA <a href="https://filestore.scouting.org/filestore/pdf/C&C_Foundation_LI.pdf">COPE & Climbing Level I</a> and <a href="https://filestore.scouting.org/filestore/pdf/Climbing_LII.pdf">Climbing Level II</a>)</p>
                        <p>I am comfortable programming in Python and Java, as well as the typical web technologies (HTML+JS+CSS). Lately I've been vibing with Django and Tailwind, as well as learning React.</p>
                        <p>I won an <a href="https://theemmys.tv/nspa-2019-winners-announced/">Emmy</a> (well, a student Emmy) in 2019. <a href="https://en.wikipedia.org/wiki/Bill_Nye">Bill Nye</a> presented our category.</p>
                        <p>I'm an <a href="https://en.wikipedia.org/wiki/Eagle_Scout_(Boy_Scouts_of_America)">Eagle Scout</a> in <a href="https://en.wikipedia.org/wiki/Boy_Scouts_of_America">BSA</a> Troop 202 and a <a href="https://en.wikipedia.org/wiki/Order_of_the_Arrow_honors_and_awards#Vigil_Honor">Vigil Honor</a> member of the <a href="https://en.wikipedia.org/wiki/Order_of_the_Arrow">Order of the Arrow</a>, Muscogee Lodge #221.</p>
                        <p>I've some familiarity with hackathons&mdash;participating in more of them in the next year is one of my goals.<sup>4</sup></p>
                    </div>
                    <MinorSection title="hackathons and competitions">
                        <ul>
                            <li><strong>1st place @ Intel-OA Hackathon</strong>&nbsp;(Fall 2017): won first place in the Communications division in&nbsp;the inaugural <a href="http://event.oa-bsa.org/events/hackathon2017/">Intel-OA Hackathon</a> with <a href="https://github.com/wadefletch/NOACTS">NOACTS</a>.</li>
                            <li><strong>1st place @ CodeDay Columbia</strong> (Spring 2016): won first place in the Web division at <a href="https://www.codeday.org/columbia">CodeDay Columbia</a> with <a href="https://github.com/wadefletch/theforest">TheForest</a>.</li>
                        </ul>
                    </MinorSection>
                    <div className="footnotes">
                        <div>
                            <sup style={ { marginRight: "2px" } }>4</sup>
                            I imagine COVID-19 will make this difficult.
                        </div>
                    </div>
                </MajorSection>
            </Section>
        );
    }
}