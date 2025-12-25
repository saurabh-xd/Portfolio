"use client"
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useSound } from '@/hooks/useSound'

function Navbar() {

   const { resolvedTheme , setTheme } = useTheme();
   const playClick = useSound("/sounds/click.wav");


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
     isMobile ? ["100%", "80%"] : ["60%", "50%"]);


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
      <Image
      className='md:size-16 size-10 rounded-full object-cover'
      src="/avatar.jpg"  width="100" height="100" alt='avatar' />

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

       <Button
            variant="ghost"
            size="icon"
            className="rounded-3xl cursor-pointer hover:text-foreground "
            onClick={() => {
  playClick(0.5);
  setTheme(resolvedTheme  === "dark" ? "light" : "dark");
}}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

     </div>

     </motion.nav>

    </Container>
  )
}

export default Navbar