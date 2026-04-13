





import  { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const ContactMid = () => {

    const texttRef = useRef(null)
    const translateTexttRef = useRef(null)

    useGSAP(()=>{
        const tl = gsap.timeline()
        gsap.registerPlugin(ScrollTrigger)
        tl.from(".letter",{
            opacity: 0,
            x: -10, 
            stagger: {
                amount: 1.2,
            },
            scrollTrigger:{
                trigger: ".contact",
                start:"top 70%",
                end: "top 50%",
            }
        })

        tl.to(texttRef.current,{
            width: "9vw",
            duration:1,
        }, "anim")

        tl.to(translateTexttRef.current,{
            x: "3vw",
            duration: 1,
        }, "anim")
    })



    return (
        <div className='contact text-[8vw] flex text-white relative'>
            <h1 className='letter'>I</h1>
            <h1 className='letter'>N</h1>
            <h1 className='letter'>S</h1>

            <h1 className='opacity-0'>O</h1>
            <div ref={texttRef} className='letter absolute h-[6vw] w-[5.2vw] rounded-full border-(--text) border-11 left-[14.2vw] bottom-[2.9vw]'></div>
            <div ref={translateTexttRef} className='flex '>
                <h1 className='letter'>M</h1>
                <h1 className='letter'>I</h1>
                <h1 className='letter'>O</h1>
            </div>
        </div>
    )
}

export default ContactMid



   


