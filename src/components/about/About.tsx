import Container from "../common/Container";
import { CalendarClock, Circle, Mail } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { Button } from "../ui/button";

function About() {
  return (
    <Container className="md:mt-6 mt-16">
      <div className="rounded-lg ">
        {/* Header Section */}
        <div className="flex sm:items-center gap-5">
          <h1 className="text-2xl md:text-4xl font-bold ">Hi, I'm Saurabh</h1>

          <div className="select-none md:px-3 md:py-1.5 px-1.5 py-1 border border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center gap-1 w-fit h-fit">
            <Circle className="md:size-2 size-1.5 fill-green-500 animate-pulse" />
            <span className="font-medium md:text-xs text-[10px]">
              Open to work
            </span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-4 ">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            A{" "}
            <span className="text-foreground/80 font-medium">
              full-stack developer
            </span>{" "}
            who loves coding, tech, and science. I build clean, modern web
            applications using{" "}
            <span className="text-foreground/80 font-medium">
              TypeScript, React, Next.js,{" "}
            </span>{" "}
            and{" "}
            <span className="text-foreground/80 font-medium">Express.js.</span>
          </p>

          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            I'm Open to{" "}
            <span className="text-foreground/80 font-medium">
              freelance projects , collaborations
            </span>
            , and
            <span className="text-foreground/80 font-medium">
              {" "}
              full-time opportunities
            </span>
            .
          </p>
        </div>

        {/* cta  */}

        <div className="mt-4 flex justify-start gap-4">
          <Link
            href="https://cal.com/saurabh-garkoti-oqktbd/30min"
            target="_blank"
          >
            <Button variant="outline">
              <CalendarClock />
              Book a meet
            </Button>
          </Link>

          <Link href="/contact">
            <Button>
              <Mail />
              Get in touch
            </Button>
          </Link>
        </div>

        <Separator className="my-6" />

        {/* Social Links */}
        <div className="flex flex-wrap  items-center md:justify-start justify-center gap-4 md:gap-6 mt-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  gap-2 text-foreground/70 hover:text-foreground transition-colors group"
              aria-label={`Visit my ${link.name} profile`}
            >
              <link.icon className="md:size-5 size-4  group-hover:scale-110 transition-transform" />
              <span className="md:text-sm text-xs font-medium">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default About;
