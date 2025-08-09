import React from 'react'
import './Work.css'
import nptel from '../../assets/nptel.png'
import ecell from '../../assets/ecell.webp'
import gyan from '../../assets/gyan.jpeg'
import badge from '../../assets/badge.png'
import tcs from '../../assets/tcs.png'
import edy from '../../assets/edy.jpeg'

const Work = () => {
  return (
    <>
      <section id='works'>
        <h2 className="workstitle">Certificates</h2>
        <span className="workdescriptio">I have earned some certifications in various fields which I want to showcase to you . My certificates are as follows :
          (Click the Images to see Certificates) </span>
        <div className="worksimgs">
          <div>
            <a href="https://drive.google.com/file/d/1QAXS3NhM6x_IMrfKGGCzxnn6UumtREgy/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <img src={nptel} alt="java" className="worksimg" />
            </a>
            <p className="workdescriptio">NPTEL JAVA LANGUAGE CERTIFICATE</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1F1TBKxiU0ktAFea6f1MDzl1b6J98rZyp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <img src={ecell} alt="leader" className="worksimg" />
            </a>
            <p className="workdescriptio">E-CELL PARTICIPATION CERTIFICATE</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1FhQG551XgOe46Phpde4c6pAKtX4HFTHm/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <img src={gyan} alt="network" className="worksimg" />
            </a>
            <p className="workdescriptio">JAVA ONLINE TRAINING CERTIFICATE</p>

          </div>
          <div>
            <a href="https://www.cloudskillsboost.google/public_profiles/b9dccca4-fdea-4c72-8272-f3dd79ed843c/badges/4247180?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank" rel="noopener noreferrer">
              <img src={badge} alt="listen" className="worksimg" />
            </a>
            <p className="workdescriptio">GOOGLE BADGE ON GEN-AI</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/posts/harshit-sharma-959065281_tcs-tataconsultancyservices-communicationskills-activity-7133139631067344896-bO1F?utm_source=share&utm_medium=member_android&rcm=ACoAAESHnRUBgSkIn40-iIr3JD_H8nYXuBYJW1U" target="_blank" rel="noopener noreferrer">
              <img src={tcs} alt="thinking" className="worksimg" />
            </a>
            <p className="workdescriptio"> TCS COMMUNICATION SKILL CERTIFICATE</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/posts/harshit-sharma-959065281_edyoda-html5-activity-7092139861322678272-qT69?utm_source=share&utm_medium=member_android&rcm=ACoAAESHnRUBgSkIn40-iIr3JD_H8nYXuBYJW1U" target="_blank" rel="noopener noreferrer">
              <img src={edy} alt="business" className="worksimg" />
            </a>
            <p className="workdescriptio">EDYODA HTML 5 CERTIFICATE</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/harshit-sharma-959065281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <button className="worksbtn">See Certificates on my LinkedIn page</button>
        </a>
      </section>
    </>
  )
}

export default Work
