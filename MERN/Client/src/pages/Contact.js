import React from 'react';
import './style.css'

const Contact = () => {
    return (
        <div>
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
    )
}

export default Contact
