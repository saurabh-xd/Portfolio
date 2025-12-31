import Container from '@/components/common/Container'
import { getBlogs } from '@/lib/mdx'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'



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

  const formatDate = (dateString: string)=>{
    return new Date(dateString).toLocaleString('en-us', {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  };
  
  return (
    <div className='min-h-screen  py-24 px-6'>
        <Container >

          <div className='space-y-3 mb-12 text-center'>
            <h1 className='text-primary text-4xl font-bold tracking-tight md:text-5xl'> Blogs</h1>
           

          </div>
            

            <div className='space-y-8'>
               {
                allBlogs.map((blog,idx)=>(
                  <Link 
                  key={blog.title}
                  href={`/blog/${blog.slug}`}
                   className='block group' >

                     <article className='p-6 rounded-lg border border-primary/10 hover:border-primary/20  transition-all duration-200'>
                        <div className='flex items-start justify-between gap-4 mb-3'>
                            <h2 className='text-xl md:text-2xl font-semibold tracking-tight text-primary group-hover:text-primary/80 transition-colors'>
                                {blog.title}
                            </h2>
                            <time className='text-sm text-primary/60 whitespace-nowrap mt-1 flex items-center justify-center gap-2'>
                              <CalendarDays className='size-4' />   {formatDate(blog.date || "")} 
                            </time>
                        </div>
                        
                        <p className='text-primary/70 leading-relaxed'>
                            {truncate(blog.description || "", 180)}
                        </p>
                        
                        <span className=' mt-4 text-sm font-medium text-primary/60 group-hover:text-primary transition-colors flex items-center  gap-1'>
                            Read more <ArrowRight className='size-4' />
                        </span>
                    </article>
                  </Link>
                ))
               }
            </div>
        </Container>
    </div>
  )
}

export default BlogsPage