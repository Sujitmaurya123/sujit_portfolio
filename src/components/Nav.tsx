"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "AI Engineer",
    path: "/ai-engineer",
  },
  {
    name: "Freelance",
    path: "/freelance",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center">

      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          hidden
          lg:flex
          items-center

          gap-4
          xl:gap-5
          2xl:gap-7
        "
      >
        {links.map((link, index) => {
          const isActive =
            link.path === "/"
              ? pathname === "/"
              : pathname === link.path.split("#")[0] &&
                pathname !== "/";

          return (
            <Link
              href={link.path}
              key={index}
              className={`
                group
                relative
                whitespace-nowrap

                text-[16px]
                xl:text-[16px]
                2xl:text-[17px]

                font-medium

                transition-all
                duration-300

                ${
                  isActive
                    ? "text-white"
                    : "text-[#B3B3B3] hover:text-white"
                }
              `}
            >
              {link.name}

              {/* Green active / hover line */}
              <span
                className={`
                  absolute
                  -bottom-2
                  left-0

                  h-[2px]

                  rounded-full

                  bg-[#1DB954]

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          );
        })}
      </motion.nav>


      {/* =====================================================
          RIGHT ACTION
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="
          ml-4
          xl:ml-6
          2xl:ml-8

          flex
          items-center
        "
      >

        {/* =================================================
            HIRE ME
        ================================================= */}

        <Link
          href="/contact"
          className="
            hidden
            sm:flex

            items-center
            justify-center

            whitespace-nowrap

            rounded-full

            bg-[#1DB954]

            px-4
            py-2

            lg:px-5
            lg:py-2.5

            xl:px-6
            xl:py-3

            text-xs
            lg:text-sm

            font-bold
            text-black

            shadow-[0_8px_30px_rgba(29,185,84,0.22)]

            transition-all
            duration-300

            hover:bg-[#1ED760]

            hover:scale-[1.04]

            hover:shadow-[0_10px_35px_rgba(29,185,84,0.35)]

            active:scale-[0.97]
          "
        >
          Hire Me
        </Link>

      </motion.div>
    </div>
  );
};

export default Nav;