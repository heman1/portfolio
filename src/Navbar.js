import React from 'react';
import { Link } from '@reach/router';
import './App.css';

function Navbar() {

    
    
    //receiving string values
    function handlePop(e) {
        // let ele = document.getElementsByClassName(element)[0];
        // let btn = document.getElementById(btn_id);
        // if(ele.classList.contains(class_name)) {
        //     ele.classList.remove(class_name);
        //     btn.innerHTML = text;
        //     btn.style.cssText = "padding: 10px 20px";
        // } else {
        //     ele.classList.add(class_name);
        //     btn.innerHTML = "&times;"
        //     btn.style.cssText = "width: 50px; height: 50px";
        // }
        console.log(e);
    }

    return(
        <header id="page-top">
            
            <div className="logo">

                <div className="logo-bars">
                    <span className="bars"></span> <span className="bars"></span> 
                    <span className="bars"></span> <span className="bars"></span>
                    <span className="join1"></span> <span className="join2"></span>
                </div>
                <p className="animate__animated animate__fadeInDown">Portfolio</p>
            </div>

            <div className="list-items">
                <ul className="list-ul">
                    <li>
                        <button 
                        className="animate__animated animate__fadeInDown" 
                        id="btn-skills"
                        onClick={handlePop}
                        >Skills</button>
                        <div className="pop1">
                            <ul>
                                <li>
                                    <div className="skill-type">Front-End</div>
                                    <div className="skill">Bootstrap</div>
                                    <div className="skill">React</div>
                                </li>
                                <li>
                                    <div className="skill-type">Back-End</div>
                                    <div className="skill">node.js</div>
                                    <div className="skill">php</div>
                                </li>
                                <li>
                                    <div className="skill-type">Database server</div>
                                    <div className="skill">MySQL</div>
                                    <div className="skill">MongoDB</div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button 
                        className="animate__animated animate__fadeInDown" 
                        id="btn-contact"
                        //handlePop(elementClass, toggleClass, innerText)
                        onClick={handlePop}>Connect</button>
                        <div className="pop2 ">
                            <ul>
                                <li>
                                    <i className="fab fa-github"></i> 
                                    <Link to="https://github.com/heman1" 
                                    target="_blank"
                                    className="highlight">github</Link> 
                                </li>
                                <li>
                                    <i className="fab fa-linkedin-in"></i> 
                                    <Link to="https://github.com/heman1" 
                                    target="_blank"
                                    className="highlight">linkedin</Link> 
                                </li>
                                <li>
                                    <i className="fab fa-google"></i> 
                                    <Link to="https://github.com/heman1" 
                                    target="_blank"
                                    className="highlight">gmail</Link> 
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i> 
                                    <Link to="https://github.com/heman1" 
                                    target="_blank"
                                    className="highlight">instagram</Link> 
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default Navbar;
