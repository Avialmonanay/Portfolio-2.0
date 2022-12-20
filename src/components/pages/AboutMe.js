import React from 'react';
import '../../styles/Pages.css'


function About({ }) {
    return (
        <div className='about'>
            <div className='aboutCard mb-6'>
                <h3 className='aboutCardHeader'>Career</h3>
                <p> I am a IT professional with several years of experience in various areas of
                    computer science. I have worked in all realms of technology from building Pc's, troubleshooting/repairing/replacing hardware, troubleshooting/repairing software, creating software, project management software, and the list goes on! <br></br><br></br> Currently I work for Adobe Workfront as an Assigned Support Engineer handeling Automation via
                    API, SSO and integrations using various methods of code and Workfront Fusion. I have my own book of customers who directly work with me and expect quality support in whatever their business needs are at that time.</p>
            </div>
            <br></br>
            <div className='aboutCard'>
                <h3 className='aboutCardHeader'>Interests</h3>
                <p>
                    In my free time I also really love photography! Specifically night time photography and taking photos of the stars using light painting. I will be further expaning this site in the future to include some images and possibly make a digital store!<br></br> I am also interested in Aquariams, Aquascaping </p>
            </div>
        </div>
    )
}



export default About