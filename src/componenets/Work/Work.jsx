import React from 'react'
import './Work.css'
import java from '../../assets/java.png';
import leader from '../../assets/leader.png';
import networking from '../../assets/networking.png';
import conversation from '../../assets/conversation.png';
import think from '../../assets/think.png';
import business from '../../assets/business.png';


const Work = () => {
  return (
   <>
   <section id='works'>
    <h2 className="workstitle">My Portfolio</h2>
    <span className="workdescriptio">I am a good listener, I take pride in paying attention to the smallest details. I am good in Coding. I have a good critical thinking skills. I am also a Coordinator of placement at my campus. I am good at team working and know how to lead a team. </span>
    <div className="worksimgs">
        <img src={java} alt="java" className="worksimg" />
        <img src={leader} alt="leader" className="worksimg" />
        <img src={networking} alt="network" className="worksimg" />
        <img src={conversation} alt="listen" className="worksimg" />
        <img src={think} alt="thinking" className="worksimg" />
        <img src={business} alt="business" className="worksimg" />
    </div>
    <button className="worksbtn">See More</button>
   </section>
   </>
  )
}

export default Work
