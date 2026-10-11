"use client";




/* =========================================================
   TOP SKILLS
========================================================= */

const skills = [
  {
    rank: "#1",
    name: "React.js",
    icon: "⚛",
  },
  {
    rank: "#2",
    name: "Flutter",
    icon: "◆",
  },
  {
    rank: "#3",
    name: "Node.js",
    icon: "⬡",
  },
  {
    rank: "#4",
    name: "PostgreSQL",
    icon: "◉",
  },
  {
    rank: "#5",
    name: "Generative AI",
    icon: "✦",
  },
];



/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SkillSeries() {
  return (
    <main className="w-full overflow-hidden bg-[#050505] text-white">

     


      {/* =====================================================
          SECTION 2 — TOP 5 SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="
          relative
          px-4
          py-10

          sm:px-6
          sm:py-14

          lg:px-10
          lg:py-16

          xl:px-12
        "
      >
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="
              text-2xl
              font-bold
              tracking-tight

              sm:text-3xl

              lg:text-[34px]
            ">
              Top 5 Skills
            </h2>

            <span className="
              hidden
              text-sm
              text-[#6A6A6A]
              sm:block
            ">
              My core toolkit
            </span>
          </div>


          {/* Skills */}

          <div className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3

            lg:grid-cols-5
            lg:gap-4
          ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  group
                  relative

                  min-h-[155px]

                  rounded-lg

                  border
                  border-white/[0.06]

                  bg-[#121212]

                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#1DB954]/30
                  hover:bg-[#151515]

                  sm:min-h-[170px]
                  sm:p-5

                  lg:min-h-[160px]
                "
              >

                {/* Rank */}

                <span className="
                  absolute
                  left-3
                  top-3

                  rounded
                  bg-[#050505]

                  px-2
                  py-1

                  text-[10px]
                  font-bold
                  text-white
                ">
                  {skill.rank}
                </span>


                {/* Icon */}

                <div className="
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-center
                ">
                  <div className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#0A0A0A]

                    text-4xl

                    text-[#1DB954]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  ">
                    {skill.icon}
                  </div>

                  <h3 className="
                    text-center
                    text-sm
                    font-semibold
                    sm:text-base
                  ">
                    {skill.name}
                  </h3>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}