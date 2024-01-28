import React from "react";
import './service.css';


const Service = () => {
    return (
        <section id="services">
            <div className="container">
                <h1 className="subtitle2">WHAT I OFFER</h1>
                <div className="serviceslist">
                    <div>
                        <h2>UI/UX Design</h2>
                        <p>With a background in Computer Science, I bring expertise in creating visually stunning
                            interfaces that have seamless navigation and functionality. With Figma's collaborative
                            tools, I streamline the design process, ensuring responsive design, and efficient
                            prototyping.</p>
                    </div>
                    <div>
                        <h2>Web Development</h2>
                        <p>I am a skilled front and backend developer proficient in building dynamic and visually
                            appealing websites. I have a solid foundation in HTML and CSS and my proficiency extends to
                            PHP and python, with specialization in the Laravel and Django frameworks.</p>
                    </div>
                    <div>
                        <h2>Machine Learning & IoT</h2>
                        <p>In Machine Learning, my proficiency is majorly on predictive analytics. For IoT services, I
                            seamlessly integrate physical devices with the digital world as well as implementing sensor
                            networks offering solutions that enhance connectivity, efficiency, and automation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;