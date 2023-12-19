import React from 'react';
import './ProjectList.css';



const ProjectsList = () => {
  return (
    <div className="projects-list">
      <h3 className='project-title'>Projects:</h3>

      <div className="project">
        <div className="project-info">
          <a href='https://github.com/anngritsuk/albums.git'><h5 className='project-name'>Album</h5></a>
        
          <p>Multi-page application utilizing external API technologies and the react-router-dom library.</p>
          <p>List of technologies: React, JS.</p>
          <p>Git deploy</p>
        </div>
        <a href="https://albums-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img id='img' src='/albums.gif' alt='Albums Preview' />
        </a>
        
        
      </div>

      <div className="project">
        <div className="project-info">
          <a href='https://github.com/anngritsuk/lamoda.git'><h5 className='project-name'>Lamoda</h5></a>
        
          <p> Implemented an online store with filters and sorting products.</p>
          <p>List of technologies: React, JS.</p>
          <p>Git deploy</p>
        </div>
        <a href="https://lamoda-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img id='img' src='/lamoda.gif' alt='Lamoda Preview' />
        </a>
        


      </div>

      <div className="project">
        <div className="project-info">
          <a href='https://github.com/anngritsuk/name.git'><h5 className='project-name'>Name</h5></a>
        
          <p>My first project using React, demonstrating proper state management.</p>
          <p>List of technologies: React, JS.</p>
          <p>Git deploy</p>
        </div>
        <a href="https://albums-3ijw.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img id='img' src='/first-app.gif' alt='Name Preview' />
        </a>
        
      </div>
    </div>
  );
};

export default ProjectsList;

