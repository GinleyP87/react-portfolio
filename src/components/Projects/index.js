import React from 'react';
import './style.css';


function Project(props) {
    return (
        <section className='project-card'>
            <div>
                <img src={props.image} height='200px' alt='screenshot of app'></img>
            </div>
            <div>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>Technologies and Concepts Used: {props.tech}</p>
                <p>GitHub Repo: <a href={props.gitRepo}>{props.gitRepo}</a></p>
                <p>Application Deployed To: <a href={props.deployedTo}>{props.deployedTo}</a></p>
            </div>
        </section>
    )
}

export default Project;