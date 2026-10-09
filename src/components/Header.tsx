import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header
      className="
        absolute
        left-0
        right-0
        top-0
        z-50
        w-full
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[78px]
          max-w-[1500px]
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          className="
            group
            flex
            items-center
            gap-3
          "
        >

          {/* Spotify-inspired logo */}
          <div
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#1DB954]
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:bg-[#1ED760]
              group-hover:shadow-[0_0_25px_rgba(29,185,84,0.35)]
            "
          >

            {/* Sound waves */}

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


          {/* Brand name */}

          <span
            className="
              text-[21px]
              font-black
              tracking-wide
              text-white
              transition-colors
              duration-300
              group-hover:text-[#1DB954]
            "
          >
            SUJIT<span className="text-[#1DB954]">.</span>
          </span>

        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center lg:flex">
          <Nav />
        </div>


        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <div className="lg:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;