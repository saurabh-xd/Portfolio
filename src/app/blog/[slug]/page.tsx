import Container from '@/components/common/Container'
import { getBlogFrontMatterBySlug, getSingleBlog } from '@/lib/mdx'
import { redirect } from 'next/navigation'
import Image from 'next/image'



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



  return (
    <div className='min-h-screen flex items-start justify-start pt-24'>
        <Container className='py-20'>

         <Image src={frontmatter.image} alt={frontmatter.title} width={800} height={400} className='w-full h-auto max-w-3xl rounded-lg mx-auto mb-12 shadow-2xl object-cover'/>
            
            
            
                   <article className='prose prose-lg dark:prose-invert mx-auto max-w-3xl'>

           
            {content}

            </article>

        </Container>
    </div>
  )
}

export default SingleBlogPage