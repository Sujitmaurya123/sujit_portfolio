"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Download,
  Mail,
  Play,
  ArrowRight,
} from "lucide-react";
import { FaGithub,FaLinkedin ,FaInstagram,} from "react-icons/fa";

export default function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/sujitsk.png"
            alt="Sujit Kumar"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Spotify-style cinematic overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left dark gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/85
            to-black/20
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[50%]
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/80
            to-transparent
          "
        />

        {/* =================================================
            SPOTIFY GREEN GLOW
        ================================================= */}

        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1DB954]/[0.08]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-[40%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1DB954]/[0.06]
            blur-[120px]
          "
        />

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            max-w-[1500px]
            items-center
            px-6
            pt-20
            lg:px-10
          "
        >

          <div className="max-w-[900px]">

            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span
                className="
                  text-sm
                  font-black
                  tracking-[0.18em]
                  text-[#1DB954]
                "
              >
                FEATURED
              </span>

              <span className="text-[#1DB954]">
                •
              </span>

              <span
                className="
                  text-sm
                  font-black
                  tracking-[0.18em]
                  text-[#1DB954]
                "
              >
                2026
              </span>

              <span
                className="
                  rounded
                  border
                  border-white/25
                  px-2
                  py-1
                  text-[10px]
                  font-bold
                  text-white/60
                "
              >
                AVAILABLE
              </span>
            </motion.div>


            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-[900px]
                text-[32px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.05em]

                sm:text-[38px]
                md:text-[56px]
                lg:text-[62px]
              "
            >
              Sujit Kumar
             
            </motion.h1>


            {/* Roles */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >

              <RoleBadge>
                Full Stack Developer
              </RoleBadge>

              <RoleBadge>
                AI Agent Developer
              </RoleBadge>

            </motion.div>


            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="
                mt-7
                max-w-[650px]
                text-[13px]
                leading-relaxed
                text-[#B3B3B3]

                sm:text-[13px]
              "
            >
              Building scalable digital products, AI-powered systems
              and production-ready applications for startups & enterprises.
            </motion.p>


            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="
                mt-9
                flex
                flex-wrap
                gap-3
              "
            >

              {/* Projects */}
              <Link
                href="/projects"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#1DB954]
                  px-7
                  py-4
                  text-[13px]
                  font-bold
                  text-black

                  shadow-[0_8px_30px_rgba(29,185,84,0.22)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                  hover:bg-[#1ED760]
                "
              >
                <Play
                  size={19}
                  fill="currentColor"
                  className="
                    transition
                    group-hover:scale-110
                  "
                />

                View Projects

                <ArrowRight
                  size={18}
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </Link>


              {/* Resume */}
<a
  href="/assets/CV_SujitKumar.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    items-center
    gap-3
    rounded-full
    border
    border-white/10
    bg-white/[0.08]
    px-7
    py-4
    text-[13px]
    font-bold
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-[#1DB954]/40
    hover:bg-white/[0.12]
  "
>
  <Download
    size={19}
    className="transition-transform duration-300 group-hover:-translate-y-1"
  />

  View Resume
</a>



              {/* Hire */}
              <Link
                href="/contact"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#1DB954]/40
                  bg-[#1DB954]/10
                  px-7
                  py-4
                  text-[13px]
                  font-bold
                  text-[#1DB954]

                  transition-all
                  duration-300

                  hover:bg-[#1DB954]
                  hover:text-black
                  hover:scale-[1.02]
                "
              >
                <Mail size={19} />

                Hire Me
              </Link>

            </motion.div>


            {/* Social */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="
                mt-10
                flex
                items-center
                gap-3
              "
            >

              <SocialButton
                href="https://github.com/Sujitmaurya123"
                icon={<FaGithub size={18} />}
              />

              <SocialButton
                href="https://www.linkedin.com/in/thesujitkumar"
                icon={<FaLinkedin size={18} />}
              />

              

            </motion.div>

          </div>
        </div>


        {/* =====================================================
            BOTTOM META
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="
            absolute
            bottom-16
            right-8
            z-20
            hidden
            items-center
            gap-4
            lg:flex
          "
        >

          <div
            className="
              h-8
              w-[3px]
              rounded-full
              bg-[#1DB954]
            "
          />

          <div>

            <p
              className="
                text-sm
                font-medium
                text-white/80
              "
            >
              Full-stack & AI agent developer
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[#B3B3B3]
              "
            >
              Production systems, not demos.
            </p>

          </div>

        </motion.div>


        {/* Scroll */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            md:flex
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              h-8
              w-[1px]
              bg-[#1DB954]/60
            "
          />

        </motion.div>

      </section>
    </main>
  );
}


/* =============================================================
   ROLE BADGE
============================================================= */

function RoleBadge({ children }) {
  return (
    <span
      className="
        rounded-full
        border
        border-white/10
        bg-[#121212]/80
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white/90
        shadow-lg
        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-[#1DB954]/30
        hover:bg-[#1DB954]/10
        hover:text-[#1DB954]

        sm:text-base
      "
    >
      {children}
    </span>
  );
}


/* =============================================================
   SOCIAL BUTTON
============================================================= */

function SocialButton({ href, icon }) {
  return (
    <a
      href={href}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-[#121212]/80
        text-white/60
        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-[#1DB954]/40
        hover:bg-[#1DB954]/10
        hover:text-[#1DB954]
      "
    >
      {icon}
    </a>
  );
}