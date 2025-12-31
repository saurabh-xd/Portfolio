"use client"
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Themetoggle from './theme-toggle'

function Navbar() {

   const navData = [
    // { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);


  const [hovered, setHovered] = useState<number | null>(null);

  const {scrollY}= useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY,
     [0,100],
     isMobile ? ["100%", "80%"] : ["60%", "45%"]);

  // Add image size transform
  const imageSize = useTransform(scrollY,
     [0, 100],
     isMobile ? [40, 32] : [69, 50]);

  useMotionValueEvent(scrollY, "change", (latest)=>{
   if(latest>20){
    setScrolled(true);
   }else{
    setScrolled(false)
   }
    
  })
  return (
   
    <Container>

     <motion.nav
     style={{
        boxShadow: scrolled ? 'var(--shadow-acer)' : "none",
     width,
      y,
     }}
     transition={{
      duration: 0.3,
      ease: "linear"
     }}
     
     className='fixed inset-x-0 top-0 z-50 max-w-full md:max-w-[885px] mx-auto flex items-center justify-between rounded-full bg-background/40 md:py-2 py-1 md:px-3 px-2 backdrop-blur-sm'>

      <Link href='/' >
      <motion.div
        style={{
          width: imageSize,
          height: imageSize,
        }}
        transition={{
          duration: 0.3,
          ease: "linear"
        }}
      >
        <Image
          className='w-full h-full rounded-full object-cover'
          src="/avatar.jpg"
          width="100"
          height="100"
          alt='avatar'
        />
      </motion.div>
    </Link>



     <div className='flex items-center'>




      {navData.map((item,idx)=>(

        <Link 
        className='md:text-sm text-xs relative px-2 py-1'
         href={item.href} key={item.href}
         onMouseEnter={()=> setHovered(idx)}
         onMouseLeave={()=>setHovered(null)}
         >
{   hovered === idx && (
          <motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-accent '></motion.span>
            )}
       <span className='relative z-10'> {item.title}</span>
        </Link>
      ))}

      <Themetoggle/>

     </div>

     </motion.nav>

    </Container>
  )
}

export default Navbar