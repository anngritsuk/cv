

import React from 'react';
import './App.css'; 
import AuthorInfo from './AuthorInfo'; 
import ProjectsList from './ProjectsList';
import ResumeHeader from './Header';


const App = () => {
  return (
    <div className="app">
      <ResumeHeader />
      <div className='aboutME'>
        <img className='photo' src="/me.jpg" alt="myphoto" />
        <div className='aboutME_info'>
          <h3>About me:</h3>
          <div className='aboutME-info_text'>I aim to grow in the field of front-end development, where I can apply my knowledge to create innovative and interesting web applications. I want to learn and develop further, I already have experience in team work in development. I'm looking to start my professional journey by using my skills and passion to create compelling user interfaces and participating in team projects.</div>
        </div>
      </div>
      <AuthorInfo />
      <ProjectsList />
      <a href="/CV-Anna.pdf" download="cv-gritsuk.pdf">
        Распечатать PDF
      </a>

    </div>
  );
};

export default App;



