"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: "2+",
    label: "YEARS CODING",
  },
  {
    value: "8+",
    label: "LIVE PRODUCTS SHIPPED",
  },
  {
    value: "2",
    label: "RECOMMENDATION ENGINES BUILT",
  },
  {
    value: "12+",
    label: "AI AGENTS IN PRODUCTION",
  },
];

const interests = [
  "Writing",
  "E-Games",
  "Cooking",
];

const education = [
  {
    number: "01",
    degree: "Matriculation",
    institution: "Sanskar Bharti Global School",
    location: "Phulparas, Bihar",
    period: "03/2016 — 03/2017",
    color: "orange",
    latest: false,
  },
  {
    number: "02",
    degree: "Higher Secondary School",
    institution: "Sanskar Bharti Global School",
    location: "Phulparas, Bihar",
    period: "03/2017 — 03/2019",
    color: "pink",
    latest: false,
  },
  {
    number: "03",
    degree: "Bachelor of Technology",
    institution: "Poornima College of Engineering, RTU",
    location: "Sitapura, Jaipur, Rajasthan",
    period: "09/2021 — 05/2025",
    color: "green",
    latest: true,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#121212] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[500px] overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0">
          <Image
             src="/assets/sujitsk.png"
            alt="About me"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Left gradient */}
          <div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />

          {/* Spotify green glow */}
          <div className="absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full bg-[#1DB954]/10 blur-[160px]" />

          {/* Cyan glow */}
          <div className="absolute left-[35%] top-[10%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[140px]" />
        </div>

        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-12 md:px-10 lg:px-12">
          {/* Episode */}

          <div className="mb-5">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1DB954]">
              EP 1
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              text-[50px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]
              sm:text-[62px]
              md:text-[78px]
              lg:text-[88px]
            "
          >
            About Me
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-[850px]
              text-[17px]
              font-medium
              leading-7
              text-white/70
              md:text-[21px]
              md:leading-8
            "
          >
            Full-Stack Developer specializing in end-to-end development —
            from backend architecture to modern, responsive frontends.
            Currently building AI-powered voice agents and
            recommendation-driven platforms used by real businesses in
            production.
          </p>
        </div>
      </section>

      {/* =====================================================
          ABOUT STORY
      ====================================================== */}

      <section className="mx-auto max-w-[1250px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Profile image */}

          <div className="relative mx-auto w-full max-w-[300px]">
            {/* Glow */}

            <div className="absolute -inset-5 rounded-full bg-[#1DB954]/10 blur-[50px]" />

            {/* Image container */}

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-full
                border
                border-[#1DB954]/30
                bg-[#181818]
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />

              {/* Subtle overlay */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-transparent to-black/20" />
            </div>

            {/* Status */}

            <div
              className="
                absolute
                bottom-3
                right-3
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#1DB954]/20
                bg-[#181818]/95
                px-3
                py-2
                shadow-xl
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DB954] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1DB954]" />
              </span>

              <span className="text-[11px] font-semibold text-white/70">
                Building
              </span>
            </div>
          </div>

          {/* Story */}

          <div>
            <p className="text-[18px] leading-8 text-white/65 md:text-[20px] md:leading-9">
              I started out chasing a Java internship, moved into Flutter,
              and kept following the thread until it led me into full-stack
              architecture — designing the data layer, the API layer, and
              the interface layer of a product as one connected system.
              Today most of my time goes into AI agents: voice systems,
              recommendation engines, and automation pipelines that plug
              straight into how a business actually operates. I like
              products with a real user on the other end, not demos.
            </p>

            <p className="mt-7 text-[18px] leading-8 text-white/65 md:text-[20px] md:leading-9">
              <strong className="font-bold text-white">
                Currently:
              </strong>{" "}
              Full-Stack Developer at{" "}
              <span className="font-semibold text-[#1DB954]">
                Vereda Technologies
              </span>
              , building production web, backend and mobile applications
              with integrated AI recommendation systems, and developing an
              AI-powered calling agent for industrial automation.
            </p>

            <p className="mt-7 text-[18px] leading-8 text-white/65 md:text-[20px] md:leading-9">
              <strong className="font-bold text-white">
                Passion:
              </strong>{" "}
              I'm drawn to systems that connect: a recommendation engine
              that actually improves a match, a voice agent that actually
              books the appointment, a dashboard that actually gets checked
              every morning. Currently exploring{" "}
              <span className="text-[#1DB954]">LangChain</span>,{" "}
              <span className="text-[#1DB954]">MCP</span>, and multi-agent
              orchestration.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERESTS
      ====================================================== */}

      <section className="mx-auto max-w-[1250px] px-6 pb-14 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="
                rounded-full
                border
                border-white/[0.10]
                bg-[#181818]
                px-5
                py-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-white/55
                transition-all
                duration-300
                hover:border-[#1DB954]/40
                hover:bg-[#1DB954]/10
                hover:text-[#1DB954]
              "
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="mx-auto max-w-[1100px] px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                rounded-[9px]
                border
                border-white/[0.08]
                bg-[#181818]
                px-5
                py-7
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#1DB954]/30
                hover:bg-[#1b1b1b]
              "
            >
              <div className="text-[32px] font-black tracking-tight text-[#1DB954]">
                {stat.value}
              </div>

              <div className="mx-auto mt-2 max-w-[170px] text-[12px] font-medium leading-5 tracking-wide text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10 lg:px-12">
        {/* Header */}

        <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/[0.07] pb-6">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight md:text-[32px]">
              Education
            </h2>

            <p className="mt-2 text-[15px] text-white/45">
              The origin story, one chapter at a time.
            </p>
          </div>

          <span className="hidden text-[11px] font-medium uppercase tracking-[0.15em] text-white/35 sm:block">
            3 Episodes
          </span>
        </div>

        {/* Education list */}

        <div>
          {education.map((item, index) => (
            <EducationItem
              key={item.degree}
              item={item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          SMALL CTA
      ====================================================== */}

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-10 lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1DB954]">
              Let's build
            </p>

            <h2 className="mt-2 text-[28px] font-bold">
              Have an idea worth shipping?
            </h2>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-[6px]
              bg-[#1DB954]
              px-6
              py-3
              text-[14px]
              font-bold
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#1ED760]
              hover:shadow-[0_10px_30px_rgba(29,185,84,0.20)]
            "
          >
            Start a Conversation

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   EDUCATION ITEM
========================================================= */

function EducationItem({ item, isLast }) {
  const backgrounds = {
    orange:
      "from-orange-500/20 via-orange-500/5 to-[#181818]",
    pink:
      "from-pink-500/20 via-pink-500/5 to-[#181818]",
    green:
      "from-[#1DB954]/20 via-[#1DB954]/5 to-[#181818]",
  };

  const iconColors = {
    orange: "text-orange-400",
    pink: "text-pink-400",
    green: "text-[#1DB954]",
  };

  return (
    <div
      className={`
        group
        grid
        grid-cols-[42px_1fr]
        gap-4
        border-b
        border-white/[0.06]
        py-5
        md:grid-cols-[55px_170px_1fr]
        md:gap-6
        md:py-6
        ${
          isLast
            ? "border-b-0"
            : ""
        }
      `}
    >
      {/* Number */}

      <div className="pt-2 text-[24px] font-black leading-none text-white/[0.16] md:text-[29px]">
        {item.number}
      </div>

      {/* Icon card */}

      <div
        className={`
          relative
          hidden
          h-[100px]
          overflow-hidden
          rounded-[6px]
          bg-gradient-to-br
          md:flex
          md:items-center
          md:justify-center
          ${backgrounds[item.color]}
        `}
      >
        {/* Latest badge */}

        {item.latest && (
          <span
            className="
              absolute
              left-1
              top-1
              rounded-[3px]
              bg-[#1DB954]
              px-2
              py-1
              text-[8px]
              font-black
              uppercase
              tracking-wide
              text-black
            "
          >
            Latest
          </span>
        )}

        <GraduationCap
          size={34}
          strokeWidth={1.8}
          className={iconColors[item.color]}
        />
      </div>

      {/* Content */}

      <div className="min-w-0">
        {/* Mobile latest */}

        {item.latest && (
          <div className="mb-2 md:hidden">
            <span className="rounded-[3px] bg-[#1DB954] px-2 py-1 text-[8px] font-black uppercase text-black">
              Latest
            </span>
          </div>
        )}

        {/* Degree */}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-[18px] font-bold text-white md:text-[19px]">
            {item.degree}
          </h3>

          <span className="flex items-center gap-1 text-[11px] text-white/35">
            <CalendarDays size={12} />

            <span>&lt; 1 mo</span>
          </span>
        </div>

        {/* Institution */}

        <p className="mt-1 text-[15px] font-medium text-white/65">
          {item.institution}
        </p>

        {/* Location + period */}

        <p className="mt-1 text-[12px] text-white/40">
          {item.location} · {item.period}
        </p>
      </div>
    </div>
  );
}