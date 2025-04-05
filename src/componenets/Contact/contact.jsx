import React, { useRef } from 'react'
import snake from '../../assets/snake.png'
import tictctoe from '../../assets/tictctoe.png'
import todo from '../../assets/todo.png'
import contactres from '../../assets/contactres.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import stackoverflow from '../../assets/stackoverflow.png'
import twitter from '../../assets/twitter.png'
import './contact.css'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bhwrfke', 'template_03yv7ox', form.current, {
            publicKey: 'Jy-lDRfahYIiyBOlHE6Jr',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

  return (
    <>
    <section id='contactpage'>
   <div id="clients">
    <h1 className="contactpagetitle">
        My Projects
    </h1>
    <p className="clientdescription">
        I have made a Snake & Ladder game and TicTacToe game using HTML ,CSS ,Javascript . I have also made a ToDo List and responsive Contact page using React.
    </p>
    <div className="clientimgs">
        <img src={snake} alt="snake" className="clientimg" />
        <img src={tictctoe} alt="tictactoe" className="clientimg" />
        <img src={todo} alt="todo" className="clientimg" />
        <img src={contactres} alt="contactpage" className="clientimg" />
    </div>
   </div>
   <div id='contact'>
    <h1 className="contactpagetitle">
        Contact Me
    </h1>
    <span className="contactdescription">
        Please Fill out the form below to discuss any work opportunities.
    </span>
    <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name'name='your_name' />
        <input type="email" placeholder='Your Email' className='email' name='your_email' />
        <textarea className='msg' name="message"rows='5' placeholder='Your Message'></textarea>
        <button  type='submit'className="submitbtn" value='Send'>Submit</button>
        <div className="links">
            <img src={linkedin} alt="linkedin" className="link" />
            <img src={github} alt="github" className="link" />
            <img src={stackoverflow} alt="stackoverflow" className="link" />
            <img src={twitter} alt="twitter" className="link" />
        </div>
    </form>
   </div>
    </section>
    </>
  )
}

export default Contact
