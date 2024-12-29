import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
          .then(response => setProjects(response.data))
          .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>My Portfolio</h1>
            <div className="projects">
                {projects.map(project => (
                    <div key={project._id} className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View project</a>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;