import { getBlogs } from '@/utils/mdx';
import Link from 'next/link';
import React from 'react'
import Container from '../Container';

async function LandingBlog() {
     const allBlogs = await getBlogs();
  
    
      const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
      }
  return (
    
<Container className='mt-20'>



    <h2 className='text-4xl font-semibold'>Blogs</h2>
         <div className='flex flex-col gap-6 py-10'>
               {
                allBlogs.map((blog,idx)=>(
                  <Link key={blog.title} href={`/blog/${blog.slug}`}>

                    <div className='flex items-center justify-between'>
                    <h2 className='text-primary text-base font-bold tracking-tight '>
                      {blog.title}
                    </h2>

                    <p className=' text-sm text-neutral-500'>{new Date(blog.date || "").toLocaleDateString('en-us', {
                      weekday: "long", year:"numeric", month:"short", day:"numeric"
                    })}</p>

                      </div>
                    <p className=' max-w-lg pt-2 text-neutral-500 text-sm md:text-sm'>
                      {truncate( blog.description || "", 150)}
                    </p>
                  
                  </Link>
                ))
               }
            </div>

          

          </Container>
 
  )
}

export default LandingBlog