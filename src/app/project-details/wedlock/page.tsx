
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Layers3,
  Star,
} from "lucide-react";
import CardProjects from "@/components/CardProjects";

const technologies = [
  "Flutter",
  "GetX",
  "Node.js",
  "PostgreSQL",
  "Python",
  "FastAPI",
];

const features = [
  "Python-powered smart matching & recommendation engine",
  "In-app chat and voice calling",
  "Push notifications and premium subscription tiers",
  "React admin panel for platform management",
];



export default function WedlockProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-8 sm:px-10 lg:px-12 lg:pb-28">
        <div className="pointer-events-none absolute left-0 top-20 -z-0 h-80 w-80 rounded-full bg-red-600/[0.06] blur-[140px]" />

        <div className="relative z-10 mt-10 mx-auto max-w-[1600px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#171717] px-5 py-3 text-sm text-white/70 transition hover:border-red-500 hover:text-red-500"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-14">
            {/* Project information */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold tracking-[0.15em] text-red-500">
                <span>APP</span>
                <span>·</span>
                <span>2025</span>
                <span>·</span>
                <span>95% Match</span>
              </div>

              <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
                Wedlock
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/65 sm:text-2xl">
                Modern matrimonial matching, built mobile-first.
              </p>
            </motion.div>

            {/* Browser preview */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#171717] p-3 shadow-2xl sm:p-4">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />

                  <div className="ml-3 flex-1 rounded-full bg-[#242424] px-4 py-2 text-center text-xs text-white/50">
                    wedlock.com.au
                  </div>
                </div>

                <div className="relative aspect-[1.35/0.85] overflow-hidden rounded-xl bg-[#202020]">
                  <Image
                    src="/images/projects/wedlockbanner.png"
                    alt="Wedlock matrimonial platform website preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 650px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section
        id="project-overview"
        className="border-t border-white/[0.07] bg-[#0a0a0a] px-6 py-16 sm:px-10 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[minmax(0,1fr)_450px] lg:gap-16">
          {/* Main content */}
          <div>
            <p className="max-w-5xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-[1.8]">
              A modern matrimonial application with a Python-based
              recommendation engine for smart matching, in-app chat,
              voice calling, notifications and premium subscriptions.
              I built the recommendation system, backend architecture,
              and the admin panel used to manage the platform.
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
                    className="group flex min-h-[120px] gap-4 rounded-xl border border-white/[0.07] bg-[#171717] p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-[#1c1c1c]"
                  >
                    <span className="shrink-0 font-mono text-lg font-bold text-red-500">
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
              <h2 className="mb-7 text-2xl font-bold sm:text-3xl">
                Architecture Highlights
              </h2>

              <div className="rounded-xl border border-white/[0.07] bg-[#171717] p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <Layers3 size={22} />
                  </div>

                  <h3 className="font-semibold text-white/90">
                    System Architecture
                  </h3>
                </div>

                <p className="text-base leading-8 text-white/65 sm:text-lg">
                  Flutter and GetX power the mobile client, backed by
                  a Node.js and PostgreSQL API. A separate Python/FastAPI
                  recommendation service scores profile compatibility
                  independently of the main API, allowing matching logic
                  to evolve without coupling it to core application flows.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Mobile Client",
                    "REST API",
                    "Recommendation Engine",
                    "Database",
                    "Admin Dashboard",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.06] bg-[#222222] px-3 py-2 text-xs font-medium text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/[0.08] bg-[#171717] p-6 sm:p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Star size={20} className="text-red-500" />
                  <span className="text-lg text-white/65">
                    95% Match
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

              <div className="mt-9 flex flex-col gap-3">
                <a
                  href="https://wedlock.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-red-500 hover:shadow-[0_0_25px_rgba(255,0,24,0.18)]"
                >
                  Website
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-red-500"
                >
                  Get it on Google Play
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="/admin"
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-red-500"
                >
                  Admin Panel
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-white/35">
                Product, mobile application and platform management.
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
