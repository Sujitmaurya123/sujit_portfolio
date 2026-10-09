"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

/* =========================================================
   FEATURED PROJECTS
========================================================= */

const projects = [
  {
    type: "AI",
    title: "Vedronix",
    description: "AI Agent. Voice AI. Enterprise Automation.",
    image: "/images/projects/vedronix.jpg",
    href: "#",
  },
  {
    type: "APP",
    title: "Wedlock",
    description:
      "Modern matrimonial matching, built mobile-first.",
    image: "/images/projects/wedlock.jpg",
    href: "#",
  },
  {
    type: "APP",
    title: "Ved Vivah",
    description:
      "Traditional matchmaking, built for Vedic culture.",
    image: "/images/projects/vedvivah.jpg",
    href: "#",
  },
  {
    type: "IOS",
    title: "Rex Commodity",
    description:
      "Live oil & petroleum market intelligence.",
    image: "/images/projects/rex.jpg",
    href: "#",
  },
  {
    type: "CRM",
    title: "SimplySynced AI",
    description:
      "A full SaaS CRM, built for roofing businesses.",
    image: "/images/projects/simplysynced.jpg",
    href: "#",
  },
  {
    type: "WEB",
    title: "Project Six",
    description:
      "Modern web application with scalable architecture.",
    image: "/images/projects/simplysynced.jpg",
    href: "#",
  },
  {
    type: "AI",
    title: "Project Seven",
    description:
      "AI-powered automation and intelligent workflows.",
    image: "/images/projects/simplysynced.jpg",
    href: "#",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Projects() {

  const projectsRef = useRef(null);


  /* =======================================================
     SCROLL LEFT
  ======================================================= */

  const scrollLeft = () => {
    if (!projectsRef.current) return;

    projectsRef.current.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };


  /* =======================================================
     SCROLL RIGHT
  ======================================================= */

  const scrollRight = () => {
    if (!projectsRef.current) return;

    projectsRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };


  return (
    <main className="
      w-full
      overflow-hidden
      bg-[#050505]
      text-white
    ">

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="
          relative

          px-4
          pb-16
          pt-10

          sm:px-6
          sm:pb-20
          sm:pt-14

          lg:px-10
          lg:pb-24
          lg:pt-16

          xl:px-12
        "
      >

        <div className="
          mx-auto
          max-w-[1600px]
        ">


          {/* =================================================
              HEADER
          ================================================= */}

          <div className="
            mb-6

            flex
            items-end
            justify-between

            gap-4
          ">

            {/* LEFT */}

            <div>

              <h2 className="
                text-2xl
                font-bold
                tracking-tight

                sm:text-3xl

                lg:text-[34px]
              ">
                Featured Projects
              </h2>

              <p className="
                mt-2

                text-sm
                text-[#6A6A6A]

                sm:text-base
              ">
                Real products, real systems, real impact.
              </p>

            </div>


            {/* =================================================
                RIGHT CONTROLS
            ================================================= */}

            <div className="
              flex
              items-center
              gap-2
            ">

              {/* View All */}

              <Link
                href="/#projects"
                className="
                  hidden

                  items-center
                  gap-2

                  text-sm
                  font-semibold

                  text-[#B3B3B3]

                  transition-colors

                  hover:text-[#1DB954]

                  sm:flex
                "
              >
                View All

                <ArrowRight size={16} />
              </Link>


              {/* Divider */}

              <div className="
                hidden
                h-6
                w-px
                bg-white/10

                sm:block
              " />


              {/* LEFT ARROW */}

              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll projects left"

                className="
                  flex

                  h-9
                  w-9

                  sm:h-10
                  sm:w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-[#121212]

                  text-white

                  transition-all
                  duration-300

                  hover:border-[#1DB954]/50
                  hover:bg-[#1DB954]/10
                  hover:text-[#1DB954]

                  active:scale-90
                "
              >
                <ChevronLeft
                  size={18}
                  className="sm:h-5 sm:w-5"
                />
              </button>


              {/* RIGHT ARROW */}

              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll projects right"

                className="
                  flex

                  h-9
                  w-9

                  sm:h-10
                  sm:w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-[#121212]

                  text-white

                  transition-all
                  duration-300

                  hover:border-[#1DB954]/50
                  hover:bg-[#1DB954]/10
                  hover:text-[#1DB954]

                  active:scale-90
                "
              >
                <ChevronRight
                  size={18}
                  className="sm:h-5 sm:w-5"
                />
              </button>

            </div>

          </div>


          {/* =================================================
              PROJECT SCROLLER
          ================================================= */}

          <div
            ref={projectsRef}

            className="
              flex

              gap-3
              sm:gap-4

              overflow-x-auto

              pb-4

              scroll-smooth

              snap-x
              snap-mandatory

              [scrollbar-width:none]
              [-ms-overflow-style:none]

              [&::-webkit-scrollbar]:hidden
            "
          >

            {projects.map((project, index) => (

              <Link
                href={project.href}
                key={`${project.title}-${index}`}

                className="
                  group

                  relative

                  flex-shrink-0

                  w-[270px]

                  sm:w-[300px]

                  md:w-[320px]

                  lg:w-[330px]

                  xl:w-[340px]

                  snap-start

                  overflow-hidden

                  rounded-xl

                  border
                  border-white/[0.07]

                  bg-[#121212]

                  transition-all
                  duration-500

                  hover:-translate-y-1

                  hover:border-[#1DB954]/40

                  hover:shadow-[0_15px_50px_rgba(29,185,84,0.08)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="
                  relative

                  aspect-[16/10]

                  overflow-hidden
                ">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill

                    sizes="
                      (max-width: 640px) 270px,
                      (max-width: 768px) 300px,
                      (max-width: 1024px) 320px,
                      340px
                    "

                    className="
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />


                  {/* =================================================
                      DARK GRADIENT
                  ================================================= */}

                  <div className="
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black

                    via-black/20

                    to-transparent
                  " />


                  {/* =================================================
                      GREEN HOVER OVERLAY
                  ================================================= */}

                  <div className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[#1DB954]/0

                    transition-all
                    duration-500

                    group-hover:bg-[#1DB954]/[0.05]
                  " />


                  {/* =================================================
                      PROJECT TYPE
                  ================================================= */}

                  <span className="
                    absolute

                    left-2
                    top-2

                    rounded-md

                    bg-[#1DB954]

                    px-2
                    py-1

                    text-[10px]

                    font-bold

                    text-black

                    shadow-[0_4px_15px_rgba(29,185,84,0.25)]

                    sm:text-xs
                  ">
                    {project.type}
                  </span>


                  {/* =================================================
                      EXTERNAL LINK
                  ================================================= */}

                  <div className="
                    absolute

                    right-3
                    top-3

                    flex

                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    bg-black/60

                    text-white

                    opacity-0

                    backdrop-blur-md

                    transition-all
                    duration-300

                    group-hover:opacity-100
                  ">
                    <ExternalLink size={14} />
                  </div>


                  {/* =================================================
                      PROJECT CONTENT
                  ================================================= */}

                  <div className="
                    absolute

                    bottom-0
                    left-0
                    right-0

                    p-4

                    sm:p-5
                  ">

                    <h3 className="
                      text-lg

                      font-bold

                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#1DB954]
                    ">
                      {project.title}
                    </h3>

                    <p className="
                      mt-1

                      line-clamp-2

                      text-xs

                      leading-relaxed

                      text-[#B3B3B3]

                      sm:text-sm
                    ">
                      {project.description}
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* =================================================
              MOBILE SWIPE HINT
          ================================================= */}

          <div className="
            mt-3

            flex
            items-center
            justify-center
            gap-2

            text-[11px]

            text-[#6A6A6A]

            sm:hidden
          ">

            <ChevronLeft size={13} />

            <span>
              Swipe to explore projects
            </span>

            <ChevronRight size={13} />

          </div>


          {/* =================================================
              MOBILE VIEW ALL
          ================================================= */}

          <Link
            href="/#projects"

            className="
              mt-5

              flex

              items-center
              justify-center
              gap-2

              rounded-full

              border
              border-white/10

              bg-[#121212]

              px-5
              py-3

              text-sm

              font-semibold

              text-white

              transition-all

              hover:border-[#1DB954]/40
              hover:bg-[#1DB954]/10
              hover:text-[#1DB954]

              sm:hidden
            "
          >
            View All Projects

            <ArrowRight size={16} />

          </Link>

        </div>

      </section>

    </main>
  );
}