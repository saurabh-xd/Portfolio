"use client"
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'motion/react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function Navbar() {

  const { theme, setTheme } = useTheme();

   const navData = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];


  const [hovered, setHovered] = useState<number | null>(null);

  const {scrollY}= useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

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
     animate={{
        boxShadow: scrolled ? 'var(--shadow-acer)' : "none",
      width: scrolled ? '50%' : '100%',
      y: scrolled ? 10 : 0,
     }}
     transition={{
      duration: 0.3,
      ease: "linear"
     }}
     
     className='fixed inset-x-0 top-0 z-50 max-w-[885px]   mx-auto flex items-center justify-between rounded-full dark:bg-background bg-background py-2 px-3 '>
      <Image
      className='h-15 w-15 rounded-full'
      src="/avatar.jpg" width="100" height="100" alt='avatar' />

    

     <div className='flex items-center gap-2'>

 <Button
            variant="ghost"
            size="icon"
            className="rounded-3xl cursor-pointer hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

      {navData.map((item,idx)=>(

        <Link 
        className='text-sm relative px-2 py-1'
         href={item.href} key={idx}
         onMouseEnter={()=> setHovered(idx)}
         onMouseLeave={()=>setHovered(null)}
         >
{   hovered === idx && (
          <motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800'></motion.span>
            )}
       <span className='relative z-10'> {item.title}</span>
        </Link>
      ))}

     </div>

     </motion.nav>

    </Container>
  )
}

export default Navbar