
import React from 'react'
import './Skills.css';
import coding from '../../assets/coding.png'
import programming from '../../assets/programming.png'
import school from '../../assets/school.png'

const Skills = () => {
  return (
    <>
    <section id="skills">
      <span className="skilltitle">What I Do ?</span>
      <span className="skillsdescription">I am a 2nd Year BTECH student at "Global Institute of Technology Jaipur. I am a passionate web designer which create visually appealing and user-friendly websites.I have a strong understanding of design. I am proficient in HTML, CSS, Javascript ,React, Git &Github and NodeJs.</span>
      <div className="skillbars">
         <div className="skillbar">
          <img src={programming} alt="programming"className="skillbarimg" />
          <div className="skillbartext">
            <h2>Languages Known</h2>
            <p>JAVA, C, C++</p>
          </div>
         </div>
         <div className="skillbar">
          <img src={coding} alt="coding" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Web Development</h2>
            <p>HTML, CSS ,Javascript, React, NodeJs</p>
          </div>
         </div>
         <div className="skillbar">
          <img src={school} alt="school" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Coordinator</h2>
            <p>I am a Placement Coordinator at GIT Jaipur</p>
          </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Skills
