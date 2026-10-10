
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Layers3,
  Star,
} from "lucide-react";
import CardProjects from "@/components/CardProjects";

type RelatedProject = {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
};

const technologies = [
  "Python",
  "FastAPI",
  "SarvamAI",
  "OpenAI",
  "Next.js",
  "Docker",
];

const features = [
  "Multi-agent voice systems with real-time speech pipelines",
  "WhatsApp & call automation for enterprise workflows",
  "Knowledge-base grounded LLM responses (RAG)",
  "Admin dashboards for monitoring live agent conversations",
];



export default function VedronixProjectPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -460 : 460,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* PROJECT HERO */}
      <section className="relative mx-auto max-w-[1700px] px-6 pb-16 pt-8 sm:px-10 lg:px-14 lg:pb-24 lg:pt-10">
        {/* Spotify-inspired background glow */}
        <div className="pointer-events-none absolute left-0 top-20 -z-0 h-96 w-96 rounded-full bg-[#1DB954]/[0.06] blur-[150px]" />

        <div className="relative z-10 mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#181818] px-5 py-3 text-sm font-medium text-white/70 transition-all hover:border-[#1DB954]/50 hover:bg-[#1DB954]/10 hover:text-[#1DB954]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-20">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em]">
                <span className="text-[#1DB954]">AI</span>
                <span className="text-white/20">·</span>
                <span className="text-white/60">2025</span>
                <span className="text-white/20">·</span>
                <span className="text-white/60">98% Match</span>
              </div>

              <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
                Vedronix
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">
                AI Agents. Voice AI. Enterprise Automation.
              </p>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/40">
                Building intelligent voice experiences that connect
                conversational AI, real-time telephony, knowledge
                retrieval, and business automation into one system.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
               

                <a
                  href="https://vedronix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#1DB954]/60 hover:text-[#1DB954]"
                >
                  Visit Website
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right browser preview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#171717] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-4">
                {/* Browser toolbar */}
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />

                  <div className="ml-3 flex-1 rounded-full bg-[#242424] px-4 py-2 text-center text-xs font-medium text-white/40">
                    vedronix.com
                  </div>
                </div>

                {/* Replace with your actual website screenshot */}
                <div className="relative aspect-[1.35/1] overflow-hidden rounded-xl bg-[#202020]">
                  <Image
                    src="/images/projects/vedronixImage1.png"
                    alt="Vedronix website preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 650px"
                    className="object-cover object-top"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Browser indicator */}
                <div className="flex items-center justify-center gap-2 py-4">
                  <span className="h-1.5 w-8 rounded-full bg-[#1DB954]" />
                  <span className="h-1.5 w-2 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section
        id="project-overview"
        className="border-t border-white/[0.07] bg-[#0b0b0b] px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1580px] gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          {/* Main column */}
          <div>
            <p className="max-w-5xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-[1.8]">
              An AI company building voice agents, WhatsApp
              automation and LLM-powered products for enterprises.
              I develop and ship agent infrastructure that powers
              real conversations in production — from telephony
              integration to knowledge-base grounded responses.
            </p>

            {/* Features */}
            <div className="mt-16">
              <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Key Features
                </h2>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                  What it does
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="group flex min-h-[120px] gap-4 rounded-xl border border-white/[0.07] bg-[#171717] p-5 transition-all hover:border-[#1DB954]/30 hover:bg-[#1b1b1b] sm:p-6"
                  >
                    <span className="pt-0.5 font-mono text-lg font-bold text-[#1DB954]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base leading-7 text-white/65 transition-colors group-hover:text-white/90">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
                Architecture Highlights
              </h2>

              <div className="rounded-xl border border-white/[0.07] bg-[#171717] p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1DB954]/10 text-[#1DB954]">
                    <Layers3 size={21} />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                    System Architecture
                  </span>
                </div>

                <p className="text-base leading-8 text-white/60 sm:text-lg">
                  Agent orchestration handles telephony and
                  real-time speech pipelines. An LLM reasoning
                  layer uses client-specific knowledge for
                  grounded responses, while dashboards provide
                  visibility into conversations, analytics, and
                  human handoff workflows.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Speech Pipeline", "LLM", "RAG", "Telephony", "Analytics"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/50"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/[0.08] bg-[#171717] p-6 sm:p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Star size={19} className="text-[#1DB954]" />
                  <span className="text-base font-medium text-white/65">
                    98% Match
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={19} className="text-[#1DB954]" />
                  <span className="text-base font-medium text-white/65">
                    2025
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Layers3 size={19} className="text-[#1DB954]" />
                  <span className="text-base font-medium text-white/65">
                    {technologies.length} technologies
                  </span>
                </div>
              </div>

              <div className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                Tech Stack
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-[#242424] px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-[#1DB954]/15 hover:text-[#1DB954]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="https://vedronix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1DB954] px-5 py-4 text-sm font-bold text-black transition-all hover:bg-[#1ed760] hover:shadow-[0_0_30px_rgba(29,185,84,0.15)]"
              >
                Visit Website
                <ArrowUpRight size={18} />
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-white/30">
                Explore the live product and its capabilities.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* MORE LIKE THIS */}
      <section className="border-t border-white/[0.07] px-6 py-10 sm:px-8 lg:px-8 lg:py-10">
         <CardProjects/>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px] rounded-3xl border border-white/[0.08] bg-[#141414] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1DB954]">
            Have an idea?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s build something that makes an impact.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">
            From full-stack applications to AI agents, let&apos;s turn
            your next idea into a production-ready product.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-7 py-4 text-sm font-bold text-black transition-all hover:scale-[1.03] hover:bg-[#1ed760]"
          >
            Let&apos;s Talk
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
