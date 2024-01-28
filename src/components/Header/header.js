import React from "react";
import './header.css';


const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <nav>
                    <h1><span className="logo">C</span>YNTHIA</h1>
                    <ul>
                        <li><a href="#header" >Home</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#services" >Services</a></li>
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Header;
