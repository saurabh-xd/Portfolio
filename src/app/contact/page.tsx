import Contactform from '@/components/contact/contact-form'
import Container from '@/components/common/Container'

import React from 'react'

function page() {
  return (
    <div className='flex min-h-screen  items-center justify-center py-24 px-6'>
         <Container className='w-full max-w-2xl px-4'>

          <div className='mb-8 flex flex-col  items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-2'>Get In Touch</h2>
            <p className='text-muted-foreground text-base md:text-lg max-w-2xl text-center'>Available for freelance projects, collaborations, and full-time opportunities</p>
            </div>
            <Contactform/>
         </Container>
    </div>
  )
}

export default page