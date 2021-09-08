import React, { Component } from 'react';
import "./style.css"


class Home extends React.Component {
    render() {
        return (
            <div>
    
                    

                    <nav class="navwidget">
                        <ul>
                            <li> <a href="https://www.facebook.com/jimmy.khadka.7">
                                <i class="fab fa-facebook"></i> <span>Facebook</span>
                            </a></li>

                            <li> <a href="https://twitter.com/AshimKh74379623">
                                <i class="fab fa-twitter"></i> <span>Twitter</span>
                            </a></li>

                            <li> <a href="https://www.instagram.com/khadka_ashim">
                                <i class="fab fa-instagram"></i>  <span>Instagram</span>
                            </a></li>

                            <li> <a href="#">
                                <i class="fab fa-linkedin-in"></i> <span>linkedin</span>
                            </a></li>

                            <li> <a href="https://github.com/ashimkhadk">
                                <i class="fab fa-github"></i>  <span>Github</span>
                            </a></li>


                            <li> <a href="https://www.youtube.com/channel/UC1hN81StQibx2dHh-BMycog">
                                <i class="fab fa-youtube"></i> <span>Youtube</span>
                            </a></li >
                        </ul >
                    </nav >

                    <section id="home">
                        <div class="accordion">
                            <ul>
                                <li>
                                    <img src="assets/slider/3.jpg" />
                                    <a href="#">Web</a>
                                </li>
                                <li>
                                    <img src="assets/slider/4.jpg" />
                                    <a href="#">Design</a>
                                </li>
                                <li>
                                    <img src="assets/slider/1.jpg" />
                                    <a href="#">& Development
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="main">
                            <h1 class="headings"> I am </h1>
                            <h2 data-text="AshimKhadka">AshimKhadka</h2>

                            <a href="contact.html"><button class="btn"> Hire Me </button></a>
                        </div>
                    </section>
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
                    </section>

                    <section id="portfolio">
                        <h1> PORTFOLIO </h1>

                        <div class="gallery">
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/1.jpg)"}}></div>
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/2.jpg)"}}></div>
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/8.png)"}}></div>
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/4.jpg)"}}></div>
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/7.jpg)"}}></div>
                            <div class="single-img" style={{backgroundImage:"url(assets/portfolio/9.jpg)"}}></div>
                        </div>
                    </section>

                    <section id="services">
                        <h1 class="headings">SERVICES</h1>
                        <div class="row">
                            <div class="box">
                                <img src="assets/icons/1.png" alt="" />
                                <h1 class="headings">Website Design</h1>
                                <p>Effective web presence using cutting edge technologies to compete in the dynamic market.

                                </p>
                            </div>

                            <div class="box">
                                <img src="assets/icons/2.png" alt="" />
                                <h1 class="headings">UI/UX<br />Design</h1>
                                <p>Visualizing thoughts and concepts into fine pieces to give unique and excellent finishing.</p>
                            </div>

                            <div class="box">
                                <img src="assets/icons/3.png" alt="" />
                                <h1 class="headings">Digital Marketing</h1>
                                <p>Facebook /Instagram boosting, google advertising along with global online payment solution.</p>
                            </div>
                        </div>
                    </section>

                    <section id="contact">
                        <div class="content">
                            <h2> CONTACT ME </h2>
                            <p> Send me a note, and let’s get started on your project right away! </p>
                        </div>

                        <div class="container">
                            <div class="contactInfo">
                                <div class="box1">
                                    <div class="icon"> <i class="fas fa-map-marker-alt"></i> </div>
                                    <div class="text">
                                        <h3>Address</h3>
                                        <p>Thasikhel ,<br /> Lalitpur, Nepal <br /> 44700</p>
                                    </div>
                                </div>
                                <div class="box1">
                                    <div class="icon"><i class="fas fa-phone"></i></div>
                                    <div class="text">
                                        <h3>Phone</h3>
                                        <p>977-986903349</p>
                                    </div>
                                </div>
                                <div class="box1">
                                    <div class="icon"><i class="fas fa-envelope"></i></div>
                                    <div class="text">
                                        <h3>E-mail</h3>
                                        <p>ashim7891111@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div class="contactForm">
                                <form>
                                    <h2>Send Message</h2>
                                    <div class="inputBox">
                                        <input type="text" name="" required="" />
                                        <span>Full Name</span>
                                    </div>
                                    <div class="inputBox">
                                        <input type="text" name="" required="" />
                                        <span>Email</span>
                                    </div>
                                    <div class="inputBox">
                                        <textarea required="required"></textarea>
                                        <span>Type Your Message</span>
                                    </div>
                                    <div class="inputBox">
                                        <input type="submit" name="" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                
            </div>
        
);
}
}
export default Home;
