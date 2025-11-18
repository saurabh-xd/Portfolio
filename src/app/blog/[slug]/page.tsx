import Container from '@/components/Container'
import { Metadata } from 'next'
import React from 'react'
import { promises as fs} from "fs"
import path from "path"
import { getBlogFrontMatterBySlug, getSingleBlog } from '@/utils/mdx'
import { redirect } from 'next/navigation'



export async function generateMetadata({params}: {params: Promise<{slug: string}>}){

   const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

 
  
  
  if(!frontmatter){
    return{
      title: "Blog not found",
    }
  }

  return{
    title: frontmatter.title + " - Saurabh Garkoti",
    description: frontmatter.description
  }
}

async function SingleBlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug =  (await params).slug;
  const blog = await getSingleBlog(slug);

if(!blog){
  redirect('/blog')
}

const { content, frontmatter} = blog

console.log(frontmatter);


  return (
    <div className='min-h-screen flex items-start justify-start'>
        <Container className='min-h-[200vh] px-10 md:pt-30 md:pb-10'>
            
            <div className='prose mx-auto'>
           
            {content}

            </div>

        </Container>
    </div>
  )
}

export default SingleBlogPage