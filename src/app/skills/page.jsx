"use client";

import Image from "next/image";
import { useMemo, useState } from "react";


/* =========================================================
   SKILLS DATA
========================================================= */

const categories = [
  "All Skills",
  "Frontend",
  "App Development",
  "Backend & Database",
  "AI & Automation",
  "DevOps & Tools",
];

const skills = [
  // -------------------------------------------------------
  // FRONTEND
  // -------------------------------------------------------

  {
    name: "React.js",
    percentage: 90,
    category: "Frontend",
    color: "cyan",
  },
  {
    name: "Next.js",
    percentage: 80,
    category: "Frontend",
    color: "cyan",
  },
  {
    name: "Tailwind CSS",
    percentage: 90,
    category: "Frontend",
    color: "cyan",
  },
  {
    name: "JavaScript (ES6+)",
    percentage: 88,
    category: "Frontend",
    color: "cyan",
  },

  // -------------------------------------------------------
  // APP DEVELOPMENT
  // -------------------------------------------------------

  {
    name: "Flutter",
    percentage: 88,
    category: "App Development",
    color: "cyan",
  },
  {
    name: "GetX",
    percentage: 85,
    category: "App Development",
    color: "cyan",
  },
  {
    name: "Riverpod",
    percentage: 80,
    category: "App Development",
    color: "cyan",
  },
  {
    name: "MVC Architecture",
    percentage: 85,
    category: "App Development",
    color: "cyan",
  },

  // -------------------------------------------------------
  // BACKEND
  // -------------------------------------------------------

  {
    name: "Express.js",
    percentage: 85,
    category: "Backend & Database",
    color: "green",
  },
  {
    name: "FastAPI",
    percentage: 85,
    category: "Backend & Database",
    color: "green",
  },
  {
    name: "Node.js",
    percentage: 88,
    category: "Backend & Database",
    color: "green",
  },
  {
    name: "PostgreSQL",
    percentage: 85,
    category: "Backend & Database",
    color: "green",
  },
  {
    name: "MongoDB",
    percentage: 80,
    category: "Backend & Database",
    color: "green",
  },
  {
    name: "PHP",
    percentage: 70,
    category: "Backend & Database",
    color: "green",
  },

  // -------------------------------------------------------
  // AI
  // -------------------------------------------------------

  {
    name: "LangChain",
    percentage: 82,
    category: "AI & Automation",
    color: "purple",
  },
  {
    name: "Hugging Face",
    percentage: 78,
    category: "AI & Automation",
    color: "purple",
  },
  {
    name: "Recommendation Systems",
    percentage: 85,
    category: "AI & Automation",
    color: "purple",
  },
  {
    name: "Voice Agents",
    percentage: 80,
    category: "AI & Automation",
    color: "purple",
  },
  {
    name: "RAG",
    percentage: 75,
    category: "AI & Automation",
    color: "purple",
  },

  // -------------------------------------------------------
  // DEVOPS
  // -------------------------------------------------------

  {
    name: "Docker",
    percentage: 78,
    category: "DevOps & Tools",
    color: "orange",
  },
  {
    name: "CI/CD Pipelines",
    percentage: 75,
    category: "DevOps & Tools",
    color: "orange",
  },
  {
    name: "Git & GitHub",
    percentage: 90,
    category: "DevOps & Tools",
    color: "orange",
  },
  {
    name: "Postman",
    percentage: 82,
    category: "DevOps & Tools",
    color: "orange",
  },
  {
    name: "Vercel / Netlify",
    percentage: 80,
    category: "DevOps & Tools",
    color: "orange",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All Skills") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#121212] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[430px] overflow-hidden">
        {/* Background image */}

        <div className="absolute inset-0">
          <Image
             src="/assets/sujitsk.png"
            alt="Developer workspace"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}

          <div className="absolute inset-0 bg-black/60" />

          {/* Spotify green glow */}

          <div className="absolute -right-20 -top-40 h-[550px] w-[550px] rounded-full bg-[#1DB954]/10 blur-[150px]" />

          {/* Blue glow */}

          <div className="absolute left-[25%] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[130px]" />

          {/* Bottom fade */}

          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#121212] via-[#121212]/75 to-transparent" />

          {/* Left gradient */}

          <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-black/75 to-transparent" />
        </div>

        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-12 md:px-10 lg:px-12">
          {/* Episode */}

          <div className="mb-5 mt-10">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1DB954]">
              EP 3
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
              sm:text-[18px]
              md:text-[28px]
              lg:text-[28px]
            "
          >
            Skills
          </h1>

          {/* Subtitle */}

          <p className="mt-7 max-w-[750px] text-[17px] font-medium leading-7 text-white/65 md:text-[21px]">
            The toolkit — filter by category, or see everything at once.
          </p>
        </div>
      </section>

      {/* =====================================================
          SKILLS CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 lg:px-12">
        {/* =================================================
            FILTERS
        ================================================== */}

        <div className="relative z-20 -mt-2 flex flex-wrap items-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-[#1DB954] bg-[#1DB954] text-black shadow-[0_8px_30px_rgba(29,185,84,0.16)]"
                      : "border-white/[0.12] bg-transparent text-white/60 hover:border-[#1DB954]/50 hover:bg-[#1DB954]/10 hover:text-[#1DB954]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =================================================
            SKILLS GRID
        ================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              skill={skill}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ skill }) {
  const colors = {
    cyan: {
      main: "#22D3EE",
      soft: "rgba(34,211,238,0.10)",
    },

    green: {
      main: "#1DB954",
      soft: "rgba(29,185,84,0.10)",
    },

    purple: {
      main: "#B66CFF",
      soft: "rgba(182,108,255,0.10)",
    },

    orange: {
      main: "#FF9438",
      soft: "rgba(255,148,56,0.10)",
    },
  };

  const color = colors[skill.color];

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[230px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[12px]
        border
        border-white/[0.08]
        bg-[#181818]
        px-5
        py-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/[0.15]
        hover:bg-[#1b1b1b]
      "
      style={{
        "--skill-color": color.main,
        "--skill-soft": color.soft,
      }}
    >
      {/* Hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          h-40
          w-40
          rounded-full
          opacity-0
          blur-[70px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          backgroundColor: color.main,
        }}
      />

      {/* =================================================
          CIRCLE
      ================================================== */}

      <div className="relative h-[125px] w-[125px]">
        <CircularProgress
          percentage={skill.percentage}
          color={color.main}
        />

        {/* Percentage */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              text-[29px]
              font-black
              tracking-[-0.04em]
            "
            style={{
              color: color.main,
            }}
          >
            {skill.percentage}
          </span>
        </div>
      </div>

      {/* Skill name */}

      <h3 className="relative z-10 mt-5 text-center text-[17px] font-semibold leading-6 text-white">
        {skill.name}
      </h3>
    </article>
  );
}

/* =========================================================
   CIRCULAR PROGRESS
========================================================= */

function CircularProgress({
  percentage,
  color,
}) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <svg
      viewBox="0 0 120 120"
      className="h-full w-full -rotate-90"
    >
      {/* Background circle */}

      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="8"
      />

      {/* Progress */}

      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
}