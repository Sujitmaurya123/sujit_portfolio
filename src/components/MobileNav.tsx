"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experience",
    path: "/#experience",
  },
  {
    name: "Skills",
    path: "/#skills",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "AI Engineer",
    path: "/#ai-engineer",
  },
  {
    name: "Freelance",
    path: "/#freelance",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>

      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      <SheetTrigger
        aria-label="Open navigation menu"
        className="
          flex
          h-10
          w-10
          sm:h-11
          sm:w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#121212]/80
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#1DB954]/40
          hover:bg-[#1DB954]/10
          hover:text-[#1DB954]
          active:scale-95
        "
      >
        <CiMenuFries
          className="
            text-[24px]
            sm:text-[27px]
          "
        />
      </SheetTrigger>


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <SheetContent
        side="right"
        className="
          w-[88%]
          max-w-[400px]
          border-l
          border-white/10
          bg-[#080808]
          p-0
          text-white
          shadow-[-20px_0_60px_rgba(0,0,0,0.45)]
        "
      >

        {/* Green ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[-100px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#1DB954]/[0.08]
            blur-[100px]
          "
        />


        {/* =================================================
            DRAWER CONTENT
        ================================================= */}

        <div
          className="
            relative
            flex
            h-full
            flex-col
            overflow-y-auto
            px-5
            py-6
            sm:px-7
            sm:py-8
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <div
            className="
              mt-8
              mb-8
              sm:mt-10
              sm:mb-10
            "
          >
            <SheetClose asChild>
              <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                "
              >

                {/* Green logo */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1DB954]
                    transition-all
                    duration-300
                    group-hover:bg-[#1ED760]
                    group-hover:shadow-[0_0_25px_rgba(29,185,84,0.3)]
                  "
                >
                  <div className="relative h-5 w-6">

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                        w-6
                        rounded-full
                        bg-black
                        rotate-[8deg]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-[2px]
                        top-[7px]
                        h-[2px]
                        w-5
                        rounded-full
                        bg-black
                        rotate-[8deg]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-[5px]
                        top-[14px]
                        h-[2px]
                        w-3.5
                        rounded-full
                        bg-black
                        rotate-[8deg]
                      "
                    />

                  </div>
                </div>


                {/* Name */}
                <h1
                  className="
                    text-xl
                    font-black
                    tracking-wide
                    text-white
                    sm:text-2xl
                  "
                >
                  SUJIT
                  <span className="text-[#1DB954]">
                    .
                  </span>
                </h1>

              </Link>
            </SheetClose>


            {/* Divider */}
            <div
              className="
                mt-7
                h-px
                w-full
                bg-white/10
              "
            />
          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav
            className="
              flex
              flex-col
              gap-1
            "
          >
            {links.map((link, index) => {

              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname === link.path.split("#")[0];

              return (
                <SheetClose
                  asChild
                  key={index}
                >
                  <Link
                    href={link.path}
                    className={`
                      group
                      flex
                      min-h-[48px]
                      items-center
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      
                      transition-all
                      duration-300

                      sm:min-h-[52px]
                      sm:text-lg

                      ${
                        isActive
                          ? "bg-[#1DB954]/10 text-[#1DB954]"
                          : "text-[#B3B3B3] hover:bg-white/[0.05] hover:text-white"
                      }
                    `}
                  >

                    {/* Active indicator */}
                    <span
                      className={`
                        mr-3
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-[#1DB954] shadow-[0_0_8px_rgba(29,185,84,0.7)]"
                            : "bg-transparent group-hover:bg-[#1DB954]"
                        }
                      `}
                    />

                    {link.name}

                  </Link>
                </SheetClose>
              );
            })}
          </nav>


          {/* =================================================
              HIRE ME
          ================================================= */}

          <div
            className="
              mt-7
              sm:mt-9
            "
          >
            <SheetClose asChild>
              <Link
                href="/#contact"
                className="
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1DB954]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-black

                  shadow-[0_10px_30px_rgba(29,185,84,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#1ED760]
                  hover:scale-[1.02]

                  active:scale-[0.98]

                  sm:min-h-[52px]
                  sm:text-base
                "
              >
                Hire Me
              </Link>
            </SheetClose>
          </div>


          {/* =================================================
              BOTTOM INFORMATION
          ================================================= */}

          <div
            className="
              mt-auto
              pt-10
            "
          >

            <div
              className="
                mb-5
                h-px
                w-full
                bg-white/10
              "
            />

            <p
              className="
                text-center
                text-[11px]
                leading-relaxed
                text-[#6A6A6A]
                sm:text-xs
              "
            >
              Full Stack Developer
              <span className="mx-2 text-[#1DB954]">
                •
              </span>
              AI Engineer
            </p>

            <p
              className="
                mt-2
                text-center
                text-[10px]
                text-[#555]
                sm:text-xs
              "
            >
              Building digital products & AI systems
            </p>

          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;