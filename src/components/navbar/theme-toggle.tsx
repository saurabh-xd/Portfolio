import React from 'react'
import { Button } from '../ui/button';
import { useSound } from '@/hooks/useSound';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { SunIcon } from '../ui/sun';
import { MoonIcon } from '../ui/moon';

export default function Themetoggle() {

  const { resolvedTheme , setTheme } = useTheme();
   const playClick = useSound("/sounds/click.wav");

  return (
 <Button
            variant="ghost"
            size="icon"
            className="rounded-3xl  hover:text-foreground "
            onClick={() => {
  playClick(0.5);
  setTheme(resolvedTheme  === "dark" ? "light" : "dark");
}}
          >
            {/* <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" /> */}
             {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" /> */}
            <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'/>
            <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
           
            <span className="sr-only">Toggle theme</span>
          </Button>  )
}
