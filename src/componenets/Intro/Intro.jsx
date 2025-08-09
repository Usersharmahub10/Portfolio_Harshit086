import React from 'react'
import myphoto from '../../assets/myphoto.png';
import { Link } from 'react-scroll'
import hireme1 from '../../assets/hireme1.png'
import './intro.css';
import resume from '../../assets/resume.pdf';

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
          <span className="introtext">I'm <span className="introname">Harshit Sharma</span><br />React Native Developer</span>
          <p className="intropara">I am a experienced react native developer, also have knowledge of mern stack , HTML , CSS and JS creating visually appealing and user friendly website/apps</p>
          <Link><button onClick={handleDownloadResume} className='btn'><img src={hireme1} alt="HireMe" className='btnimg' />Hire me</button></Link>
        </div>
        <img src={myphoto} alt='profilephoto' className='profilepic' />
      </section>
    </>
  )
}



export default Intro
