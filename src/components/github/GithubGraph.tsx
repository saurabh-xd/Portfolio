import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import Container from "../Container";
import Link from "next/link";

function GithubGraph() {
  return (
    <section className="mt-10 ">
      <Container>
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            GitHub Activity{" "}
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Link href="https://github.com/saurabh-xd" target="_blank">
            <GitHubCalendar
              username="saurabh-xd"
              blockRadius={10}
              blockMargin={3}
              theme={{
                light: ["#e0f2fe", "#bae6fd", "#a5f3fc", "#67e8f9", "#06b6d4"],
                dark: ["#0c1821", "#164e63", "#0e7490", "#0891b2", "#06b6d4"],
              }}
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default GithubGraph;
