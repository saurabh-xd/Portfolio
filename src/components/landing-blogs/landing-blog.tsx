import Link from 'next/link';
import Container from '../common/Container';
import { Button } from '../ui/button';
import BlogList from './BlogList';


async function LandingBlog() {
    
  

  return (
    
<Container >



    <h2 className='text-2xl md:text-4xl font-semibold'>Blogs</h2>
         <BlogList/>

            <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>

          

          </Container>
 
  )
}

export default LandingBlog