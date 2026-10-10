"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   EXPLORE SERIES
========================================================= */

const series = [
  {
    number: "EP 1",
    title: "About Me",
    subtitle: "The origin story",
    image: "/images/aboutme.jpg",
    href: "/about",
  },
  {
    number: "EP 2",
    title: "Experience",
    subtitle: "The grind, counted live",
    image: "/images/exp.jpg",
    href: "/experience",
  },
  {
    number: "EP 3",
    title: "Skills",
    subtitle: "The toolkit",
    image: "/images/skills.jpg",
    href: "/skills",
  },
  {
    number: "EP 4",
    title: "Featured Projects",
    subtitle: "Real products, shipped",
    image: "/images/projects.jpg",
    href: "/projects",
  },
  {
    number: "SPECIAL",
    title: "AI Engineer",
    subtitle: "Voice agents & automation",
    image: "/images/aieng.jpg",
    href: "/ai-engineer",
  },
  // {
  //   number: "SPECIAL",
  //   title: "Flutter Dev",
  //   subtitle: "Mobile apps & solutions",
  //   image: "/images/flutter.jpg",
  //   href: "/flutter",
  // },
  {
    number: "Freelance",
    title: "AI / Full stack Dev",
    subtitle: "Intelligent systems",
    image: "/images/freelance.jpg",
    href: "/freelance",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PortfolioSections() {

  const scrollRef = useRef(null);

  /* =======================================================
     SCROLL LEFT
  ======================================================= */

  const scrollLeft = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };


  /* =======================================================
     SCROLL RIGHT
  ======================================================= */

  const scrollRight = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };


  return (
    <main className="w-full overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          EXPLORE THE SERIES
      ===================================================== */}

      <section
        id="explore"
        className="
          relative
          w-full

          border-t
          border-white/[0.06]

          px-4
          py-12

          sm:px-6
          sm:py-14

          lg:px-10
          lg:py-16

          xl:px-12
        "
      >

        <div className="mx-auto max-w-[1600px]">


          {/* =================================================
              TOP HEADER
          ================================================= */}

          <div className="
            mb-6
            flex
            items-end
            justify-between
            gap-4
          ">

            <div>

              <p className="
                mb-2

                text-[10px]
                sm:text-xs

                font-bold
                uppercase

                tracking-[0.3em]

                text-[#1DB954]
              ">
                Season 2026
              </p>

              <p className="
                text-sm
                sm:text-base

                text-[#B3B3B3]
              ">
                One developer. Real products. Shipped in production.
              </p>

            </div>

          </div>


          {/* Divider */}

          <div className="
            mb-8
            h-px
            w-full
            bg-white/[0.06]
          " />


          {/* =================================================
              TITLE + CONTROLS
          ================================================= */}

          <div className="
            mb-5

            flex
            items-center
            justify-between

            gap-4
          ">

            <h2 className="
              text-2xl
              sm:text-3xl
              lg:text-[34px]

              font-bold
              tracking-tight
            ">
              Explore the Series
            </h2>


            {/* =================================================
                DESKTOP ARROWS
            ================================================= */}

            <div className="
              flex
              items-center
              gap-2
            ">

              {/* LEFT */}

              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll series left"
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


              {/* RIGHT */}

              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll series right"
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
              HORIZONTAL SCROLLER
          ================================================= */}

          <div
            ref={scrollRef}
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

            {series.map((item, index) => (

              <Link
                href={item.href}
                key={`${item.title}-${index}`}

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
                  border-white/[0.08]

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

                  aspect-[16/9]

                  overflow-hidden
                ">

                  <Image
                    src={item.image}
                    alt={item.title}
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


                  {/* Dark overlay */}

                  <div className="
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black

                    via-black/20

                    to-transparent
                  " />


                  {/* Green hover glow */}

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
                      EPISODE BADGE
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
                    sm:text-xs

                    font-bold

                    text-black

                    shadow-[0_4px_15px_rgba(29,185,84,0.25)]
                  ">
                    {item.number}
                  </span>


                  {/* =================================================
                      CONTENT
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
                      sm:text-xl

                      font-bold

                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#1DB954]
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-1

                      text-xs
                      sm:text-sm

                      text-[#B3B3B3]
                    ">
                      {item.subtitle}
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* =================================================
              MOBILE SCROLL HINT
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
              Swipe to explore
            </span>

            <ChevronRight size={13} />

          </div>

        </div>

      </section>

    </main>
  );
}