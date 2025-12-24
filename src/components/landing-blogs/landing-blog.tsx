import { getBlogs } from '@/lib/mdx';
import Link from 'next/link';
import React from 'react'
import Container from '../common/Container';
import { Button } from '../ui/button';

async function LandingBlog() {
     const allBlogs = await getBlogs();
  
    
      const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
      }
  return (
    
<Container >



    <h2 className='text-2xl md:text-4xl font-semibold'>Blogs</h2>
         <div className='flex flex-col gap-6 py-6'>
               {
                allBlogs.map((blog,idx)=>(
                  <Link key={blog.title} href={`/blog/${blog.slug}`}>

                    <div className='flex items-center justify-between'>
                    <h2 className='text-primary text-base font-bold tracking-tight '>
                      {blog.title}
                    </h2>

                    <p className=' md:text-sm text-sm text-neutral-500 '>{new Date(blog.date || "").toLocaleDateString('en-us', {
                     year:"numeric", month:"short", day:"numeric"
                    })}</p>

                      </div>
                    <p className=' max-w-lg pt-2 text-neutral-500 text-sm md:text-sm'>
                      {truncate( blog.description || "", 120)}
                    </p>
                  
                  </Link>
                ))
               }
            </div>

            <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>

          

          </Container>
 
  )
}

export default LandingBlog