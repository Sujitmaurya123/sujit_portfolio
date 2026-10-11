"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

import {
  ArrowRight,
  Bot,
  Box,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Layers3,
  MessageCircle,
  RefreshCw,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface Stat {
  value: string;
  label: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface SectionTitleProps {
  children: ReactNode;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

/* =========================================================
   DATA
========================================================= */

const stats: Stat[] = [
  {
    value: "8+",
    label: "PROJECTS DELIVERED",
  },
  {
    value: "< 24H",
    label: "AVG. RESPONSE TIME",
  },
  {
    value: "100%",
    label: "DIRECT COMMUNICATION",
  },
  {
    value: "INCLUDED",
    label: "POST-LAUNCH SUPPORT",
  },
];

const services: Service[] = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web apps — frontend, backend, database and deployment, built as one connected system.",
    points: [
      "React/Next.js frontend",
      "Node.js or FastAPI backend",
      "PostgreSQL/MongoDB data layer",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Voice agents, chat agents and automation workflows powered by LLMs, grounded on your own knowledge base.",
    points: [
      "Voice & telephony integration",
      "RAG on your documents/data",
      "LangChain / OpenAI orchestration",
    ],
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    description:
      "Cross-platform mobile apps with clean, scalable state management from day one.",
    points: [
      "GetX or Riverpod architecture",
      "iOS + Android from one codebase",
      "Push notifications & auth",
    ],
  },
  {
    icon: Layers3,
    title: "React Websites",
    description:
      "Fast, modern, responsive websites and dashboards that don't feel like templates.",
    points: [
      "Custom design, no theme kits",
      "SEO-friendly page structure",
      "Framer Motion interactions",
    ],
  },
  {
    icon: Server,
    title: "Node APIs",
    description:
      "REST APIs and backend services built for scale, with clear docs from the start.",
    points: [
      "Auth, rate limiting, validation",
      "Clean, versioned API design",
      "Ready for horizontal scale",
    ],
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description:
      "Database design and system architecture for new products or ones outgrowing their current setup.",
    points: [
      "Schema design & migrations",
      "Multi-tenant data isolation",
      "Performance & indexing review",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Dockerized deployments, CI/CD pipelines, and production infrastructure set up right the first time.",
    points: [
      "Docker & docker-compose",
      "GitHub Actions CI/CD",
      "Nginx, SSL, zero-downtime deploys",
    ],
  },
  {
    icon: Box,
    title: "SaaS Products",
    description:
      "Multi-tenant SaaS platforms built from idea to production, with billing and admin tooling included.",
    points: [
      "Multi-tenant from day one",
      "Subscription & billing logic",
      "Admin dashboard included",
    ],
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Workflow automation that removes the repetitive manual work eating into your team's day.",
    points: [
      "Custom scripts & integrations",
      "Scheduled jobs & webhooks",
      "Third-party API connections",
    ],
  },
];

const reasons: Reason[] = [
  {
    icon: MessageCircle,
    title: "You talk to me, not a sales team",
    description:
      "No account managers, no hand-offs — the person who scopes the project is the one who builds it.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Production-grade code",
    description:
      "Not proof-of-concept quality. What ships is what I'd run in a real business, because I have.",
  },
  {
    icon: RefreshCw,
    title: "Regular check-ins, not radio silence",
    description:
      "You'll see progress in short sprints, not a single reveal at the very end.",
  },
  {
    icon: Sparkles,
    title: "Support after launch",
    description:
      "Shipping isn't the finish line — bug fixes and follow-up questions are part of the deal.",
  },
];

const process: ProcessStep[] = [
  {
    number: "1",
    title: "Discovery Call",
    description: "We talk through the problem, scope and timeline.",
  },
  {
    number: "2",
    title: "Proposal & Quote",
    description: "A clear scope, timeline and price — no surprises.",
  },
  {
    number: "3",
    title: "Build",
    description: "Regular check-ins while I build in focused sprints.",
  },
  {
    number: "4",
    title: "Test & Refine",
    description: "We review together and tighten up before launch.",
  },
  {
    number: "5",
    title: "Ship & Support",
    description: "Launch, handover, and support after go-live.",
  },
];

const faqs: Faq[] = [
  {
    question: "How do we start?",
    answer:
      "A short discovery call to understand what you're building and whether it's a fit — no cost, no obligation. From there I send a written proposal with scope and timeline.",
  },
  {
    question: "Do you work with fixed budgets?",
    answer:
      "Yes. Once we understand the scope, I can work around a defined budget and prioritize the features that matter most for launch.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Yes. I can audit an existing codebase, understand the current architecture and take over development, improvements, bug fixes or new features.",
  },
  {
    question: "What about timezone/communication?",
    answer:
      "I work remotely and keep communication simple. We can use WhatsApp, email, Slack or scheduled calls depending on what works best for the project.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FreelancePage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[500px] overflow-hidden">
        {/* Background image */}

        <div className="absolute inset-0">
          <Image
            src="/images/freelance.jpg"
            alt="Freelance workspace"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

          {/* Left dark gradient */}
          <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] items-end px-6 pb-16 md:px-10 lg:px-12">
          <div className="max-w-[900px]">
            {/* Episode */}
            <div className="mb-5">
              <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#1DB954]">
                EP 5
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[28px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.045em]
                text-white
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                sm:text-[20px]
                md:text-[28px]
                lg:text-[28px]
              "
            >
              Available For Freelance
            </h1>

            <p className="mt-7 max-w-[850px] text-[17px] font-medium leading-7 text-white/70 md:text-[21px] md:leading-8">
              I take on select freelance and contract work — from a single
              feature to a full product build.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 lg:px-12">
        {/* =================================================
            STATS
        ================================================== */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                rounded-[10px]
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
              <div className="text-[32px] font-black tracking-tight text-[#1DB954] md:text-[36px]">
                {stat.value}
              </div>

              <div className="mt-2 text-[14px] font-medium tracking-wide text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            SERVICES
        ================================================== */}

        <section className="mt-20">
          <SectionTitle>What I Can Build For You</SectionTitle>

          <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <ServiceCard
                  key={service.title}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  points={service.points}
                />
              );
            })}
          </div>
        </section>

        {/* =================================================
            WHY WORK WITH ME
        ================================================== */}

        <section className="mt-24">
          <SectionTitle>Why Work With Me</SectionTitle>

          <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="
                    group
                    flex
                    gap-6
                    rounded-[10px]
                    border
                    border-white/[0.08]
                    bg-[#181818]
                    p-7
                    transition-all
                    duration-300
                    hover:border-[#1DB954]/30
                    hover:bg-[#1a1a1a]
                  "
                >
                  <div className="shrink-0">
                    <Icon
                      size={32}
                      strokeWidth={1.8}
                      className="text-[#1DB954]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[21px] font-bold tracking-tight text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-[16px] leading-7 text-white/60">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =================================================
            PROCESS
        ================================================== */}

        <section className="mt-24">
          <SectionTitle>How We&apos;ll Work Together</SectionTitle>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  min-h-[240px]
                  rounded-[10px]
                  border
                  border-white/[0.08]
                  bg-[#181818]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1DB954]/30
                "
              >
                <div className="text-[40px] font-black leading-none text-[#1DB954]">
                  {item.number}
                </div>

                <h3 className="mt-7 text-[21px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-[16px] leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            FAQ
        ================================================== */}

        <section className="mt-24">
          <SectionTitle>Frequently Asked</SectionTitle>

          <div className="mt-9 max-w-[1100px] space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-[10px]
                    border
                    border-white/[0.08]
                    bg-[#181818]
                    transition-all
                    duration-300
                  "
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-7
                      py-6
                      text-left
                      transition
                      hover:bg-white/[0.02]
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="text-[19px] font-semibold text-white md:text-[21px]">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        text-[#1DB954]
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      <span className="text-[28px] font-light leading-none">
                        +
                      </span>
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.06] px-7 pb-7 pt-5">
                        <p className="max-w-[950px] text-[16px] leading-7 text-white/60">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================== */}

        <section className="mt-24">
          <div
            className="
              relative
              overflow-hidden
              rounded-[14px]
              border
              border-white/[0.12]
              bg-[#181818]
              px-6
              py-20
              text-center
              md:px-10
              md:py-24
            "
          >
            {/* Ambient red glow */}

            <div className="pointer-events-none absolute -right-24 -top-32 h-[400px] w-[400px] rounded-full bg-[#1DB954]/10 blur-[130px]" />

            <div className="pointer-events-none absolute -bottom-40 -left-20 h-[350px] w-[350px] rounded-full bg-[#1DB954]/5 blur-[120px]" />

            <div className="relative z-10">
              <h2
                className="
                  text-[38px]
                  font-black
                  uppercase
                  leading-none
                  tracking-[-0.035em]
                  text-white
                  sm:text-[48px]
                  md:text-[58px]
                "
              >
                Ready To Build Something?
              </h2>

              <p className="mx-auto mt-7 max-w-[800px] text-[18px] leading-8 text-white/60 md:text-[25px]">
                Tell me what you&apos;re working on — I reply within 24 hours.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  bg-[#1DB954]
                  px-10
                  py-4
                  text-[18px]
                  font-bold
                  text-white
                  shadow-[0_10px_35px_rgba(239,16,24,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff1820]
                  hover:shadow-[0_15px_45px_rgba(239,16,24,0.28)]
                "
              >
                Start a Conversation

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      className="
        text-[28px]
        font-bold
        tracking-[-0.025em]
        text-white
        md:text-[32px]
        lg:text-[34px]
      "
    >
      {children}
    </h2>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        relative
        min-h-[390px]
        overflow-hidden
        rounded-[10px]
        border
        border-white/[0.08]
        bg-[#181818]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1DB954]/30
        hover:bg-[#1a1a1a]
      "
    >
      {/* Top accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-[#1DB954]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}
      <div className="mb-7">
        <Icon
          size={34}
          strokeWidth={1.7}
          className="text-[#1DB954]"
        />
      </div>

      {/* Title */}
      <h3 className="text-[25px] font-bold tracking-tight text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[17px] leading-7 text-white/60">
        {description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-white/[0.08]" />

      {/* Points */}
      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-[15px] leading-6 text-white/60"
          >
            <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[4px] border-l-[5px] border-y-transparent border-l-[#1DB954]" />

            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}