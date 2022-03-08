import * as React from 'react';
import './Resume.css'

const Resume = () => {

  return (
<div>
  <div className="resume-container">
    <div className='resume-headline'> <h1>My Resume..</h1></div>
    <div className='resume-content'>
    <div className="step step-active">
   <div>
      <div className="circle">1</div>
   </div>
   <div>
      <div className="title"> Mamram Programming Course</div>
      <div className="caption">trainee, 04/2020 - 10/2020</div>
   </div>
</div>
<div className="step step-active">
   <div>
      <div className="circle">2</div>
   </div>
   <div>
      <div className="title">Full Stack Developer</div>
      <div className="caption">Army Intelligence, 10/2020 - Present</div>
   </div>
</div>
<div className="step step-active">
   <div>
      <div className="circle">3</div>
   </div>
   <div>
      <div className="title">DevOps and Cloud Engineer</div>
      <div className="caption">Army Intelligence, 10/2020 - Present</div>
   </div>
</div>
<div className="step step-active">
<div>
      <div className="circle">4</div>
   </div>
   <div>
      <div className="title">Solutions Engineer</div>
      <div className="caption">Army Intelligence, 10/2020 - Present</div>
   </div>
</div>
      </div>
    </div>
</div>
  );
};
export default Resume;