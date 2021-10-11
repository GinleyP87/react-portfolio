import React from 'react';
import './style.css';


function Project(props) {
    return (
        <section className='project-card'>
            <img src={props.image} height='200px' alt='screenshot of app'></img>
            <div>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>GitHub Repo: <a href={props.repo}>{props.repo}</a></p>
                <p>Application Deployed To: <a href={props.deployed}>{props.deployed}</a></p>
            </div>
        </section>
    )
}

export default Project;