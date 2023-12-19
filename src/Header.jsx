import React from 'react';
import './Header.css';



const ResumeHeader = () => {
  return (
    <div className="resume-header">
      
        <div className="resume-title">
          <h2 className="resume-name">Anna Gritsuk</h2>
          <div className="resume-tagline">Front-End Developer</div>
        </div>

        <div className="resume-contact">
          <ul className="resume-contact-list">
            <li className="resume-contact-list-item">
                <i className="fab fa-telegram"></i>
              <a className="resume-link" target="_blank" href="https://t.me/anngritsuk"> @anngritsuk</a>
            </li>
            <li className="resume-contact-list-item">
            <i className="fas fa-envelope"></i>
              <a className="resume-link" href="mailto:annagritsuk@gmail.com"> annagritsuk@gmail.com</a>
            </li>
            <li className="resume-contact-list-item">
            <i className="fas fa-map-marker-alt"></i>
            <a className='resume-link' href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.88464,27.5933684,11z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972!16zL20vMGRseGo?entry=ttu" target="_blank"> Minsk, Belarus</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default ResumeHeader;
