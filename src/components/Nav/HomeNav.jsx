import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const HomeNav = () => {

    useGSAP(()=>{
        gsap.from(".Nav",{
            y: -20,
            opacity:0,
            duration:1,
            stagger:{
                amount: 0.2
            },
            delay:0.2
        })
    })
  return (
    <div className=' text-black/80 flex items-center font-bold justify-between'>
                            
                        <h3 className='Nav text-[6vw] lg:text-[1.1vw]'>MENU</h3>
                        <div className='Nav flex gap-[2vw] lg:gap-[0.9vw] items-center'>
    
                            <div className='lg:leading-[1vw] leading-[5vw] lg:block hidden'>
                                <h3 className='text-[0.9vw]'>LET'S</h3>
                                <h3 className='text-[0.9vw]'>TALK</h3>
                            </div>
    
                            <a href='#contact' className='lg:px-[0.4vw] lg:py-[0.15vw] px-[1.5vw] py-[0.5vw]  rounded-full text-[4vw] lg:text-[0.8vw] font-semibold border-black/80 border-2'>
                                <i class="ri-arrow-right-up-line"></i>
                            </a>
    
                        </div>
    
                    </div>
  )
}

export default HomeNav
