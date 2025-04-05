import React from 'react'
import Navbar from './componenets/Navbar/Navbar'
import Intro from './componenets/Intro/Intro'
import Skills from './componenets/Skills/Skills'
import Work from './componenets/Work/Work'
import Contact from './componenets/Contact/Contact'
import Footer from './componenets/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills/>
      <Work />
      <Contact/>
       <Footer/>
    </div>
  )
}

export default App
