import React from 'react'
import { Link } from 'react-scroll'
import hireme1 from '../../assets/hireme1.png'
import './intro.css';
import resume from '../../assets/resume.pdf';
import me from '../../assets/me.png'

const Intro = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <section id='intro'>
        <div className='introcontent'>
          <span className="hello">Hello,</span>
          <span className="introtext">I'm <span className="introname">Harshit Sharma</span><br />Software Developer</span>
          <p className="intropara">I am a React Native and full-stack developer with hands-on experience working with Generative AI technologies, including LLM-powered chatbots, RAG systems, and AI agents.</p>
          <div className="btngrp">
            <Link><button onClick={handleDownloadResume} className='btn'><img src={hireme1} alt="HireMe" className='btnimg' />Download my Resume</button></Link>
            <Link><button onClick={() => window.open(
              "https://www.linkedin.com/in/harshit-sharma-959065281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            )} className='btn'><img src={hireme1} alt="HireMe" className='btnimg' />LinkedIn Profile</button></Link>
          </div>

        </div>
        <img src={me} alt='profilephoto' className='profilepic' />
      </section>
    </>
  )
}



export default Intro
