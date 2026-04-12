import React from 'react'

const ContactFooter = () => {
  return (
    <div className='flex items-center justify-between text-(--primary) w-full'>
        <div>
            <h5 className='text-[1vw]'>@ 2021 - COPYRIGHT</h5>
            <h5 className='text-[0.7vw] text-white/60'>ALL RIGHTS RESERVED</h5>
        </div>
        <div className='flex gap-[6vw]'>
            <div >
                <h5 className='text-[1.1vw]'>CONTACT US</h5>
                <div className='mt-[0.3vw] text-[0.7vw] text-white/60'> <h5>+1(999)888-77-66</h5> <h4>HELLO@INSOMIO.COM</h4> </div>
            </div>
            <div >
                <h5 className='text-[1.1vw]'>LOCATION</h5>
                <div className='mt-[0.3vw] text-[0.7vw] text-white/60'><h5>483920, MOSCOW,</h5> <h5>MYASNITSKAYA 22/2/5, OFFICE 4</h5></div>
            </div>
        </div>
      
    </div>
  )
}

export default ContactFooter