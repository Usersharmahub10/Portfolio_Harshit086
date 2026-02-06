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
import agent1 from '../../assets/agent1.jpg'
import agent2 from '../../assets/agent2.jpg'
import gpt from '../../assets/gpt.png'
import rag from '../../assets/rag.png'


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
            I have built diverse projects using React Native, React.js, Node.js/Express.js, Three.js, and core web technologies, along with Generative AI solutions including LLM-powered chatbots, RAG systems, and AI agents. These projects demonstrate real-world problem solving, clean architecture, and modern development practices. Click the images below to view the project repositories on GitHub.
          </p>
          <div className="clientimgs">
            <div className="image-container"
              onMouseEnter={() => setHoveredImage('gpt')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/ChatGPT-clone-" target="_blank" rel="noopener noreferrer">
                <img src={gpt} alt="snake" className="clientimg" />
                {hoveredImage === 'gpt' && <div className="image-title">CHATGPT CLONE (HTML, CSS, JAVASCRIPT, NODE.JS, GROQ LLM)</div>}
              </a>
            </div><div className="image-container"
              onMouseEnter={() => setHoveredImage('agent1')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href=" https://github.com/Usersharmahub10/Email-Reading-Refund-Agent
" target="_blank" rel="noopener noreferrer">
                <img src={agent1} alt="snake" className="clientimg" />
                {hoveredImage === 'agent1' && <div className="image-title">AI EMAIL SUPPORT AGENT (NODE.JS, LANGCHAIN, GROQ LLM, ZOD)</div>}
              </a>
            </div><div className="image-container"
              onMouseEnter={() => setHoveredImage('agent2')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/PERSONAL-FINANCE-AI-AGENT" target="_blank" rel="noopener noreferrer">
                <img src={agent2} alt="snake" className="clientimg" />
                {hoveredImage === 'agent2' && <div className="image-title">PERSONAL FINANCE AI AGENT (NODE.JS, JAVASCRIPT, GROQ LLM, FUNCTION CALLING)</div>}
              </a>
            </div><div className="image-container"
              onMouseEnter={() => setHoveredImage('rag')}
              onMouseLeave={() => setHoveredImage(null)}>
              <a href="https://github.com/Usersharmahub10/COMPANY-KNOWLEDGE-CHATBOT-RAG-
" target="_blank" rel="noopener noreferrer">
                <img src={rag} alt="snake" className="clientimg" />
                {hoveredImage === 'rag' && <div className="image-title">COMPANY KNOWLEDGE CHATBOT – RAG (NODE.JS, VECTOR DATABASE, EMBEDDINGS, RAG)</div>}
              </a>
            </div>

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
