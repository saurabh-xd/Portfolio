import React from 'react'
import Container from '../Container'
import { Mail, Circle } from "lucide-react";
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { XIcon } from '../icons/Xicon';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedInIcon } from '../icons/Linkedin';

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/_saurabh__xd",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-garkoti-784191322/", 
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/saurabh-xd",
    icon: GithubIcon,
  },
  {
    name: "Email",
    href: "mailto:saurabhgarkotiii@gmail.com", 
    icon: Mail,
  },
];

function About() {
  return (
    <Container className='mt-6'>
      <div className='rounded-lg '>


        {/* Header Section */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Hi, I'm Saurabh
          </h1>
  
        
          <div className='select-none px-3 py-1.5 border border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center gap-2 w-fit'>
            <Circle className="w-2 h-2 fill-green-500 animate-pulse" />
            <span className='font-medium text-xs'>Open to work</span>
          </div>
        </div>


        {/* Bio Section */}
        <div className='mt-4'>
          <p className='text-muted-foreground leading-relaxed text-base md:text-lg'>
            I'm a <span className='text-foreground font-medium'>full-stack developer</span> who loves coding, tech, and science. 
            I build clean, modern applications using{' '}
            <span className='text-foreground font-medium'>TypeScript, React, Next.js, Node.js,</span> and{' '}
            <span className='text-foreground font-medium'>Express.js.</span>
            {' '}Open to freelance projects, collaborations, and full-time roles.
          </p>
        </div>

        <Separator className='my-6' />

        {/* Social Links */}
        <div className='flex flex-wrap items-center gap-4 md:gap-6 '>
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group'
              aria-label={`Visit my ${link.name} profile`}
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className='text-sm font-medium'>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default About