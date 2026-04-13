


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import image from '../assets/movableImage.png'
import image2 from '../assets/image.png'
import { useRef } from 'react'


const About = () => {

    const popRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    // About paragraph
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.rtext', {
            x: 100,
            scrollTrigger: {
                trigger: '.about',
                start: "top 50%",
                end: "top 20%",
                scrub: 3,
            }

        }, 'anim')

        tl.from('.ltext', {
            x: -100,
            scrollTrigger: {
                trigger: '.about',
                start: "top 50%",
                end: "top 20%",
                scrub: 3,
            }

        }, 'anim')

        tl.from('.l2text', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.about',
                start: "top 50%",
                end: "top 20%",
                scrub: 3,
            }

        }, 'anim')
    })

    // moving div animation
    useGSAP(()=>{

        const tl = gsap.timeline()
        tl.to('.movableImg', {
            x:108,
            duration:4,
            scrollTrigger: {
                trigger: '.movableImg',
                start: "top 85%",
                end: "top 60%",
                scrub: 3,
                
            }

        })
        tl.to('.movableImg', {
            y:"27.7vw",
            duration: 4,
            delay: 0.2,
            ease:"power2.out",

            scrollTrigger: {
                trigger: '.imagee',
                start: "top 100%",
                end: "top 50%",
                scrub: 3,
            }

        })

         

        gsap.from('.imagee', {
            filter: "blur(6px)",
            duration: 1,
            scrollTrigger: {
                trigger: '.imagee',
                start: "top 60%",
                end: "top 50%",
                scrub: 3,
            }

        }, "anim")

        gsap.to('.movableImg, .container-white', {
                    opacity:0,
                    duration:2,
                    scrollTrigger: {
                        trigger: '.imagee',
                        start: "top 58%",
                        end: "top 51%",
                        scrub: 3,
                    }

                }, "anim")

        gsap.from(popRef.current,{
            x:"12vw",
            duration: 0.5,
            opacity:0,
            scrollTrigger:{
                trigger: '.imagee',
                start: "top 52%",
                        end: "top 51%",
                        scrub: 3,

            }

        })


    })


    return (
        <div className='about overflow-x-hidden relative h-[108vw] w-full flex flex-col justify-between bg-(--primary) text-black/80 px-[7vw] py-[6.5vw] pt-[12vw]'>

            <div>

                {/* Animated paragraph  */}
                <div className='relative w-full uppercase  text-[3.3vw] font-light'>

                {/* <h4 className='rtext absolute left-[9vw] top-0'>Lorem ipsum, dolor sit consectetur</h4> */}
                <h4 className='rtext absolute left-[9vw] top-0'>We help brands grow faster with</h4>

                <div className='absolute left-0 top-[4vw] flex gap-[1.2vw]'>
                    {/* <h4 className='ltext '>delectus libero</h4> */}
                    <h4 className='ltext '>smart marketing,</h4>
                    {/* <h4 className=' text-(--text)'>venia inven possimus</h4> */}
                    <h4 className=' text-(--text)'>impactful design, and</h4>
                </div>
                {/* <h4 className='absolute left-[15vw] top-[8vw]'>ipsum dolor delectus sit.</h4> */}
                <h4 className='absolute left-[15vw] top-[8vw]'>strategies that deliver</h4>
                {/* <h4 className='absolute left-[2vw] top-[12vw]'>voluptas consequuntur.</h4> */}
                <h4 className='absolute left-[2vw] top-[12vw]'>real results every time</h4>
                {/* <h4 className='absolute left-[20vw] top-[16vw]'>inventore veniam!</h4> */}
                <h4 className='absolute left-[20vw] top-[16vw]'>consistently!</h4>
                </div>

                {/* MovingImg  */}
                <div >
                    <img className='movableImg h-[9vw] w-[13.2vw] object-cover z-30 rounded-b-md absolute right-[20vw] top-[22%]' src={image} alt="Broken" />
                </div>
            
            </div>

                {/* blurred image  */}

            <div className='h-[50vw] relative'>
                <div className='container-white absolute z-20 right-[7.5vw] top-[-1vw] h-[10vw] w-[13vw] bg-(--primary) blur '></div>
                <img className='imagee h-[45vw] w-full object-cover object-bottom' src={image2} alt="" />
            </div>


                <div ref={popRef} className='absolute right-0 bottom-[43vw] h-[4vw] w-[13vw] bg-black rounded-md border text-[1vw] text-white p-[0.5vw]'><h4>this is how your brand will got creadibility</h4></div>
        </div>
    )
}
export default About

