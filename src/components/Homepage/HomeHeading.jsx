import  { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const HomeHeading = () => {

    const textRef = useRef(null)
    const translateTextRef = useRef(null)

    useGSAP(()=>{
        const tl = gsap.timeline()

        let mm = gsap.matchMedia()

        // mm.add("(min-width: 1023px)")
        // tl.from(".textt",{
        //     opacity: 0,
        //     x: -10, 
        //     delay: 1,
        //     stagger: {
        //         amount: 1.2
        //     }
        // })

        tl.to(textRef.current,{
            width: "9vw",
            duration: 1,
            delay:0.2,
        }, "anim")

        tl.to(translateTextRef.current,{
            x: "3.1vw",
            duration: 1,
            delay:0.2,
        }, "anim")
    })


// w-[9vw]
// translate-x-[4vw]

    return (
        <div className='homeHeading text-[17vw] lg:text-[8vw] flex text-black/80 relative lg:semibold font-medium'>
            <h1 className='textt'>I</h1>
            <h1 className='textt'>N</h1>
            <h1 className='textt'>S</h1>

            <h1 className='opacity-0'>O</h1>
            <div ref={textRef} className='textt absolute lg:h-[6vw] h-[13vw] lg:w-[5.2vw] w-[15vw] rounded-full border-black/80 border-6 lg:border-10 left-[30vw] lg:left-[14.2vw] bottom-[6vw] lg:bottom-[2.9vw]'></div>
            <div ref={translateTextRef} className='flex '>
                <h1 className='textt'>M</h1>
                <h1 className='textt'>I</h1>
                <h1 className='textt'>O</h1>
            </div>
        </div>
    )
}

export default HomeHeading
