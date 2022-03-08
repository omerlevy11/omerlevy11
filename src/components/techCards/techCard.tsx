import * as React from 'react';
import './techCard.css'
const TechCard = (props: { image: string | undefined; tech: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className="skills-card-container">
            <article className="skills-card">
              <div className="skills-card-image-container">
                <img className="skills-card-image" src={props.image} alt="bravo" />
              </div>
              <span className="skills-card-title">{props.tech}</span>
            </article>
          </div>
  );
}
export default TechCard;