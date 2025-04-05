import React, { useState } from 'react'
import './Navbar.css';
import react from '../../assets/react.svg';
import {Link} from 'react-scroll'
import phone from '../../assets/phone.png';
import menu from '../../assets/menu.png'

const Navbar = () => {
const [showmenu, setmenu]= useState(false);

  return (
   <nav className='Navbar'>
  <img src={react} alt='logo' className='logo react' />
  <div className="desktopmenu">
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenulistitem'>Skills</Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Portfolio</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Projects</Link>
  </div>
  <button className="desktopmenubutton" onClick={()=> {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  }}>
    <img src={phone} alt="menu" className='desktopmenuimg' />Contact Me
  </button>
  <img src={menu} alt='logo' className='mobmenu'onClick={()=> setmenu(!showmenu)} />
  <div className="navmenu" style={{display: showmenu? 'flex': 'none '}}> 
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=> setmenu(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listitem'onClick={()=> setmenu(false)}>Skills</Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listitem'onClick={()=> setmenu(false)}>Portfolio</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listitem'onClick={()=> setmenu(false)}>Projects</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listitem'onClick={()=> setmenu(false)}>Contact</Link>
  </div>
   </nav>
  )
}

export default Navbar
