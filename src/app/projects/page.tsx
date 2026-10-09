"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  title: string;
  description: string;
  image: string;
  label: string;
  href?: string;
};

type DevelopmentProject = {
  title: string;
  description: string;
  technologies: string[];
};

/* =========================================================
   PROJECT DATA
========================================================= */

const aiProjects: Project[] = [
  {
    title: "Vedronix",
    description: "AI Agents. Voice AI. Enterprise Automation.",
    image: "/images/projects/vedronix.jpg",
    label: "AI",
    href: "https://vedronix.com",
  },
];

const matrimonialProjects: Project[] = [
  {
    title: "Wedlock",
    description: "Modern matrimonial matching, built mobile-first.",
    image: "/images/projects/wedlock.jpg",
    label: "APP",
    href: "#",
  },
  {
    title: "Ved Vivah",
    description: "Traditional matchmaking, built for Vedic culture.",
    image: "/images/projects/ved-vivah.jpg",
    label: "APP",
    href: "#",
  },
];

const enterpriseProjects: Project[] = [
  {
    title: "Rex Commodity",
    description: "Live oil & petroleum market intelligence.",
    image: "/images/projects/rex-commodity.jpg",
    label: "IOS",
    href: "#",
  },
];

const saasProjects: Project[] = [
  {
    title: "SimplySynced AI",
    description: "A full SaaS CRM, built for roofing businesses.",
    image: "/images/projects/simplysynced.jpg",
    label: "CRM",
    href: "#",
  },
  {
    title: "Heather Laura",
    description: "A polished, modern business web presence.",
    image: "/images/projects/heather-laura.jpg",
    label: "WEB",
    href: "#",
  },
];

const marketplaceProjects: Project[] = [
  {
    title: "FabricMart",
    description: "B2B marketplace for industrial materials.",
    image: "/images/projects/fabricmart.jpg",
    label: "B2B",
    href: "#",
  },
];

const developmentProjects: DevelopmentProject[] = [
  {
    title: "E-Chat",
    description: "A Stack Overflow-style space for developers.",
    technologies: ["PHP"],
  },
  {
    title: "AI Powered Calling Agent",
    description: "Book appointments and answer questions — over a call.",
    technologies: ["LangChain", "Hugging Face", "Python"],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/sujitsk.png"
            alt="Featured projects"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Left gradient */}
          <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />

          {/* Green glow */}
          <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#1DB954]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-24 pt-32 md:px-10 lg:px-12">
          <div className="mb-5">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1DB954]">
              EP 4
            </span>
          </div>

          <h1
            className="
              max-w-[900px]
              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]
              sm:text-[62px]
              md:text-[78px]
              lg:text-[88px]
            "
          >
            Featured Projects
          </h1>

          <p className="mt-7 text-[17px] font-medium text-white/65 md:text-[21px]">
            Real products, shipped and live.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECT CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 lg:px-12">
        {/* =================================================
            AI & AGENTS
        ================================================== */}

        <ProjectSection
          title="AI & Agents"
          projects={aiProjects}
          carousel
        />

        {/* =================================================
            MATRIMONIAL
        ================================================== */}

        <ProjectSection
          title="Matrimonial Platforms"
          projects={matrimonialProjects}
        />

        {/* =================================================
            ENTERPRISE
        ================================================== */}

        <ProjectSection
          title="Enterprise & Industry"
          projects={enterpriseProjects}
        />

        {/* =================================================
            SAAS
        ================================================== */}

        <ProjectSection
          title="SaaS & CRM"
          projects={saasProjects}
        />

        {/* =================================================
            MARKETPLACE
        ================================================== */}

        <ProjectSection
          title="B2B Marketplace"
          projects={marketplaceProjects}
          carousel
        />

        {/* =================================================
            IN DEVELOPMENT
        ================================================== */}

        <DevelopmentSection />
      </div>
    </main>
  );
}

/* =========================================================
   PROJECT SECTION
========================================================= */

