import React from 'react';
import projects from './projects.js';
import Project from '../Projects';
import './style.css';


function Portfolio () {


    return (
        <div className="portfolio-div">
                {projects.map(project => (
                    <Project
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        deployedTo={project.deployedTo}
                        gitRepo={project.gitRepo}
                    />
                ))}
        </div>
    )

}

export default Portfolio;