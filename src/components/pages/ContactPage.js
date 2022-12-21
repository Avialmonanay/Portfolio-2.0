//renders the Contact Page

//import react
import React, { useState } from 'react';

//import styles
import '../../styles/Pages.css'

//import helpers
import { validateEmail } from '../../utils/contactFormChecker';


//Form Function returns the contact HTML
function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')


    //handles input changes and sets the state accordingly
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    //handles form submit, Provides errors if missing values else will provide a message letting user know submit was successful
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage(
                'Email is invalid or missing'
            );

            return;

        }
        if (!userName) {
            setErrorMessage(
                `Please enter your name`
            );
            return;
        }
        if (!message) {
            setErrorMessage(
                `Please state why you would like to contact me`
            );
            return;
        }
        else {
            setErrorMessage(`Thanks for Reaching out! I will contact you soon!`)
        }


        setUserName('');
        setMessage('');
        setEmail('')

    };


//contact page HTML
    return (
        <div className='contactConatainer'>
            <h2>Contact Me!</h2>
            <form className='contactForm'>
                <div className="mb-3">
                    <input
                        value={email}
                        name='email'
                        type="email"
                        onChange={handleInputChange}
                        className="form-control"
                        id="email"
                        placeholder="Your Email">
                            
                    </input>
                </div>
                <div className="mb-3">
                    <input
                        value={userName}
                        name='userName'
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        id="userName"
                        placeholder="Your Name">
                           
                    </input>
                </div>
                <div className="mb-3">
                    <input
                        value={message}
                        name='message'
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        id="message"
                        placeholder="What are you contacting me about?">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary" id="contactSubmit" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}




export default Form