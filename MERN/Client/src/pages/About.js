import React from 'react';
import DisplayExperience from './crud/DisplayExperience';
import { useHistory } from "react-router-dom";
import './style.css'

const About = () => {

    let history = useHistory();

  const add = () => {
    history.push("/addexperience");
  };

  const update = () => {
    history.push("/updateexperience");
  };

    return (
        <div>
            <section id="about">
                        <h1 class="headings">ABOUT ME</h1>
                        <div id="pic">
                            <img src="assets/ashim.jpg" alt="" />
                            <div id="intro">
                                <h3>Hello!</h3>
                                <p> I’m a professional Full Stack Developer with experience of translating complex ideas into slick,
                                    successful campaigns.
                                    Many clients have procured exceptional results and happiness while working with me.

                                    Delivering work within time and budget which meets the client’s requirements is my motto. </p>
                            </div>
                               </div>
                    </section>
                            <section id="skillbar">
                        <h1> My Skills </h1>
                        <div class="skill">
                            <li>
                                <h3>HTML</h3>
                                <span class="bar"><span class="html"></span></span>
                            </li>

                            <li>
                                <h3>CSS</h3>
                                <span class="bar"><span class="css"></span></span>
                            </li>

                            <li>
                                <h3>PHP</h3>
                                <span class="bar"><span class="php"></span></span>
                            </li>

                            <li>
                                <h3>JAVASCRIPT</h3>
                                <span class="bar"><span class="javascript"></span></span>
                            </li>

                        </div>
                    <div className="experienceSec">

                    <h1> Experience </h1>
                    
            <DisplayExperience/>
            <div className="addUpdate">
            <button onClick={add} >Add experience</button>
            <button onClick={update} >Update experience</button>
            </div>
            </div>
                </section>
                    
        </div>
    )
}

export default About;
