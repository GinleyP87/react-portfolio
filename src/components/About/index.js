import React from 'react';
import mypic from '../../assets/images/patpic.png';
import './style.css';



function About() {
    return (
        <div className='about-container'>
            <div className='titleWrapper'>
                <h1 className='contactTitle'>About Me</h1>
            </div>
            <div className='row innerContainer'>

                <div className='col-6 aboutPic'>
                    <img src={mypic} height='550px' width='430px' alt='This is me, standing against a wall in my house, taking a selfie, trying to look professional.'/>
                </div>

                <div className='col-4 text-container'>
                    <p className='bio'>
                        Aspiring full-stack web developer who recently earned a certificate in full-stack development through Case Western Reserve and 
                        Trilogy Education Services. Every new project inspires and motivates me to learn and improve on methods and efficiency so that 
                        I can produce a smooth and easily understood user experience. I’m eager to use and hone my skills in order to be a productive 
                        part of this development community and to improve on web experiences in any way I can.
                        </p>
                </div>

            </div>
        </div>
    )
}

export default About;