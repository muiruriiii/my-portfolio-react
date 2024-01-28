import React, { useState, useEffect } from "react";
import './about.css';
import about from '../../assets/about-background.jpeg';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    const openTab = (tabname) => {
        setActiveTab(tabname);
    };

    useEffect(() => {
        const tablinks = document.getElementsByClassName("tablinks");
        const tabcontents = document.getElementsByClassName("tabcontents");

        const clickHandler = (event) => {
            openTab(event.currentTarget.dataset.tabname);
        };

        for (const tablink of tablinks) {
            tablink.addEventListener("click", clickHandler);
        }

        return () => {
            for (const tablink of tablinks) {
                tablink.removeEventListener("click", clickHandler);
            }
        };
    }, []);

    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={about} alt="About background" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1>
                        <p>
                            I am a Computer Science finalist who has garnered software development skills and is very
                            passionate about data.
                            I possess problem-solving, leadership, interpersonal as well as great communication skills.
                            I am self-driven and a team player that performs well in collaborative environments.
                        </p>

                        <div className="tabtitles">
                            <p
                                className={`tablinks ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => openTab('education')}
                                data-tabname="education"
                            >
                                Education
                            </p>
                            <p
                                className={`tablinks ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => openTab('skills')}
                                data-tabname="skills"
                            >
                                Skills
                            </p>
                            <p
                                className={`tablinks ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => openTab('experience')}
                                data-tabname="experience"
                            >
                                Experience
                            </p>
                            <p
                                className={`tablinks ${activeTab === 'accomplishments' ? 'active-link' : ''}`}
                                onClick={() => openTab('accomplishments')}
                                data-tabname="accomplishments"
                            >
                                Accomplishments
                            </p>
                        </div>

                        <div id="education" className={`tabcontents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>2020-Present</span><br /><span>Strathmore University</span><br />Bachelor of Science in Informatics and Computer Science.<br />(4th Year)</li>
                                <li><span>January 2020</span><br /><span>Riara University</span><br />Certificate, Science Technology Engineering, and Mathematics.<br /></li>
                                <li><span>2016-2019</span><br /><span>St George’s Girls’ Secondary School </span><br />KCSE: B+<br /></li>
                            </ul>
                        </div>
                        <div id="skills" className={`tabcontents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>Web Development</span><br />Developing websites and web applications</li>
                                <li><span>Database Management</span><br /> MySQL and Firebase</li>
                                <li><span>Working with Python frameworks</span><br />Django</li>
                                <li><span>Working with PHP frameworks</span><br />Laravel</li>
                                <li><span>Working with front-end interface design tools</span><br />Figma</li>
                                <li><span>Programming languages:</span><br />CSS, HTML, Bootstrap, Tailwind, PHP, Python, Java, Javascript</li>
                            </ul>
                        </div>
                        <div id="experience" className={`tabcontents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>January 2023 - March 2023</span><br /><span>Bityarn Consult</span><br />Software Engineering Intern<br /></li>
                                <li><span>January 2022 - March 2022</span><br /><span>Voluntary Service</span><br />Watu wa Maana Children's Home<br /></li>
                            </ul>
                        </div>
                        <div
                            id="accomplishments"
                            className={`tabcontents ${activeTab === 'accomplishments' ? 'active-tab' : ''}`}
                        >
                            <ul>
                                <li><span>2018-2019</span>
                                    <br />Stream Captain of St George's Girls'.
                                    <br />Secretary of the Young Catholic Students Club 2018-2019.
                                    <br />Member of the East African Model United Nations Club.
                                </li>
                                <li><span>2022-2023</span>
                                    <br />Class Representative Strathmore University 2022-2023.
                                    <br />Strathmore Academic Dean’s List award for the academic year 2022-2023
                                    <br />Microsoft Imagine Cup Online Semifinals Winner 2023-Earth Category.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
