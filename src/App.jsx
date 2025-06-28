
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Banner from './Component/Banner/Banner'
import Contact from './Component/Contact/Contact'
import Education from './Component/Education/Education'
import Navbar from './Component/Navbar/Navbar'
import Project from './Component/Projects/Project'
import Skills from './Component/Skills/Skills'

function App() {
 

  return (
    <>
      
     <Navbar></Navbar>
     <Banner></Banner>
     <AboutMe></AboutMe>
     <Skills></Skills>
     <Education></Education>
     <Project></Project>
     <Contact></Contact>
    
    </>
  )
}

export default App
