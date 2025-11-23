import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedInIcon } from "@/components/icons/Linkedin";
import { XIcon } from "@/components/icons/Xicon";
import { Mail } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/_saurabh__xd",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-garkoti-784191322/", 
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/saurabh-xd",
    icon: GithubIcon,
  },
  {
    name: "Email",
    href: "mailto:saurabhgarkotiii@gmail.com", 
    icon: Mail,
  },
];