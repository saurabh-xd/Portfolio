import React from 'react'
import Container from '../common/Container'
import { CalendarClock, Circle, Mail } from "lucide-react";
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { socialLinks } from '@/data/social';
import { Button } from '../ui/button';




function About() {
  return (
    <Container className='md:mt-6 mt-16'>
      <div className='rounded-lg '>


        {/* Header Section */}
        <div className='flex sm:items-center gap-5'>
          <h1 className='text-2xl md:text-4xl font-bold '>
            Hi, I'm Saurabh
          </h1>
  
        
          <div className='select-none md:px-3 md:py-1.5 px-1.5 py-0.5 border border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center gap-1 w-fit'>
            <Circle className="md:size-2 size-1.5 fill-green-500 animate-pulse" />
            <span className='font-medium md:text-xs text-[10px]'>Open to work</span>
          </div>
        </div>

        


        {/* Bio Section */}
        <div className='mt-4 '>
          <p className='text-muted-foreground leading-relaxed text-base md:text-lg'>
            I'm a <span className='text-foreground font-medium'>full-stack developer</span> who loves coding, tech, and science. 
            I build clean, modern applications using{' '}
            <span className='text-foreground font-medium'>TypeScript, React, Next.js, Node.js,</span> and{' '}
            <span className='text-foreground font-medium'>Express.js.</span>
            
          </p>

           <p className='text-muted-foreground mt-4 text-base md:text-lg'>
           I'm Open to <span className='text-foreground font-medium'>freelance projects , collaborations</span>, and 
            <span className='text-foreground font-medium'> full-time opportunities</span>.
          </p>
        </div>



        {/* cta  */}

      <div className='mt-4 flex justify-start gap-4'>

<Link href="/cal.com">
       <Button variant="outline">
        <CalendarClock />
        Book a meet
       </Button>
</Link>

<Link  href="/contact">
       <Button>
        <Mail />
      Get in touch
       </Button>
</Link>

      </div>

        <Separator className='my-6' />

        {/* Social Links */}
        <div className='flex flex-wrap items-center gap-4 md:gap-6 mt-4'>
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center  gap-2 text-foreground/70 hover:text-foreground transition-colors group'
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