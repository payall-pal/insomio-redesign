import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"


const Advantage = () => {

    const wordRef1 = useRef(null)
    const wordRef2 = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.to(wordRef2.current,{
            x:20,
            scrollTrigger:{
                trigger: wordRef1.current,
                start: "top 80%",
                end: "top 40%",
                scrub: 3, 
            }

        })

        
        tl.to(wordRef1.current,{
            x:100,
            scrollTrigger:{
                trigger: wordRef1.current,
                start: "top 80%",
                end: "top 40%",
                scrub: 3, 
            }

        })
    })

    return (
        <div className="h-[55vw] w-[99vw]  bg-(--primary) flex gap-[4vw] text-black relative p-[8vw]">
            <div className="h-[40vw] w-[35vw] ">
            {/* <img className="h-[40vw] w-full object-cover" src='https://i.pinimg.com/736x/a0/83/5d/a0835d016affab26cdde6e8be0c027cb.jpg' alt='advantage-image'/> */}
                <h4 className="text-[1.5vw]">ADVANTAGE</h4>
                <div className="text-[6vw] leading-[6.5vw]  tracking-wide mt-[15vw]">
                    <h1 ref={wordRef2}>BUSINESS</h1>
                    <h1 ref={wordRef1} className="">GROWS</h1>
                    <h1 className="ml-[2vw]">FASTER</h1>
                </div>
                <button className="text-[1vw] px-[2vw] pr-[5vw] py-[0.5vw] uppercase font-semibold tracking-wide relative  mt-[1vw]">It's Your Turn To Grow
                    <a  href="#contact" className='active:scale-90 absolute px-[0.4vw] py-[0.15vw] inline-block  right-[1vw] rounded-full text-[0.8vw] font-semibold border-black/80 border-2'>
                        <i class="ri-arrow-right-up-line"></i>
                    </a>
                </button>
            </div>


            {/* // Text div  */}

            <div className="h-[40vw] w-1/2 flex flex-col items-start  text-end gap-[2vw]">
                
                
                <p className="text-[1vw] w-[25vw] font-semibold tracking-widest ml-[20vw]">YOUR BUSINESS GROWTH WILL <br /> ACCELERATE BECAUSE OF AN EFFECTIVE MARKETING STRATEGY</p>
                

            </div>
        </div>

    )
}

export default Advantage