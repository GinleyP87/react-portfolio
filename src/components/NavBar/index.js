import React, { useEffect } from 'react';
import './style.css';

function Nav(props) {

    useEffect(() => {
        document.title = props.thisPage;
    })

    return (
        <header>
            <div id='nav-bar'>
                <div className='navName'>
                <a href="#about" id='my-name'>Patrick Ginley Jr.</a>
                </div>
                <div className='navigation'>
                <a href='#about' className='nav-btn' onClick={() => props.setThisPage('About')}>About Me</a>
                <a href='#portfolio' target ='_blank' className='nav-btn' onClick={() => props.setThisPage('Portfolio')} >Portfolio</a>
                <a href='#contact' target ='_blank' className='nav-btn' onClick={() => props.setThisPage('Contact')}>Contact Me</a>
                </div>
            </div>
        </header>
    )
}

export default Nav;