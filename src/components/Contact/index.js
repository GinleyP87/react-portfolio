import React, { useState } from 'react';
import './style.css';
import desktop from '../../assets/images/desktop.jpg';

function Contact() {
    return (
        <section className='contact-container'>
            <div className='titleWrapper'>
                <h1 className='contactTitle'>Contact Me</h1>
            </div>
            <div className='row content'>
                <div className='col-6'>
                    <img src={desktop} height='400px' width='600' alt='Desktop where I will reply to emails and such.'/>
                </div>
                    
                <div className='contactText col-4'>
                    <p className='contactP'>
                        Whether it's constructive criticism or about a possible job <br/>
                        opportuniy please feel free to reach me at my e-mail address. <br/><br/>
                        <a href = "mailto: patginleyjr@gmail.com">patginleyjr@gmail.com</a><br/><br/>
                        Download my resume here.<br/>
                        <a href="../../assets/files/resume.pdf"download="GinleyResume">Download</a>
                        <br/>
                    </p>    
                </div>
            </div>
        </section>
    )
}

export default Contact;