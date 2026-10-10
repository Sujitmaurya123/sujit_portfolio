"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "AI Engineer", href: "/ai-engineer" },
  { label: "Freelance", href: "/freelance" },
  { label: "Contact", href: "/contact" },
];

const contacts = [
  {
    label: "Email",
    href: "mailto:sujitkic6802maurya@gmail.com.com",
    icon: Mail,
  },
  {
    label: "Call",
    href: "tel:+917318079820",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thesujitkumar",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Sujitmaurya123",
    icon: FaGithub,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917318079820",
    icon: MessageCircle,
    external: true,
  },
];

export default function FooterSection() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/[0.06] bg-[#080808] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 lg:px-16">
        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-9 gap-y-4"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                group
                relative
                text-[16px]
                font-medium
                text-white/50
                transition-colors
                duration-200
                hover:text-[#1DB954]
              "
            >
              {item.label}

              {/* Hover underline */}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-[#1DB954]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* =====================================================
            CONTACT LINKS
        ====================================================== */}

        <nav
          aria-label="Contact links"
          className="mt-8 flex flex-wrap items-center gap-x-9 gap-y-4"
        >
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[16px]
                  font-medium
                  text-white/50
                  transition-colors
                  duration-200
                  hover:text-[#1DB954]
                "
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="
                    opacity-70
                    transition-all
                    duration-200
                    group-hover:opacity-100
                  "
                />

                <span>{item.label}</span>

                {item.external && (
                  <ArrowUpRight
                    size={13}
                    className="
                      -ml-1
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Copyright */}

          <p className="text-[15px] font-medium text-white/45">
            © {currentYear} Sujit Kumar. Built with{" "}
            <span className="text-white/60">
             Next, React, Tailwind, Flutter & Framer Motion.
            </span>
          </p>

          {/* Location */}

          <div className="flex items-center gap-2 text-[15px] font-medium text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1DB954]" />

            Mirzapur, Uttar Pradesh, India
          </div>
        </div>
      </div>
    </footer>
  );
}