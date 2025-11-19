import About from "@/components/about/About";
import Container from "@/components/Container";
import GithubGraph from "@/components/github/GithubGraph";
import LandingBlog from "@/components/landing-blogs/landing-blog";
import Projects from "@/components/projects/Projects";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">

      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10 border-x border-dashed border-neutral-100">
       <About/>
       <Projects/>
       <GithubGraph/>
       <LandingBlog/>
      </Container>

    </div>
  );
}
