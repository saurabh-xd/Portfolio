import React from 'react'
import Container from '../common/Container'
import Link from 'next/link'
import { XIcon } from '../icons/Xicon'
import { LinkedInIcon } from '../icons/Linkedin'
import { GithubIcon } from '../icons/GithubIcon'

function Footer() {
  return (
    <Container className=' px-4   mt-10 '>
    
    <div className='border-t border-border py-8 flex justify-between'>
    <p className='text-xs text-neutral-500'>Designed & Developed by <span className="font-medium text-foreground/70">Saurabh.</span></p>
    <div className='flex items-center justify-center gap-5'>
        <Link href="https://x.com/_saurabh__xd" target='_blank'>
        <XIcon className='size-4 text-neutral-500 hover:text-neutral-200 transition-colors'/>
        </Link>

        <Link href="https://www.linkedin.com/in/saurabh-garkoti-784191322/" target='_blank'>
        <LinkedInIcon className='size-4 text-neutral-500 hover:text-neutral-200 transition-colors' />
        </Link>

        <Link href="https://github.com/saurabh-xd" target='_blank'>
        <GithubIcon className='size-4 text-neutral-500 hover:text-neutral-200 transition-colors' />
        </Link>

    </div>
    </div>

    </Container>
  )
}

export default Footer