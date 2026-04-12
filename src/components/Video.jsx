








import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Video = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{

        gsap.from(".videopage",{
            backgroundColor: "black",
            color: "white",
            duration: 5,
            scrollTrigger:{
                trigger: ".videopage",
                start: "top 80%",
                end: "top 20%",
                scrub: true
            }
        })
    })

  return (
    <div className='videopage h-[50vw] w-[99vw] bg-(--primary)   px-[5vw] flex items-center justify-center'>
        <div className='h-[45vw] w-[99vw] rounded-4xl'>
            <video autoPlay muted loop className='h-[45vw] w-[99vw] rounded-4xl' src="https://www.pexels.com/download/video/7687931/"></video>
        </div>
        
      
    </div>
  )
}

export default Video


