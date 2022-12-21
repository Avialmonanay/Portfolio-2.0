import React from 'react';
import '../../styles/Pages.css'

function Contact({ }) {
    return (
        <div className = 'contactConatainer contactHorz'>
            <h3 className ='contactHeader'> If you would like to contact me to learn more please use one of the following methods</h3>
            <div className='vert contactInfo'>
            <p className='contactInfoIndividual'>LinkedIn: <a className= 'contactLinkStyle' href="https://www.linkedin.com/in/rexx-madsen-056580152/">Profile</a></p>
            <p className='contactInfoIndividual'>GitHub: <a className= 'contactLinkStyle' href="https://github.com/Avialmonanay">Profile and repositories</a></p>
            <p className='contactInfoIndividual'>email: <a className= 'contactLinkStyle' href="rexxmadsen@gmail.com">rexxmadsen@gmail.com</a></p>
            </div>
        </div>
    )}







export default Contact