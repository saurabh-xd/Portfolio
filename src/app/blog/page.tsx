import Container from '@/components/Container'
import { getBlogs } from '@/utils/mdx'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: "All blogs",
    description: "all my genral wisdom"
}

async function BlogsPage() {

  const allBlogs = await getBlogs();
  console.log("all blogs", allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }
  
  return (
    <div className='min-h-screen flex items-start justify-start'>
        <Container className='min-h-screen px-10 md:pt-30 md:pb-10'>
            <h1 className='text-primary text-2xl font-bold tracking-tight md:text-4xl'>All blogs</h1>
            <p className='text-primary text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ea accusamus sit, sed commodi praesentium. Voluptas odio et earum totam!</p>

            <div className='flex flex-col gap-4 py-10'>
               {
                allBlogs.map((blog,idx)=>(
                  <Link key={blog.title} href={`/blog/${blog.slug}`}>

                    <div className='flex items-center justify-between'>
                    <h2 className='text-primary text-base font-bold tracking-tight '>
                      {blog.title}
                    </h2>

                    <p className=' text-sm '>{new Date(blog.date || "").toLocaleDateString('en-us', {
                      weekday: "long", year:"numeric", month:"short", day:"numeric"
                    })}</p>

                      </div>
                    <p className=' max-w-lg pt-2 text-sm md:text-sm'>
                      {truncate( blog.description || "", 150)}
                    </p>
                  
                  </Link>
                ))
               }
            </div>
        </Container>
    </div>
  )
}

export default BlogsPage