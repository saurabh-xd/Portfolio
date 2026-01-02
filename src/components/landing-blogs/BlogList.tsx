import { getBlogs } from '@/lib/mdx';
import { ArrowRight, CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

async function BlogList() {

      const allBlogs = await getBlogs();

     const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
      }

 const formatDate = (dateString: string)=>{
    return new Date(dateString).toLocaleString('en-us', {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  };

  return (
     <div className='flex flex-col gap-6 py-6 '>
       

        
            

            <div className='space-y-4'>
               {
                allBlogs.map((blog,idx)=>( 
                  <Link 
                  key={blog.title}
                  href={`/blog/${blog.slug}`}
                   className='block group' >

                     <article className='p-4 rounded-lg border border-primary/10  transition-all duration-200'>
                        <div className='flex items-start justify-between gap-4 mb-2'>
                            <h2 className='text-xl md:text-xl font-semibold tracking-tight text-primary group-hover:text-primary/80 transition-colors'>
                                {blog.title}
                            </h2>
                            <time className='text-sm text-primary/60 whitespace-nowrap mt-1 flex items-center justify-center gap-2'>
                              <CalendarDays className='size-4' />   {formatDate(blog.date || "")} 
                            </time>
                        </div>
                        
                        <p className='text-primary/70 leading-relaxed text-sm'>
                            {truncate(blog.description || "", 180)}
                        </p>
                        
                        <span className=' mt-4 text-xs font-medium text-primary/60 group-hover:text-primary transition-colors flex items-center  gap-1'>
                            Read more <ArrowRight className='size-4' />
                        </span>
                    </article>
                  </Link>
                ))
               }
            </div>
      
    </div>
  )
}

export default BlogList