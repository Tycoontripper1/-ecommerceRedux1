import React from "react";
import './portfolio.css'
import pics1 from '../../assets/portfolio1.png'
import pics2 from '../../assets/portfolio2.png'
import pics3 from '../../assets/portfolio3.png'
import pics4 from '../../assets/portfolio4.png'
import pics5 from '../../assets/portfolio5.png'
import pics6 from '../../assets/portfolio6.png'

export const Portfolio = () =>{
    return(
        <section id="portfolio">
            <h5>My React Work </h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics1} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                       <div className="portfolio_cta">
                        <a href="https://github.com" className="btn" terget="_blank">Github</a>
                          <a href="#" className="btn btn-primary" terget="_blank">Live Demo</a>

                       </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics2} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_cta">
                    <a href="https://github.com"  className="btn" terget="_blank">Github</a>
                    <a href="#"  className="btn btn-primary" terget="_blank">Live Demo</a>

                   </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics3} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_cta">
                    <a href="https://github.com"  className="btn" terget="_blank">Github</a>
                    <a href="#"  className="btn btn-primary" terget="_blank">Live Demo</a>

                     </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics4} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_cta">
                    <a href="https://github.com"  className="btn" terget="_blank">Github</a>
                    <a href="#"  className="btn btn-primary" terget="_blank">Live Demo</a>

                   </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics5} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_cta">
                    <a href="https://github.com"  className="btn" terget="_blank">Github</a>
                    <a href="#"  className="btn btn-primary" terget="_blank">Live Demo</a>

                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_image-item">
                        <img src={pics6} alt="" />
                       
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_cta">
                    <a href="https://github.com"  className="btn" terget="_blank">Github</a>
                    <a href="#"  className="btn btn-primary" terget="_blank">Live Demo</a>

                    </div>
                </article>
            </div>
        </section>
    )
  
}