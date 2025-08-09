import React, { useRef, useState } from 'react'
import snake from '../../assets/snake.png'
import tictctoe from '../../assets/tictctoe.png'
import todo from '../../assets/todo.png'
import native from '../../assets/native.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import stackoverflow from '../../assets/stackoverflow.png'
import x from '../../assets/x.png'
import './contact.css'
import emailjs from '@emailjs/browser';
import marvel from '../../assets/marvel.png'
import portfolio from '../../assets/user1.png'
import solar from '../../assets/solar1.png'
import backend from '../../assets/backend.png'
import rjs from '../../assets/rjs.png'

emailjs.init('Jy-lDRfahYIiyBOlHE6Jr');


const Contact = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
      <section id='contactpage'>
        <div id="clients">
          <h1 className="contactpagetitle">
            My Projects
          </h1>
          <p className="clientdescription">
            I have made various project including react native project , node js/express js project , react js projects , three js project , HTML/CSS/JS projects. Click on below Image to see the respective codes on Github.
          </p>
          <div className="clientimgs">

            <div className="image-container"
              onMouseEnter={() => setHoveredImage('marvel')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/Marvel_086" target="_blank" rel="noopener noreferrer">
                <img src={marvel} alt="snake" className="clientimg" />
                {hoveredImage === 'marvel' && <div className="image-title">MARVEL UI WEBSITE (REACT JS , FIREBASE , REDUX)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('portfolio')}
              onMouseLeave={() => setHoveredImage(null)} >
              <a href="https://github.com/Usersharmahub10/Portfolio_Harshit086" target="_blank" rel="noopener noreferrer">
                <img src={portfolio} alt="tictactoe" className="clientimg" />
                {hoveredImage === 'portfolio' && <div className="image-title">PORTFOLIO WEBSITE (REACT JS)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('solar')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/SOLAR-SYSTEM-THREE.JS-" target="_blank" rel="noopener noreferrer">
                <img src={solar} alt="todo" className="clientimg" />
                {hoveredImage === 'solar' && <div className="image-title">SOLAR SYSTEM 3D WEBSITE (THREE JS , HTML & CSS)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('backend')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/ChatApp_Backend" target="_blank" rel="noopener noreferrer">
                <img src={backend} alt="contactpage" className="clientimg" />
                {hoveredImage === 'backend' && <div className="image-title">BACKEND FOR CHAT WEBSITE (EXPRESS JS, MONGODB ATLAS)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('tictactoe')}
              onMouseLeave={() => setHoveredImage(null)} >
              <a href="https://github.com/Usersharmahub10/TIC_TAC_TOE" target="_blank" rel="noopener noreferrer">
                <img src={tictctoe} alt="contactpage" className="clientimg" />
                {hoveredImage === 'tictactoe' && <div className="image-title">TIC TAC TOE GAME (HTML , CSS & JS)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('todo')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/Basic_React_FrontPage" target="_blank" rel="noopener noreferrer">
                <img src={rjs} alt="contactpage" className="clientimg" />
                {hoveredImage === 'todo' && <div className="image-title">BASIC FRONTEND (REACT JS)</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('native')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={native} alt="contactpage" className="clientimg" />
                {hoveredImage === 'native' && <div className="image-title"> REACT NATIVE SECURITY APP (NOT CLICKABLE RIGHT NOW )</div>}
              </a>
            </div>
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('snake')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/Snake_and_Ladder" target="_blank" rel="noopener noreferrer">
                <img src={snake} alt="contactpage" className="clientimg" />
                {hoveredImage === 'snake' && <div className="image-title">SNAKE GAME (HTML , CSS & JS)</div>}
              </a>
            </div>
          </div>
        </div>
        <div id='contact'>
          <h1 className="contactpagetitle">
            Contact Me
          </h1>
          <span className="contactdescription">
            Please Fill out the form below to discuss any work opportunities.
          </span>
          <form className='contactform' action="https://formsubmit.co/harshitsharma1009sharma@gmail.com" method="POST"  >
            <input type="hidden" className='name' name='_captcha' value="false" />
            <input type="hidden" placeholder='Your Email' className='email' name='_next' value="https://yourportfolio.com/thank-you" />
            <input type="hidden" name="_subject" value="New Portfolio Contact!" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input
              type="text"
              className='name'
              placeholder='Your Name'
              name="name"
              required
            />
            <input
              type="email"
              className='email'
              placeholder='Your Email'
              name="email"
              required
            />
            <textarea className='msg' name="message" rows='5' placeholder='Your Message' required></textarea>
            <button type='submit' className="submitbtn" >Submit</button>
            <div className="links">
              <a href="https://www.linkedin.com/in/harshit-sharma-959065281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" className="link" />
              </a>
              <a href="https://github.com/Usersharmahub10" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" className="link" />
              </a>
              <a href="https://stackoverflow.com/users/22153772/flowstack10" target="_blank" rel="noopener noreferrer">
                <img src={stackoverflow} alt="stackoverflow" className="link" />
              </a>
              <a href="https://x.com/Harshit1162?t=Nw2pQIM0hJYC4u23W1PzhA&s=09" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="twitter" className="linktwi" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
