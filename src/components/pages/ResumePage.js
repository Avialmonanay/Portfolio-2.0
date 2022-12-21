import React from 'react';
import '../../styles/Pages.css'



function Resume({ }) {
    return (
        <div className='resumeContainer'>
            <div className=''>
                <h2 className='resumeHeader'>
                    Coding Languages
                </h2>
                <div className='resumeBody'>
                    <ul className='row main d-flex justify-content-evenly languagesList'>
                        <li className='col-2 languagesListItems'>
                            HTML
                        </li>
                        <li className='col-2 languagesListItems'>
                            CSS
                        </li>
                        <li className='col-2 languagesListItems'>
                            Javascript/Jquery
                        </li>
                        <li className='col-2 languagesListItems'>
                            Node Js
                        </li>
                        <li className='col-2 languagesListItems'>
                            Express JS
                        </li>
                        <li className='col-2 languagesListItems'>
                            SQL
                        </li>
                        <li className='col-2 languagesListItems'>
                            MongoDB
                        </li>
                        <li className='col-2 languagesListItems'>
                            React
                        </li>
                        <li className='col-2 languagesListItems'>
                            Mern
                        </li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <h2 className='resumeHeader'>
                    Current Employment
                </h2>
                <div className='resumeCard'>
                    <h4>Adobe Workfront - Assigned Support Engineer Tier 3</h4>
                    <h6>2022 - Current</h6>
                    <div className='resumeBody'>
                        <ul className='row main d-flex justify-content-evenly'>
                            <li className=''>
                                Act as a single point of contact for my book of business in Support for high value clients and Workfront super users.
                            </li>
                            <li className=''>
                                Meets and exceeds SLA criteria outlined with Adobes Ultimate Support Plan. 
                            </li>
                            <li className=''>
                                Identify common themes across support tickets and devise action or training plans to grow clients knowledge.
                            </li>
                            <li className=''>
                                As a single point of Contact I have to keep up to date with all changes with Adobe Workfront
                            </li>
                            <li className=''>
                                Facilitate client cadence calls to review upcoming changes and identify how this will affect clients and their business needs
                            </li>
                            <li className=''>
                                Identify root cause of issues and escalate issues to development when needed
                            </li>
                            <li className=''>
                                Facilitate communication between the developers and client on ongoing issues the client is facing
                            </li>
                            <li className=''>
                                Certifications: <ul>
                                    <li>Adobe ACE Core Developer</li>
                                </ul>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <h2 className='resumeHeader'>
                    Previous Employment
                </h2>
                <div className='resumeCard'>
                    <h4>Adobe Workfront - Technical Support Engineer Tier 2</h4>
                    <h6>2021 - 2022</h6>
                    <div className='resumeBody'>
                        <ul className='row main d-flex justify-content-evenly'>
                            <li className=''>
                                Held an average of 96% customer satisfaction with a 14.7% survey response rate while maintaining a top
                                contributor for case intake
                            </li>
                            <li className=''>
                                Troubleshot customer integrations between our product and outside applications while maintaining an ARD of
                                4.3 days
                            </li>
                            <li className=''>
                                Completed all training support certifications Core (including resource management), Integrations, and
                                Documents
                            </li>
                            <li className=''>
                                Created custom API calls for GET, POST, PUT, and DELETE methods to allow customers to quickly update the
                                program utilizing the API call.
                            </li>
                            <li className=''>
                                Support Accolades: <ul>
                                    <li>Hummingbird x2 – Awarded for being in the top 10 of customer nominated Hero award across all of
                                        Adobe’s support during a business quarter.</li>
                                    <li>Cheetah x1 – Manager Nominated for being the fastest up and coming new hire</li>
                                    <li>100 th Positive CSAT – Awarded for getting 100 positive surveys in a rolling 4 quarter period (I
                                        accomplished this in 1 quarter right out of training)</li>
                                </ul>
                             </li>   
                        </ul>
                    </div>
                </div>
                <div className='resumeCard'>
                    <h4>AUTOPOINT - Technical Support Team Lead</h4>
                    <h6>2019 - 2021</h6>
                    <div className='resumeBody'>
                        <ul className='row main d-flex justify-content-evenly'>
                            <li className=''>
                            Acted as an escalation path for customer facing technicians
                            </li>
                            <li className=''>
                            Maintained technician knowledge on evolving programs
                            </li>
                            <li className=''>
                            Acted as an interpreter between the customer and our development team to ensure customer needs were properly
met, state laws are followed, and to ensure realistic development goals were set.
                            </li>
                            <li className=''>
                            Trained new hires on process, casing, and documentation to ensure smooth onboarding process.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='resumeCard'>
                    <h4>AUTOPOINT - Technical Support Agent</h4>
                    <h6>2017 - 2019</h6>
                    <div className='resumeBody'>
                        <ul className='row main d-flex justify-content-evenly'>
                            <li className=''>
                            Acted as a customer facing technician who builds strong client bonds
                            </li>
                            <li className=''>
                            Assisted in troubleshooting and identifying the cause of issues within a variety of programs
                            </li>
                            <li className=''>
                            Walked users through process and taught them how to fix issues in the future
                            </li>
                            <li className=''>
                            Worked with an internal wiki knowledge base, update information when necessary
                            </li>
                            <li className=''>
                            Managed multiple tickets at once while maintaining open lines of communication with team members and the
customer to ensure a smooth repair process.
                            </li>
                            <li className=''>
                            Accurately identified what a customer is trying to explain to find the root of the issue.
                            </li>
                            <li className=''>
                            Utilized SQL database to find information on errors, or missing data.
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div>

    )
}
export default Resume