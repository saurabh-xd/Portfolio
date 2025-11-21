import About from "@/components/about/About";
import Container from "@/components/Container";
import GithubGraph from "@/components/github/GithubGraph";
import LandingBlog from "@/components/landing-blogs/landing-blog";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen ">

      <Container className=" p-4 md:pt-20 md:pb-10 border-x border-dashed border-border">
       <About/>
       <Projects/>
       <GithubGraph/>
       <LandingBlog/>
      </Container>

    </div>
  );
}
