
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Layers3,
  Star,
} from "lucide-react";
import CardProjects from "@/components/CardProjects";

const technologies = [
  "React",
  "Flutter",
  "Riverpod",
  "Node.js",
  "PostgreSQL",
];

const features = [
  "Full SaaS multi-tenant CRM model",
  "Lead and job pipeline management",
  "Companion mobile app for field teams",
  "Built for scale across multiple business accounts",
];

const relatedProjects = [
  {
    title: "Vedronix",
    category: "AI",
    description: "AI agents, voice AI and enterprise automation.",
    image: "/images/projects/vedronix.jpg",
    href: "/projects/vedronix",
  },
  {
    title: "Wedlock",
    category: "APP",
    description: "Modern matrimonial matching, built mobile-first.",
    image: "/images/projects/wedlock.jpg",
    href: "/projects/wedlock",
  },
  {
    title: "Ved Vivah",
    category: "APP",
    description: "Traditional matchmaking, built for Vedic culture.",
    image: "/images/projects/ved-vivah.jpg",
    href: "/projects/ved-vivah",
  },
  {
    title: "Rex Commodity",
    category: "IOS",
    description: "Live oil and petroleum market intelligence.",
    image: "/images/projects/rex-commodity.jpg",
    href: "/projects/rex-commodity",
  },
];

export default function SimplySyncedProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#F5F5F5]">
      {/* HERO */}
      <section className="relative px-6 pb-16 pt-8 sm:px-10 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-red-600/[0.06] blur-[130px]" />

        <div className="relative mt-10 mx-auto max-w-[1600px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#171717] px-5 py-3 text-sm text-white/70 transition-all hover:border-red-500/50 hover:text-red-500"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-14">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold tracking-[0.15em] text-red-500">
                <span>CRM</span>
                <span>·</span>
                <span>2025</span>
                <span>·</span>
                <span>94% Match</span>
              </p>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[94px]">
                SimplySynced AI
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/65 sm:text-2xl">
                A full SaaS CRM, built for roofing businesses.
              </p>
            </motion.div>

            {/* Browser preview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#171717] p-3 shadow-2xl sm:p-4">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#28C840]" />

                  <div className="ml-3 flex-1 rounded-full bg-[#222222] px-4 py-2 text-center text-xs text-white/50">
                    simplysyncedai.com
                  </div>
                </div>

                <div className="relative aspect-[1.35/0.85] overflow-hidden rounded-xl bg-[#222222]">
                  <Image
                    src="/images/projects/smai.avif"
                    alt="SimplySynced AI roofing CRM dashboard"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 650px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="border-t border-white/[0.07] bg-[#0A0A0A] px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
          {/* Main content */}
          <div>
            <p className="max-w-5xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-[1.8]">
              A roofing-business-focused CRM built with a complete SaaS
              feature set — lead tracking, job pipelines and team workflows
              — available as both a web platform and a companion Flutter app.
            </p>

            {/* Features */}
            <div className="mt-16">
              <h2 className="mb-7 text-2xl font-bold sm:text-3xl">
                Key Features
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="group flex min-h-[90px] items-start gap-4 rounded-xl border border-white/[0.07] bg-[#171717] p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-[#1C1C1C]"
                  >
                    <span className="shrink-0 font-mono text-lg font-bold text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base leading-7 text-white/65 transition-colors group-hover:text-white/90 sm:text-lg">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="mt-16">
              <h2 className="mb-7 text-2xl font-bold sm:text-3xl">
                Architecture Highlights
              </h2>

              <div className="rounded-xl border border-white/[0.07] bg-[#171717] p-6 sm:p-8">
                <p className="text-base leading-8 text-white/65 sm:text-lg">
                  Web CRM and Flutter/Riverpod mobile app sharing one
                  backend API, built with multi-tenant SaaS data isolation
                  from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/[0.08] bg-[#171717] p-6 sm:p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Star size={20} className="text-red-500" />
                  <span className="text-lg text-white/65">
                    94% Match
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <CalendarDays size={20} className="text-red-500" />
                  <span className="text-lg text-white/65">
                    2025
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Layers3 size={20} className="text-red-500" />
                  <span className="text-lg text-white/65">
                    {technologies.length} technologies
                  </span>
                </div>
              </div>

              <h3 className="mb-4 mt-9 text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-[#242424] px-3 py-2 text-sm text-white/70 transition-colors hover:bg-red-500/10 hover:text-red-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="https://simplysyncedai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-red-500 hover:shadow-[0_0_25px_rgba(255,0,24,0.18)]"
              >
                Visit Website
                <ArrowUpRight size={18} />
              </a>
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
