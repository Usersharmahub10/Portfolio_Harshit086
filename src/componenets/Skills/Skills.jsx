
import React from 'react'
import './Skills.css';
import coding from '../../assets/coding.png'
import programming from '../../assets/programming.png'
import school from '../../assets/school.png'
import native from '../../assets/native.png'
import dv from '../../assets/dv.png'
import soft from '../../assets/soft.png'
import open from '../../assets/open.png'


const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skilltitle">What I Do ?</span>
        <span className="skillsdescription">I am a React Native and full-stack developer with hands-on experience working with Generative AI technologies, including LLM-powered chatbots, RAG systems, and AI agents. I build scalable React and React Native applications using JavaScript and Node.js, focusing on clean, user-centric interfaces. I use Java as my primary language for data structures and algorithms and have experience working with SQL databases. I am passionate about developing production-ready applications with an emphasis on usability, scalability, and clean architecture.</span>
        <div className="skillbars">
          <div className="skillbar">
            <img src={open} alt="programming" className="skillbarimg" />
            <div className="skillbartext">
              <h2>GenAI</h2>
              <p>LLM , PROMPT ENGINEERING , RAG , CHATBOTS , AI AGENTS , LANGCHAIN</p>
            </div>
          </div>
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
              <p>REACT , JAVASCRIPT , EXPRESS JS , HTML , CSS</p>
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
              <p>LEADERSHIP , TIME MANAGEMENT </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
