import React from 'react';
import '../../styles/Pages.css'
import profileImage from '../../images/REXX_01.jpg'
import stars from '../../images/About Me Stars.JPG'


function About({ }) {
    return (
        <div className='about vert'>
            <div className='horz'>
            <div className='aboutCard'>
                <h3 className='aboutCardHeader'>Career</h3>
                <p> I am a IT professional with several years of experience in various areas of
                    computer science. I have worked in all realms of technology from building Pc's, troubleshooting/repairing/replacing hardware, troubleshooting/repairing software, creating software, project management software, and the list goes on! <br></br><br></br> Currently I work for Adobe Workfront as an Assigned Support Engineer handeling Automation via
                    API, SSO and integrations using various methods of code and Workfront Fusion. I have my own book of customers who directly work with me and expect quality support in whatever their business needs are at that time.</p>
            </div>
            <div>
            <img className='aboutProfileImage' src={profileImage} alt="image of Rexx Madsen Standing Tall"/>
            </div>
            </div>
            <br></br>

            <div className='horzReverse'>
            <div className='aboutCard leftMarg'>
                <h3 className='aboutCardHeader'>Interests</h3>
                <p>
                    In my free time I also really love photography! Specifically night time photography and taking photos of the stars using light painting. I will be further expaning this site in the future to include some images and possibly make a digital store!<br></br><br></br>Recently I am learning more about programming, soldering, and Rasberry Pi as I am attempting to expand my knowledge of engineering and overall design/scientific processes.  </p>
            </div>
            <div>
            <img className='aboutStarImage' src={stars} alt="image of Rexx Madsen Standing Tall"/>
            </div>
            </div>
        </div>
    )
}



export default About