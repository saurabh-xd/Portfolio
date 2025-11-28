import React from 'react'
import Container from '../common/Container'
import Link from 'next/link'
import { XIcon } from '../icons/Xicon'
import { LinkedInIcon } from '../icons/Linkedin'
import { GithubIcon } from '../icons/GithubIcon'

function Footer() {
  return (
    <Container className='flex justify-between   p-3 border-t border-border '>
    
    <p className='text-xs text-neutral-500'>Built with love by Saurabh</p>
    <div className='flex items-center justify-center gap-4'>
        <Link href="https://x.com/_saurabh__xd">
        <XIcon className='size-4 text-neutral-500 hover:text-neutral-200'/>
        </Link>

        <Link href="https://www.linkedin.com/in/saurabh-garkoti-784191322/">
        <LinkedInIcon className='size-4 text-neutral-500 hover:text-neutral-200' />
        </Link>

        <Link href="https://github.com/saurabh-xd">
        <GithubIcon className='size-4 text-neutral-500 hover:text-neutral-200' />
        </Link>

    </div>

    </Container>
  )
}

export default Footer