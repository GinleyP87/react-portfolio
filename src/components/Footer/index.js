import React from 'react';
import './style.css';

function Footer() {
    return (
        <div id='footerDiv'>
            <a href='https://www.linkedin.com/in/patrick-ginley-jr-274746211/' target="_blank" className='footer-icon'><i className="fab fa-linkedin fa-3x"></i></a>
            <a href='https://github.com/GinleyP87' target="_blank" className='footer-icon'><i className="fab fa-github-square fa-3x"></i></a>
            <a href='mailto:patginleyjr@gmail.com' target='_blank' className='footer-icon'><i className="fa fa-envelope fa-3x"></i></a>
        </div>
    )
}

export default Footer;