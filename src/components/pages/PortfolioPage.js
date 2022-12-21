import React from 'react';
import '../../styles/Pages.css'
import APIExample from '../../images/Portfolio/Example API.PNG'
import Team from '../../images/Portfolio/My Team.PNG'
import RandomPW from '../../images/Portfolio/RandomPassword.PNG'
import TechBlog from '../../images/Portfolio/tech_blog Homepage.PNG'
import WeatherApp from '../../images/Portfolio/Weather App Data.PNG'
import WorkScheduler from '../../images/Portfolio/Work-Day Schedulre - index.PNG'



import NS from '../../images/Portfolio/Home Page - NS.PNG'
import Daag from '../../images/Portfolio/DayAtAGlance.jpg'


function Portfolio({ }) {
    return (
        <div className='portfolioContainer'>
            <h1 className='portfolioHeader'>Individual Projects</h1>
            <div className='row main d-flex justify-content-evenly'>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/Social-Network-API"><img className='portfolioImages' src={APIExample}></img></a>
                        <figcaption className='portfolioFigcaption'> <h5>Social Media API</h5>This Social Network API was built to demonstrate my ability to use MongoDB to create an API based social networking application. This application allows you to add users, thoughts, reactions, and friends and make the appropriate changes to those datasets that you expect to come with a social network application.<h6>This application was not deployed as it is just an API backend. Please view the readme and demonstration video if you want to know more.</h6></figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/Team-Generator"><img className='portfolioImages' src={Team}></img></a>
                        <figcaption className='portfolioFigcaption'><h5>Team Generator</h5>This application was built to be able to dynamically create an HTML file with your team members. This page is easy to view and each team member has their own card containing their Name, Roll, Employee ID, Email, and depending on the user role choice there will be additional information that displays on the card. Each card will have links to emails, phone, and github profiles depending on user choice. Each link will take you to the appropriate application to contact them.<a href='https://avialmonanay.github.io/Team-Generator/' target='_blank'><h6>Click Here For Deployed Application</h6></a></figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/Random-PW-Generator"><img className='portfolioImages' src={RandomPW}></img></a>
                        <figcaption className='portfolioFigcaption'><h5>Random Password Generator</h5>This application is a random password generator that uses a users preferences and random math to generate a secure password.<a href='https://avialmonanay.github.io/Random-PW-Generator/' target='_blank'><h6>Click Here For Deployed Application</h6></a></figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/tech-blog"><img className='portfolioImages' src={TechBlog}></img></a>
                        <figcaption className='portfolioFigcaption'><h5>Tech Blog</h5>A place for developers to write articles about different technical applications. This blog allows the user to easily view blogs, search for relevant subjects, and manage their blogs as technology evolves.<a href='https://immense-peak-01309.herokuapp.com/' target='_blank'><h6>Click Here For Deployed Application</h6></a></figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/weather-app"><img className='portfolioImages' src={WeatherApp}></img></a>
                        <figcaption className='portfolioFigcaption'><h5>Weather Application</h5>This application was built to allow users to enter in their city and see relevant weather information utilizing a 3rd party API.<a href='https://avialmonanay.github.io/weather-app/' target='_blank'><h6>Click Here For Deployed Application</h6></a> </figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/Work-Day-Scheduler"><img className='portfolioImages' src={WorkScheduler}></img></a>
                        <figcaption className='portfolioFigcaption'><h5>Work Day Scheduler</h5>This Workday scheduler is designed for users who have a 7-5 schedule who want to keep track of what they are doing that day. When loading the page JS functions dynamilcally update the background color of the text areas to show you grey for hours that have already passed. Orange for the current hour, and green for hours that are in the future.<a href='https://avialmonanay.github.io/Work-Day-Scheduler/' target='_blank'><h6>Click Here For Deployed Application</h6></a></figcaption>
                    </figure>
                </div>
            </div>
            <h1 className='portfolioHeader'>Group Projects</h1>
            <div className='row main d-flex justify-content-evenly'>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/NoahBrimhall6/Neighborhood-Shopper"><img className='portfolioImages' src={NS}></img></a>
                        <figcaption className='portfolioFigcaption'> <h5>Neighborhood Shopper</h5>Created to allow users to quickly search for items for sale in their community. It allows users to Create Posts, Make Comments, and serach by zip code to find relevent goods or services in their area!<a href=' https://calm-garden-83557.herokuapp.com/' target='_blank'><h6>Click Here For Deployed Application</h6></a>  </figcaption>
                    </figure>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-xxl-5 portfolioCardBorder'>
                    <figure className='portfoliofigure'>
                        <a target ='_blank' href="https://github.com/Avialmonanay/Day-At-A-Glance"><img className='portfolioImages' src={Daag}></img></a>
                        <figcaption className='portfolioFigcaption'> <h5>Day At A Glance</h5> An application built to allow users to quickly view and customize information relevant to them<a href=' https://avialmonanay.github.io/Day-At-A-Glance/' target='_blank'><h6>Click Here For Deployed Application</h6></a>  </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Portfolio