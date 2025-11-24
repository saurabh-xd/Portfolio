import About from "@/components/about/About";
import Container from "@/components/common/Container";
import GithubGraph from "@/components/github/GithubGraph";
import LandingBlog from "@/components/landing-blogs/landing-blog";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen ">

      <Container className=" p-4 md:pt-20 md:pb-10 border-x border-dashed border-border">
       <About/>
       <Projects/>
       <GithubGraph/>
       <Skills/>
       <LandingBlog/>
      </Container>

    </div>
  );
}
