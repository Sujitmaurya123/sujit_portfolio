"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const skills = [
  "Multi-Agent Systems",
  "Voice Agents",
  "OpenAI",
  "LangChain",
  "MCP",
  "FastAPI",
  "Python",
  "RAG",
  "Automation",
  "AI Workflows",
  "Vector Databases",
  "LLM Applications",
];

const workflow = [
  {
    number: "01",
    title: "Ingest",
    description:
      "Calls, chats & forms come in through telephony or WhatsApp.",
  },
  {
    number: "02",
    title: "Reason",
    description:
      "An LLM core grounded on a knowledge base decides what to do.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "Book, answer, notify or hand off to a human — automatically.",
  },
  {
    number: "04",
    title: "Learn",
    description:
      "Every conversation feeds back into the knowledge base.",
  },
];

export default function AIAgentDeveloperPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[420px]  overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/sujitsk.png"
            alt="AI Agent Developer background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Spotify-style dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/65 via-[#121212]/80 to-[#121212]" />

          {/* Green ambient glow */}
          <div className="absolute -top-32 right-[15%] h-[420px] w-[420px] rounded-full bg-[#1DB954]/10 blur-[140px]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto mt-10 flex min-h-[420px] max-w-[1500px] items-start px-6 pb-24 pt-10 md:px-10 lg:px-14">
          <div className="max-w-[650px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-7 bg-[#1DB954]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1DB954]">
                Special Feature
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[620px] text-[28px] font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-[28px] md:text-[28px]">
              AI Agent
              <br />
              <span className="text-white">Developer</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[580px] text-[14px] font-medium leading-6 text-white/60 md:text-[15px]">
              Beyond full-stack development, I design and ship AI agents that
              do real work — answering calls, qualifying leads, running
              recommendation engines, and automating workflows from end to
              end.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="relative bg-[#121212]">
        <div className="mx-auto max-w-[1150px] px-6 pb-20 md:px-10 lg:px-14">
          {/* =================================================
              SKILLS / TAGS
          ================================================== */}
          <div className="-mt-2 flex  flex-wrap gap-2 md:ml-auto">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="
                  group
                  cursor-default
                  rounded-full
                  border border-[#1DB954]/25
                  bg-[#181818]
                  px-3 py-1.5
                  text-[19px]
                  font-medium
                  text-white/70
                  shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                  transition-all duration-300
                  hover:border-[#1DB954]/70
                  hover:bg-[#1DB954]/10
                  hover:text-[#1DB954]
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* =================================================
              WORKFLOW
          ================================================== */}
          <div className="mt-10 md:ml-auto ">
            <div className="mb-5 flex items-center gap-3">
              <h2 className="text-[14px] font-bold tracking-tight text-white">
                How an Agent Works, End to End
              </h2>

              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    min-h-[145px]
                    overflow-hidden
                    rounded-[7px]
                    border
                    border-white/[0.06]
                    bg-[#181818]
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#1DB954]/30
                    hover:bg-[#1b1b1b]
                  "
                >
                  {/* Green hover line */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-[#1DB954]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                  <div className="text-[19px] font-bold text-[#1DB954]">
                    {item.number}
                  </div>

                  <h3 className="mt-2 text-[16px] font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-[1.55] text-white/55">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              FEATURED COMPANY
          ================================================== */}
          <div className="mt-10 md:ml-auto ">
            <div
              className="
                group
                overflow-hidden
                rounded-[8px]
                border
                border-[#1DB954]/20
                bg-[#181818]
                shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:border-[#1DB954]/40
              "
            >
              {/* Image */}
              <div className="relative h-[150px] overflow-hidden">
                <Image
                  src="/images/vedronix-ai-agent.jpg"
                  alt="Vedronix AI Agent"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/10" />

                {/* Green glow */}
                <div className="absolute bottom-0 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-[#1DB954]/10 blur-3xl" />
              </div>

              {/* Card body */}
              <div className="relative p-5">
                {/* Top line */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1DB954]">
                      Featured Company
                    </div>

                    <h3 className="text-[20px] font-bold tracking-tight text-white">
                      Vedronix
                    </h3>
                  </div>

                  {/* External link */}
                  <Link
                    href="https://vedronix.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vedronix"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/50
                      transition
                      hover:border-[#1DB954]/50
                      hover:bg-[#1DB954]/10
                      hover:text-[#1DB954]
                    "
                  >
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </Link>
                </div>

                <p className="mt-2 max-w-[580px] text-[12px] leading-5 text-white/60 md:text-[13px]">
                  An AI company building enterprise-grade voice agents,
                  WhatsApp automation and LLM-powered products — where I
                  develop and ship agent infrastructure in production.
                </p>

                {/* Bottom CTA */}
                <Link
                  href="https://vedronix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-[#1DB954]
                    transition
                    hover:gap-3
                  "
                >
                  Explore Vedronix
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/[0.05]" />
    </main>
  );
}