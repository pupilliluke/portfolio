import { 
  BsLinkedin as LinkedinIcon, 
  BsGithub as GithubIcon,
  BsTwitterX as TwitterXIcon,
  BsDiscord as DiscordIcon,
  BsInstagram as InstagramIcon
} from "react-icons/bs";

import { FiCodepen as CodepenIcon } from "react-icons/fi";


// navigation
export const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Skills",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/blog",
  },
  {
    name: "Education",
    href: "/education",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

// social media
export const SOCIAL_LINKS = [
  {
    title: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/users/750869104050569277",
  },
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/",
  },
  // {
  //   title: "CodePen",
  //   icon: CodepenIcon,
  //   href: "https://codepen.io/sahilpro/",
  // },
  {
    title: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/pupilliluke/",
  },
  {
    title: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/lukepupilli_",
  },
];

// skills
export const SKILLS = [
  {
    title: "Languages",
    stacks: ["Java", "HTML", "CSS", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Frontend Frameworks",
    stacks: ["React JS", "Next.js"],
  },
  {
    title: "Styling Libraries",
    stacks: ["Bootstrap", "Tailwind CSS"],
  },  
  {
    title: "Backend Frameworks",
    stacks: ["Spring Boot", "ASP.NET Core"],
  },  
  {
    title: "Databases & CMS",
    stacks: ["MySQL", "SQLite", "Firebase"],
  },
  {
    title: "Other Tools",
    stacks: ["Jira", "Atlassian", "Bitbucket", "VS Code", "Git", "GitHub","Node.js" ],
  },
];
