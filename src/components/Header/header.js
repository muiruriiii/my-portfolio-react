import React from "react";
import './header.css';
import background from '../../assets/background.jpeg';

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
                <div className="row">
                    <div className="header-col-1">
                        <div className="header-info">
                            <h1 className="title">HELLO!</h1>
                            <h1>I'm <span>Cynthia <br/>Muiruri.</span> <br/></h1>
                            <p>A Freelance Web Developer.</p>
                        </div>
                    </div>
                    <div className="header-col-2">
                        <img src={background} alt="Background" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
