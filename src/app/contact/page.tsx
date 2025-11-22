import Container from '@/components/Container'
import Contactform from '@/components/contact-form'
import React from 'react'

function page() {
  return (
    <div className='flex min-h-screen  items-center justify-center pt-24'>
         <Container className='w-full max-w-2xl px-4'>

          <div className='mb-16 flex flex-col  items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-2'>Get In Touch</h2>
            <p className='text-muted-foreground text-base md:text-lg max-w-2xl'>Available for freelance projects, collaborations, and full-time opportunities</p>
            </div>
            <Contactform/>
         </Container>
    </div>
  )
}

export default page