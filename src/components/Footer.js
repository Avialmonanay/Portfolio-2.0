import React from 'react'
import '../styles/Footer.css'
import gitHub from '../images/Footer/github.png'
import linkedIn from '../images/Footer/link.png'
import stackOF from '../images/Footer/stack.png'

function Footer({ }) {
    return (
        <div className='customFooter'>
            <img className='aboutStarImage margin imgSize' src={gitHub} alt="image of Rexx Madsen Standing Tall"/>
            <img className='aboutStarImage margin imgSize' src={linkedIn} alt="image of Rexx Madsen Standing Tall"/>
            <img className='aboutStarImage margin imgSize' src={stackOF} alt="image of Rexx Madsen Standing Tall"/>
        </div>
    )}


export default Footer

