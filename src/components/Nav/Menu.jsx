import React from 'react'

const Menu = () => {

    const tl = gsap.timeline()

    useGSAP(() => {

        tl.from(menuRef.current, {
            
            y: "-100%",
            duration: 1,
            delay: 0.5
        })

        tl.pause()

    })

const handleMenu=()=>{
    tl.play()
}

  return (
    <div ref={menuRef}  className='Nav absolute h-[25vw] w-[99vw] text-black bg-olive-900/30 left-0 top-0 backdrop-blur-2xl
             flex items-center justify-center gap-[4vw] font-medium text-[1.5vw] rounded-xl '>

                <h4>How it works</h4>
                <h4>About</h4>
                <h4>Services</h4>
                <h4>Work</h4>
            </div>
  )
}

export default Menu
