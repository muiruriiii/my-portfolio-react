import React from "react";
import './project.css';
import Project1 from '../../assets/project1.jpg';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.jpg';

const Project = () => {
    return (
        <section id="projects">
            <div className="container">
                <h1 className="subtitle2">PROJECTS</h1>
                <div className="projectlist">
                    <div className="project">
                        <img src={Project1} className="project-image" alt="" />
                        <div className="layer">
                            <h3>Kenya Police Dossiers Cataloguing System</h3>
                            <p>A web application that automates the recording of criminal
                                cases by the police as well as for citizens to report crime.</p>
                            <p>Tech Stacks: HTML, Tailwind CSS, JavaScript, Django</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={Project2} className="project-image" alt="" />
                        <div className="layer">
                            <h3>Ecommerce</h3>
                            <p>An ecommerce website that sells sneakers allowing users to add to cart and pay via
                                PayPal.</p>
                            <p>Tech Stacks: HTML, Bootstrap, JavaScript, Django</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={Project3} className="project-image" alt="" />
                        <div className="layer">
                            <h3>Training Management System</h3>
                            <p>A web application designed to allow organizations to access
                                courses and for the organizations to offer their courses at a fee.</p>
                            <p>Tech Stacks: HTML, CSS, Laravel</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </section>
    );
}

export default Project;
