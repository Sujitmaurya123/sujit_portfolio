"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  current: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
}

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Vereda Technologies",
    location: "Patna, Bihar",

    startDate: "2025-05-01",
    endDate: null,

    description:
      "Delivering multiple full-stack solutions — scalable web, backend and mobile applications with integrated AI-based recommendation systems. Currently building an AI-powered calling agent for industrial automation and process optimization.",

    technologies: [
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "AI Agents",
      "Flutter",
    ],

    current: true,
  },

  {
    role: "Full Stack Developer Intern",
    company: "P45",
    location: "Kanpur",

    startDate: "2024-10-01",
    endDate: "2025-04-30",

    description:
      "Developed a robust and scalable full-stack web application for the EdTech startup Projectile45, delivering seamless user experiences and efficient functionality.",

    technologies: ["NextJs", "Full Stack Developer"],

    current: false,
  },
];

/* =========================================================
   EMPTY SUBSCRIBE
   — We don't need reactivity; the duration is computed once
     per render from the current date.
========================================================= */

const emptySubscribe = () => () => {};

/* =========================================================
   PAGE
========================================================= */

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#121212] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[450px] overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0">
          <Image
            src="/images/exp.jpg"
            alt="Developer workspace"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Left gradient */}
          <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-black/75 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />

          {/* Spotify green glow */}
          <div className="absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full bg-[#1DB954]/10 blur-[160px]" />

          {/* Cyan glow */}
          <div className="absolute left-[25%] top-[30%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[140px]" />
        </div>

        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-12 md:px-10 lg:px-12">
          {/* Episode */}

          <div className="mb-5 mt-10">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1DB954]">
              EP 2
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              text-[17px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]
              sm:text-[17px]
              md:text-[28px]
              lg:text-[28px]
            "
          >
            Experience
          </h1>

          {/* Description */}

          <p className="mt-7 max-w-[850px] text-[17px] font-medium leading-7 text-white/65 md:text-[21px]">
            1 yr 6 mos in the industry — counted live against today&apos;s date.
          </p>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 lg:px-12">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({ experience }: ExperienceCardProps) {
  /*
    useSyncExternalStore lets us read the "current date"
    safely without triggering hydration mismatches.

    - Server snapshot  → "" (no unstable value during SSR)
    - Client snapshot  → real duration, computed from new Date()

    React renders "" on the server and during the initial
    client pass, then swaps to the real value after hydration.
  */

  const duration = useSyncExternalStore(
    emptySubscribe,
    () => calculateDuration(experience.startDate, experience.endDate),
    () => ""
  );

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[12px]
        border
        bg-[#181818]
        p-7
        md:p-10
        transition-all
        duration-300
        hover:bg-[#1b1b1b]
        ${
          experience.current
            ? "border-[#1DB954]/20 hover:border-[#1DB954]/40"
            : "border-white/[0.08] hover:border-white/[0.14]"
        }
      `}
    >
      {/* Top green line for current role */}

      {experience.current && (
        <div
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-[#1DB954]
            via-[#1DB954]/50
            to-transparent
          "
        />
      )}

      {/* Hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#1DB954]/5
          opacity-0
          blur-[100px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =================================================
          TOP
      ================================================== */}

      <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}

        <div className="min-w-0">
          {/* Role */}

          <h2 className="text-[26px] font-bold tracking-tight text-white md:text-[30px]">
            {experience.role}
          </h2>

          {/* Company */}

          <div className="mt-2 text-[19px] font-semibold text-[#1DB954] md:text-[21px]">
            {experience.company}
          </div>

          {/* Location */}

          <div className="mt-1 flex items-center gap-2 text-[15px] text-white/45">
            <MapPin size={15} />

            {experience.location}
          </div>
        </div>

        {/* Right */}

        <div className="shrink-0 lg:text-right">
          <div className="flex items-center gap-2 text-[16px] font-medium text-white/60 lg:justify-end">
            <CalendarDays size={16} />

            <span>
              {formatDate(experience.startDate)} —{" "}
              {experience.endDate
                ? formatDate(experience.endDate)
                : "Present"}
            </span>
          </div>

          <div
            className={`
              mt-2
              text-[14px]
              font-bold
              uppercase
              tracking-wide
              ${
                experience.current
                  ? "text-[#1DB954]"
                  : "text-white/45"
              }
            `}
          >
            {duration}

            {experience.current && duration && " · ONGOING"}
          </div>
        </div>
      </div>

      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p className="relative z-10 mt-7 max-w-[1200px] text-[17px] leading-8 text-white/60 md:text-[19px]">
        {experience.description}
      </p>

      {/* =================================================
          TECHNOLOGIES
      ================================================== */}

      <div className="relative z-10 mt-7 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-[5px]
              border
              border-white/[0.05]
              bg-white/[0.05]
              px-3
              py-1.5
              text-[13px]
              font-medium
              text-white/55
              transition-all
              duration-200
              group-hover:border-[#1DB954]/10
              group-hover:bg-[#1DB954]/5
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(dateString: string | null): string {
  if (!dateString) {
    return "Present";
  }

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/* =========================================================
   DURATION
========================================================= */

function calculateDuration(
  startDate: string,
  endDate: string | null
): string {
  const start = new Date(startDate);

  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  /*
    Include the starting month for historical
    month-based portfolio display.
  */

  if (months < 1) {
    return "< 1 MO";
  }

  const years = Math.floor(months / 12);

  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${
      remainingMonths === 1 ? "MO" : "MOS"
    }`;
  }

  if (remainingMonths === 0) {
    return `${years} ${
      years === 1 ? "YR" : "YRS"
    }`;
  }

  return `${years} ${
    years === 1 ? "YR" : "YRS"
  } ${remainingMonths} ${
    remainingMonths === 1 ? "MO" : "MOS"
  }`;
}