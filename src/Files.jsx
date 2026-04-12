import About from './components/About'
import Video from './components/Video'
import Home from './components/Homepage/Home'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Advantage from './components/Advantage'
import Contact from './components/Contact/Contact'


const Files = () => {
  return (
    <div>
        <section id='home'>
          <Home />
        </section>
    <Video />

    <section id="about">
      <About />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="projects">
      <Projects />
    </section>
    
      <Advantage />
      <section id="contact">
        <Contact />
      </section>
     
      
    </div>
  )
}

export default Files
