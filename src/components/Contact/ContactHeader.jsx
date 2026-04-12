import React from 'react'

const ContactHeader = () => {
  return (
    <div className='w-full flex items-center justify-between text-(--primary)'>
        <div>
            <h4 className='text-[1.2vw] leading-[1.9vw] tracking-wide'>DIGITAL MARKETING AGENCIES THAT HELP YOU <br /> PROMOTE YOUR PRODUCTS OR SERVCES ONLINE</h4>
        </div>
        <div className='flex items-center gap-[3vw] text-[1vw] uppercase tracking-wide'>
            <a href="/#home">How it works</a>
        <a href="/#about">About</a>
        <a href="/#services">Services</a>
        <a href="/#projects">Works</a>
        </div>
      
    </div>
  )
}

export default ContactHeader
