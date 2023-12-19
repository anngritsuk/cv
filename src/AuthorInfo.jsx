import React from 'react';
import './AuthorInfo.css';

const AuthorInfo = () => {
  return (
    <div className="author-info">
      <div className="author-info__block-1">
        <h3 className="author-info__title">Education:</h3>
        <p>Belarusian State University</p>
        <p>I am a student of the Faculty of Mechanics and Mathematics.</p>
        <p>My specialization is Web Programming and Internet Technologies.</p>
    
        <h3 className="author-info__title">Additional Skills</h3>
        <p>I have completed the seven-month 'Front End Developer' course at TeachMeSkills.</p>
        <p>I have experience working with databases and possess UI/UX design skills, enabling me to create not only functional but also appealing user interfaces.</p>
      </div>

      <div className="author-info__block-2">
        <h3 className="author-info__title">Skills:</h3>
        <ul className="author-info__skills">
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT</li>
          <li>Figma</li>
          <li>С++</li>
        </ul>
      
        <h3 className="author-info__title">English:</h3>
        <div>
          {/* <h5 className="author-info__subtitle">English</h5> */}
          <p>Upper-Intermediate. <br></br> Technical English.</p>
        </div>
        {/* <div>
          <h5 className="author-info__subtitle">Russian</h5>
          <p>Native</p>
        </div> */}
      </div>
    </div>
  );
};

export default AuthorInfo;

