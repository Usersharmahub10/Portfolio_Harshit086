import React from 'react'
import myphoto from '../../assets/myphoto.png';
import {Link} from 'react-scroll'
import hireme1 from '../../assets/hireme1.png'
import './intro.css';

const Intro = () => {
  return (
    <>
    <section id='intro'>
     <div className='introcontent'>
    <span className="hello">Hello,</span>
    <span className="introtext">I'm <span className="introname">Harshit</span><br/>Website Developer</span>
    <p className="intropara">I am a enthusiastic web developer with experience in creating visually appealing and user friendly website</p>
    <Link><button className='btn'><img src={hireme1} alt="HireMe" className='btnimg'/>Hire me</button></Link>
     </div>
     <img src={myphoto} alt='profilephoto' className='profilepic'/>
    </section>
    </>
  )
}



export default Intro
