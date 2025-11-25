import About from "@/components/about/About";
import Container from "@/components/common/Container";
import GithubGraph from "@/components/github/GithubGraph";
import LandingBlog from "@/components/landing-blogs/landing-blog";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
   

      <Container className=" p-4 md:pt-20 md:pb-10  min-h-screen">
       <About/>
       <Projects/>
       <GithubGraph/>
       <Skills/>
       <LandingBlog/>
      </Container>

   
  );
}
