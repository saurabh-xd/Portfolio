import Container from '@/components/common/Container'
import BlogList from '@/components/landing-blogs/BlogList'


import { Metadata } from 'next'




export const metadata: Metadata = {
    title: "All blogs",
    description: "all my genral wisdom"
}

async function BlogsPage() {


  
  
  return (
    <div className='min-h-screen  py-24 px-6'>
        <Container >

          <div className='space-y-3 mb-12 text-center'>
            <h1 className='text-primary text-4xl font-bold tracking-tight md:text-5xl'> Blogs</h1>
           

          </div>
            

           <BlogList/>
        </Container>
    </div>
  )
}

export default BlogsPage