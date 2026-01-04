"use client"
import { GitHubCalendar } from "react-github-calendar";
import Container from "../common/Container";
import Link from "next/link";
import { useEffect, useState } from "react";

function GithubGraph() {

   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="mt-22 ">
      <Container>
        <div className="flex items-center justify-start mb-6">
          <h2 className="md:text-4xl text-2xl font-semibold tracking-tight">
            GitHub Activity
          </h2>
        </div>

        
         <div className="w-full border border-border p-3 md:p-6 overflow-x-auto rounded-md">
          <div className="min-w-max ">
          <Link href="https://github.com/saurabh-xd" target="_blank">
            <GitHubCalendar
              username="saurabh-xd"
             blockRadius={isMobile ? 8 : 10}
                blockMargin={isMobile ? 1 : 3}
                blockSize={isMobile ? 8 : 12}
                fontSize={isMobile ? 9 : 12}
              theme={{
                light: ["#e0f2fe", "#bae6fd", "#a5f3fc", "#67e8f9", "#06b6d4"],
                dark: ["#0c1821", "#164e63", "#0e7490", "#0891b2", "#06b6d4"],
              }}
              tooltips={{}}
            />
          </Link>
        </div>
        </div>
      </Container>
    </section>
  );
}

export default GithubGraph;
