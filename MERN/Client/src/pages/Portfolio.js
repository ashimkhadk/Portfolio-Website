import React from 'react';
import './style.css'

const Portfolio = () => {
    return (
        <div>
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
        </div>
    )
}

export default Portfolio;