function ProjectSection({
  title,
  projects,
  carousel = false,
}: {
  title: string;
  projects: Project[];
  carousel?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mb-20">
      {/* Section title */}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[29px] font-bold tracking-tight md:text-[34px]">
          {title}
        </h2>

        {carousel && projects.length > 1 && (
          <div className="hidden gap-2 md:flex">
            <CarouselButton
              direction="left"
              onClick={() => scroll("left")}
            />

            <CarouselButton
              direction="right"
              onClick={() => scroll("right")}
            />
          </div>
        )}
      </div>

      {/* Cards */}

      <div
        ref={scrollRef}
        className={`
          ${
            carousel
              ? "flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
              : "grid grid-cols-1 sm:grid-cols-2"
          }
          gap-5
        `}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            carousel={carousel}
          />
        ))}
      </div>

      {/* Mobile arrows */}

      {carousel && projects.length > 1 && (
        <div className="mt-5 flex justify-end gap-2 md:hidden">
          <CarouselButton
            direction="left"
            onClick={() => scroll("left")}
          />

          <CarouselButton
            direction="right"
            onClick={() => scroll("right")}
          />
        </div>
      )}
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  carousel,
}: {
  project: Project;
  index: number;
  carousel: boolean;
}) {
  return (
    <motion.a
      href={project.href || "#"}
      target={
        project.href?.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        project.href?.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className={`
        group
        relative
        block
        shrink-0
        overflow-hidden
        rounded-[8px]
        border
        border-white/[0.08]
        bg-[#171717]
        ${
          carousel
            ? "w-[calc(100vw-48px)] sm:w-[400px] md:w-[460px]"
            : "w-full"
        }
        snap-start
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1DB954]/30
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      `}
    >
      {/* Image */}

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, 460px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image dark overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        {/* Hover overlay */}

        <div className="absolute inset-0 bg-[#1DB954]/0 transition-colors duration-500 group-hover:bg-[#1DB954]/5" />

        {/* Label */}

        <div className="absolute left-3 top-3">
          <span
            className="
              rounded-[5px]
              bg-[#E50914]
              px-3
              py-1.5
              text-[11px]
              font-black
              uppercase
              tracking-wide
              text-white
              shadow-lg
            "
          >
            {project.label}
          </span>
        </div>

        {/* External icon */}

        <div
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-black/50
            text-white/70
            opacity-0
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={16} />
        </div>

        {/* Text */}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-[22px] font-bold text-white md:text-[24px]">
            {project.title}
          </h3>

          <p className="mt-1 text-[15px] font-medium text-white/65 md:text-[16px]">
            {project.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

/* =========================================================
   CAROUSEL BUTTON
========================================================= */

function CarouselButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "left"
          ? "Previous projects"
          : "Next projects"
      }
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/[0.10]
        bg-[#181818]
        text-white/60
        transition-all
        duration-200
        hover:border-[#1DB954]/40
        hover:bg-[#1DB954]/10
        hover:text-[#1DB954]
      "
    >
      {direction === "left" ? (
        <ChevronLeft size={19} />
      ) : (
        <ChevronRight size={19} />
      )}
    </button>
  );
}

/* =========================================================
   DEVELOPMENT SECTION
========================================================= */

function DevelopmentSection() {
  return (
    <section className="border-t border-white/[0.06] pt-16">
      <div className="mb-7">
        <h2 className="text-[29px] font-bold tracking-tight md:text-[34px]">
          In Development
        </h2>
      </div>

      <div className="grid max-w-[1020px] grid-cols-1 gap-5 md:grid-cols-2">
        {developmentProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            className="
              group
              relative
              min-h-[275px]
              overflow-hidden
              rounded-[9px]
              border
              border-dashed
              border-white/[0.18]
              bg-[#171717]
              p-7
              transition-all
              duration-300
              hover:border-[#1DB954]/30
              hover:bg-[#191919]
            "
          >
            {/* Progress glow */}

            <div
              className="
                absolute
                -right-24
                -top-24
                h-[200px]
                w-[200px]
                rounded-full
                bg-[#1DB954]/5
                blur-[70px]
                transition-all
                duration-500
                group-hover:bg-[#1DB954]/10
              "
            />

            {/* Status */}

            <span
              className="
                relative
                z-10
                inline-flex
                rounded-[5px]
                bg-[#5b4500]
                px-3
                py-1
                text-[12px]
                font-black
                uppercase
                tracking-wide
                text-[#FFD21F]
              "
            >
              In Progress
            </span>

            {/* Content */}

            <div className="relative z-10 mt-6">
              <h3 className="text-[27px] font-bold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 max-w-[450px] text-[17px] leading-7 text-white/55">
                {project.description}
              </p>
            </div>

            {/* Technologies */}

            <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-[5px]
                    bg-white/[0.06]
                    px-3
                    py-1.5
                    text-[13px]
                    font-medium
                    text-white/45
                    transition-colors
                    group-hover:bg-[#1DB954]/10
                    group-hover:text-white/60
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}