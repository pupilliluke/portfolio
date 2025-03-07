"use client";

import { motion } from "framer-motion";
// icons
import { BsLinkedin as LinkedinIcon } from "react-icons/bs";
import { FiCodepen as CodepenIcon } from "react-icons/fi";
import { BsGithub as GithubIcon } from "react-icons/bs";
import {
  BsTwitterX as TwitterXIcon,
  BsDiscord as DiscordIcon,
} from "react-icons/bs";
import { BsInstagram as InstagramIcon } from "react-icons/bs";
import { GlobeIcon, MailIcon } from "lucide-react";

import { SocialLink } from "@/components/social-link";

const links = [
  {
    href: "https://github.com/pupilliluke/",
    icon: GithubIcon,
    label: "Follow on GitHub",
    newTab: true,
  },
  {
    href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/",
    icon: LinkedinIcon,
    label: "Connect on LinkedIn",
    newTab: true,
  },
  {
    href: "https://discord.com/users/750869104050569277",
    icon: DiscordIcon,
    label: "Connect on Discord",
    newTab: true,
  },
  {
    href: "https://instagram.com/lukepupilli_",
    icon: InstagramIcon,
    label: "Follow on Instagram",
    newTab: true,
  },
  {
    href: "mailto:pupilli.dev@gmail.com",
    icon: MailIcon,
    label: "Send an Email",
    newTab: true,
  },
  {
    href: "/",
    icon: GlobeIcon,
    label: "Portfolio",
    newTab: true,
  },
];

const Links = () => (
  <div className="py-5 border border-white/10 bg-white/10 backdrop-blur rounded-2xl w-full max-w-md mx-auto  p-4">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-7 md:mb-10"
    >
      <motion.img
        src="/images/luke-pupilli.png"
        alt="Luke Pupilli"
        className="w-28 h-28 md:w-36 md:h-36 aspect-square rounded-full mx-auto mb-4 border-2 border-white shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.h1
        className="text-2xl font-bold mb-1 md:mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Luke Pupilli
      </motion.h1>
      <motion.p
        className="text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Fullstack developer from Pittsburgh, PA
      </motion.p>
    </motion.div>

    <motion.div
      className="space-y-4 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {links.map((link, index) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
          index={index}
          newTab={link.newTab}
        />
      ))}
    </motion.div>
  </div>
);

export default Links;
