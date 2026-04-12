import React from 'react'
import ContactHeader from './ContactHeader'
import ContactMid from './ContactMid'
import ContactFooter from './ContactFooter'

const Contact = () => {
  return (
    <div className='h-[50vw] w-[99vw] bg-black flex flex-col items-center justify-between p-[4.5vw]'>
      <ContactHeader />
      <ContactMid />
      <ContactFooter />
    </div>
  )
}

export default Contact
