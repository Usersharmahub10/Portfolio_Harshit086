
import React from 'react'
import './Skills.css';
import coding from '../../assets/coding.png'
import programming from '../../assets/programming.png'
import school from '../../assets/school.png'
import native from '../../assets/native.png'
import dv from '../../assets/dv.png'
import soft from '../../assets/soft.png'

const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skilltitle">What I Do ?</span>
        <span className="skillsdescription">I am a 3rd year Computer Science student at GIT JAIPUR , I have developed my skills and knowledge in React Native , MERN Stack , HTML , CSS & JS . Currently I am learning DSA in JAVA . Also completed a 45 days Internship in React Native. Also lead my team in NEC 2024 organised by IIT BOMBAY</span>
        <div className="skillbars">
          <div className="skillbar">
            <img src={programming} alt="programming" className="skillbarimg" />
            <div className="skillbartext">
              <h2>DSA LANGUAGE</h2>
              <p>JAVA</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={coding} alt="coding" className="skillbarimg" />
            <div className="skillbartext">
              <h2>Web Development</h2>
              <p>HTML, CSS ,JAVASCRIPT, MERN STACK</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={native} alt="school" className="skillbarimg" />
            <div className="skillbartext">
              <h2>App Development</h2>
              <p>REACT NATIVE (EXPO)</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={school} alt="school" className="skillbarimg" />
            <div className="skillbartext">
              <h2>Coordinator</h2>
              <p>I am a Placement Coordinator at GIT Jaipur</p>
            </div>
          </div>
          <div className="skillbar">
            <img src={dv} alt="school" className="skillbarimg" />
            <div className="skillbartext">
              <h2>Developer Tools</h2>
              <p>GIT & GITHUB , VS CODE , POSTMAN </p>
            </div>
          </div>
          <div className="skillbar">
            <img src={soft} alt="school" className="skillbarimg" />
            <div className="skillbartext">
              <h2>Soft Skills</h2>
              <p>LEADERSHIP , TIME MANAGEMENT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
