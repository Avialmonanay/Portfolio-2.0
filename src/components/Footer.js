//Renders the Footer


//import React
import React from 'react'

//import Styles
import '../styles/Footer.css'

//import all needed images
import gitHub from '../images/Footer/github.png'
import linkedIn from '../images/Footer/link.png'
import stackOF from '../images/Footer/stack.png'


//returns footer HTML
function Footer({ }) {
    return (
        <div className='customFooter'>
            <a target ='_blank' href='https://github.com/Avialmonanay'><img className='aboutStarImage margin imgSize' src={gitHub} alt="image of Rexx Madsen Standing Tall"></img></a>
            <a target ='_blank' href='https://www.linkedin.com/in/rexx-madsen-056580152/'><img className='aboutStarImage margin imgSize' src={linkedIn} alt="image of Rexx Madsen Standing Tall"></img></a>
            <a target ='_blank' href='https://stackoverflow.com/users/19530301/rexx-madsen'><img className='aboutStarImage margin imgSize' src={stackOF} alt="image of Rexx Madsen Standing Tall"></img></a>
        </div>
    )}


export default Footer

