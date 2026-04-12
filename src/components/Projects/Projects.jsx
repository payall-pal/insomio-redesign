import React from 'react'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import projects from '../Data/Data'
import { Link } from 'react-router-dom'

const Projects = () => {

    useGSAP(()=>{
        gsap.from(".projectCard",{
            y: "40vw",
            delay: 0.1,
            opacity: 0,
            ease:"power3.inout",
            stagger: {
                amount: 0.5,
            },
            scrollTrigger: {
                trigger:".projectPage",
                start: "top 50%",
                end: "top -30%",
                scrub: 3,
            }
        })
    })

   

  return (
    <div className='projectPage min-h-[60vw] w-[99vw] bg-(--primary) px-[6vw] flex flex-col gap-[2vw]'>
      <div className='flex items-center justify-between font-bold text-black text-[1.4vw] w-full'>
        <h4 className=''>PROJECTS</h4>
        <div className='flex items-center gap-[1vw]'>
            <div className='h-[0.1vw] w-[10vw] bg-black'></div>
            <h4>01</h4>         
              {/* // jb project pe hover hoye to uska index show kre default m kuch nhi  */}
        </div>
      </div>

      <div className='flex flex-wrap gap-[2vw]'>

        {
            projects.map((project, index)=>(

              <ProjectCard key={index} index={index} id={project.id} title={project.title} topic={project.topic} image={project.image} />
           
               
             ))
        }
        

      </div>
    </div>
  )
}

export default Projects
