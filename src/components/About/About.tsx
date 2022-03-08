import * as React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
const About = () => {

  return (
    <div>
      <div className="about-container">
        <div className="about-headline"><h1>About me...</h1></div>
        <div className='about-content'>
          <p>im a 20 years old, full stack developer with experience from the israeli military intelligence. <br />
            I have a passion for programming and I love to learn new things.<br />
            I am a self-taught programmer and I am always looking for new challenges.<br />
            I am a fast learner, I am always eager to learn and push myself to the limit.<br /><br/>
            my top traits are: <br />
            <ul>
              <li>Dependability</li>
              <li>Ambitious</li>
              <li>Willingness to learn</li>
              <li>Team Player</li>
            </ul>
          </p>
          <p>my top skills are:</p>
          <ul>
            <li>web development</li>
            <li>backend services and API's development</li>
            <li>cloud work - docker,Openshift</li>
            <li>Mobile Development</li>
            <li>getting shit done ASAP</li>
          </ul>

        </div>
      </div>
      <div className='about-buttons'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </div>
    </div>
  );
};

export default About;


