import MajorSection from "../../sections/MajorSection";
import MinorSection from "../../sections/MinorSection";
import React from "react";

function Projects() {
    return (
        <MajorSection title="Projects" subtitle="UndercoverVC, CovIntern, and more">
            <article>
                <div className="dates">August 2020 - Present</div>
                <div className="title"><strong>UndercoverVC</strong> &mdash; <a href="//undercover.vc">site</a></div>
                <p className="body">
                    We're building a network of venture funds and university students to bring access to campuses historically underrepresented in venture capital programs. We're currently interviewing for our first class of 40 campus fellows.
                    I've talked about UndercoverVC on <a href="https://www.fundraisingradio.com/Wade-Fletcher/">Funraising Radio</a>
                </p>
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
                    CovIntern aggregates remote internships for university and secondary students staying at home quarantining amidst the 2020 COVID-19 global pandemic. The site has helped over 100k unique users in 100+ countries. It has also been shared by the career centers of 50 colleges and universities, and it has been featured in
                    { ' ' }<a href="https://www.morningbrew.com/daily/stories/2020/07/31/get-internship-covid">Morning Brew</a>,
                    { ' ' }<a href="https://www.marketwatch.com/story/what-pandemic-how-goldman-sachs-and-amazon-may-bring-the-office-home-for-these-interns-2020-04-23">Marketwatch</a>,
                    { ' ' }<a href="https://www.boston.com/jobs/job-doc/2020/05/04/internship-cancelled-now-what">Boston.com</a>,
                    { ' ' }<a href="https://www.idsnews.com/article/2020/04/iu-students-navigate-summer-internships-remote-coronavirus">IDS</a>,
                    { ' ' }<a href="https://www.thesantaclara.org/blog/students-see-career-plans-altered-amid-covid-19">The Santa Clara</a>, and
                    { ' ' }<a href="https://thegwlocal.com/unstuck-at-home-these-companies-want-to-keep-us-entertained/">The GW Local</a>.
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
                        Also:
                        { ' ' }<a href="https://web.archive.org/web/20200430215839/https://educators.aiga.org/to-graduates-everywhere/">AIGA, the professional association for design</a>,
                        { ' ' }<a href="https://twitter.com/AUCareerCenter/status/1249770608717713408?s=20">American University</a>,
                        { ' ' }<a href="https://www.uah.edu/career-services/news/14925-remote-positions-and-hiring-during-covid-19">University of Alabama Huntsville</a>,
                        { ' ' }<a href="https://twitter.com/BaylorCBC/status/1245338505120751618?s=20">Baylor University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200430215852/https://www.biola.edu/career-development/covid-19">Biola University</a>,
                        { ' ' }<a href="https://bu-beyond.blog/2020/05/21/covid-19-job-search-resources-updated/">Boston University</a>,
                        { ' ' }<a href="https://twitter.com/CSUFcareer/status/1250463668879450112?s=20">California State University, Fullerton</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200509061934/https://www.csusb.edu/career-center/careers-jobs-internships-during-covid-19">California State University, San Bernardino</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053747/https://www.chapman.edu/business/career-services/student/resources.aspx">Chapman University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428051946/https://as.cornell.edu/summer2020-resources">Cornell University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200525075204/https://engineering.dartmouth.edu/careers/students/remote-services">Dartmouth College</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506152313/http://www.glunis.com/web/20200506152313">Delta State University</a>,
                        { ' ' }<a href="https://tartanedge.edinboro.edu/resources/covintern-get-your-virtual-internship/">Edinboro University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506151813/https://www.elon.edu/u/spdc/resources/">Elon University</a>,
                        { ' ' }<a href="https://twitter.com/CesGateway/status/1246120572351848448?s=20">Gateway Technical College</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053318/https://about.gitlab.com/company/culture/all-remote/internship/">GitLab</a>,
                        { ' ' }<a href="https://www.good-goes-viral.com/post/covintern">Good Goes Viral</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200525075127/https://undergrad.gov.harvard.edu/summer-opportunities">Harvard University</a>,
                        { ' ' }<a href="https://www.hercampus.com/school/gwu/how-keep-developing-professionally-quarantine">HerCampus</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506152145/https://myemail.constantcontact.com/Bunche-Center-Monthly-Newsletter---March-2020.html?soid=1123721102917&aid=-uYL9d0MNM4">Howard University</a>,
                        { ' ' }<a href="https://joinup.ec.europa.eu/collection/digital-response-covid-19/open-source-solutions">Joinup (an official website of the European Union)</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052917/https://www.kutztown.edu/about-ku/administrative-offices/career-development-center/staying-resilient-during-your-search.html">Kutztown University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053024/https://bsosundergrad.umd.edu/your-career/internship">Universtiy of Maryland</a>,
                        { ' ' }<a href="https://medium.com/phamiliarizing-myself-with-computer-science/my-internship-was-cancelled-due-to-covid-19-now-what-bb11e8e82b5f">Medium (Isabella Pham)</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506152522/https://www.millersville.edu/elcm/internships/internship-search-engines.php">Millersville University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200430215823/https://cla.umn.edu/career-services-office/students/covid-19-response-resources-students">University of Minnesota</a>,
                        { ' ' }<a href="https://twitter.com/MSU_StudentGov/status/1247954362099535874?s=20">Morehead State University</a>,
                        { ' ' }<a href="https://nyuwassermanblog.com/2020/03/25/helpful-articles-resources-in-the-time-of-coronavirus/">New York University (NYU)</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506151309/https://career.tcnj.edu/covid-19-career-resources/">The College of New Jersey (TCNJ)</a>,
                        { ' ' }<a href="https://www.nicksingh.com/posts/how-to-land-tech-jobs-during-covid-19">Nick Singh</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052530/https://careers.unc.edu/students/covid-19-job-search">University of North Carolina (UNC)</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052843/https://poole.ncsu.edu/undergraduate/careers/student-resources/apply/who-is-hiring-during-the-covid-19-pandemic/">NC State Universtiy</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052002/https://www.northwestern.edu/careers/about-us/covid-faq/index.html">Northwestern University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200509061905/https://ecs.osu.edu/sites/default/files/uploads/special_job_search_resources_during_covid-19.pdf">The Ohio State University</a>,
                        { ' ' }<a href="https://www.omaha.com/money/markets/lynnley-browning-not-all-internships-are-canceled-snag-one-and-show-your-grit/article_5587bd2e-4a85-5c0e-80e5-3ee9b82ebfdf.html">Omaha World-Herald</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200427054210/https://krannert.purdue.edu/kpdc/current-students.php">Purdue University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506151320/https://www.rochester.edu/careercenter/covid19/resources.html">University of Rochester</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200509062344/https://www.rit.edu/careerservices/student/coronavirus-career-resources">Rochester Institute of Technology</a>,
                        { ' ' }<a href="https://twitter.com/RutgersCommInfo/status/1248000198711836677">Rutgers University</a>,
                        { ' ' }<a href="https://twitter.com/ShipCareer/status/1252644568656482305">Shippensburg Univeristy</a>,
                        { ' ' }<a href="http://careersapps.usc.edu/carl/index.php?se=c&mId=0&sId=739&ssId=741&page=1&order=media_type&flag=1">University of Southern California (USC)</a>,
                        { ' ' }<a href="https://twitter.com/SECareerService/status/1247995843451465729">Southwest Missouri State University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052741/https://careertools.binghamton.edu/channels/covid-19-career-resources/">SUNY Binghamton</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052420/https://www.oswego.edu/career-services/virtual-internships-and-jobs">SUNY Oswego</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428051829/https://www.swarthmore.edu/career-services/navigating-remote-summer-experiences">Swarthmore College</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053504/https://www.utsa.edu/today/2020/04/story/university-career-center-virtual.html">University of Texas at San Antonio</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053555/https://careerengagement.utexas.edu/students-alumni/undergrad-virtual-career-connections/">University of Texas at Austin</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506152149/https://www.towson.edu/careercenter/students/">Towson University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052644/https://www.union.edu/becker-career-center/internship-and-job-resources-field">Union College</a>,
                        { ' ' }<a href="https://twitter.com/VCUCareers/status/1251242799271497728?s=20">Virginia Commonwealth University</a>,
                        { ' ' }<a href="https://www.pilotonline.com/business/vp-bz-career-connection-0628-20200628-xtsjriew4bhcbexn7pw6zd6bzi-story.html">The Virginian-Pilot</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053640/https://career.vt.edu/content/career_vt_edu/en/covid-19.html">Virginia Tech</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052752/https://confluence.uwf.edu/pages/viewpage.action?pageId=146422463">University of West Florida</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428053209/https://wmich.edu/career/part-time-remote-covid-19">Western Michigan University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428051620/http://www.westfield.ma.edu/academics/career-center/internships">Westfield State University</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200428052433/https://www.uwlax.edu/aaccs/">University of Wisconsin</a>,
                        { ' ' }<a href="https://web.archive.org/web/20200506152214/https://ocs.yale.edu/narrative/summer-plans-covid-19">Yale University</a>, and
                        { ' ' }<a href="https://web.archive.org/web/20200428053145/https://yorkinternational.yorku.ca/go-global/remote-virtual-internships/">York University</a>.
                    </p>
                </MinorSection>
            </article>

            <MinorSection title="additional projects">
                <ul>
                    <li><a href="https://internalerts.io">InternAlerts</a> &mdash; tracks more than 50 job boards for the posting of new intern roles. When an application opens, the members tracking it get an email.</li>
                    <li><a href="https://github.com/wadefletch/python-ergast">python-ergast</a> &mdash; ORM-ing 60 years of F1 lap data with python.</li>
                    <li><a href="https://github.com/csclubiu/ChatbotWorkshop">HotelBot</a> &mdash; part of a CSClub@IU workshop I did with Brady Anderson on chatbots for business.</li>
                    <li><a href="https://munrank.com/">MUNrank.com</a> &mdash; a new ranking engine for collegiate Model United Nations. (Never figured out how to get conference data consistently.)</li>
                </ul>
            </MinorSection>
        </MajorSection>
    )
}

export default Projects