"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide/Show Navbar on Scroll
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/makeup-services" },
    { name: "Portfolio", href: "/bridal-portfolio" },
    { name: "Academy", href: "/academy" },
    { name: "Gallery", href: "/academy-gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-3 left-0 w-full z-50 flex justify-center px-2 sm:px-4 lg:px-6 xl:px-8 transition-all duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-32"}`}
      >
        <header
          className={`
          relative w-full pointer-events-auto overflow-hidden
          transition-all duration-500 ease-in-out
          border border-white/20 dark:border-white/10
          bg-white/75 dark:bg-black/70
          backdrop-blur-[30px]
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          
          before:absolute before:inset-0
          before:rounded-full
          before:bg-white/10
          before:backdrop-blur-2xl
          before:-z-10
          
          ${
            isScrolled
  ? "max-w-[1320px] py-1 rounded-full"
  : "max-w-[1450px] py-1.5 lg:py-2 rounded-full"
          }
          `}
        >
          {/* Gradient Glow */}
          <div
            className="
            absolute inset-0 rounded-full opacity-40
            bg-gradient-to-r
            from-orange-200/20
            via-transparent
            to-pink-200/20
            dark:from-orange-500/10
            dark:to-pink-500/10
            pointer-events-none
          "
          />

          <div className="relative flex items-center justify-between px-3 sm:px-5 lg:px-4 xl:px-6 2xl:px-8">
            {/* LOGO */}
            <Link
              href="/"
              className="group relative flex-shrink-0 overflow-hidden flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Glam Professional"
                width={120}
                height={30}
                priority
                className="
               w-[65px] sm:w-[80px] lg:w-[85px] xl:w-[95px]
                h-auto object-contain
                transition-all duration-500
                group-hover:scale-105
              "
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="hidden lg:flex items-center gap-0 xl:gap-1 2xl:gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                    relative px-2 lg:px-2 xl:px-3 2xl:px-5 py-1.5 
                    text-[12px] xl:text-[13px] 2xl:text-[14px] font-semibold tracking-wide
                    transition-all duration-300 group rounded-full
                    hover:-translate-y-[2px]
                    hover:shadow-[0_0_20px_rgba(255,140,0,0.15)]

                    ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-800 dark:text-gray-200"
                    }
                  `}
                  >
                    <span>{link.name}</span>

                    {/* Animated Underline */}
                    <span
                      className={`
                      absolute left-1/2 -translate-x-1/2 bottom-0
                      h-[2px] rounded-full bg-orange-500
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-6 2xl:w-8"
                          : "w-0 group-hover:w-5 2xl:group-hover:w-6"
                      }
                    `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-2 lg:gap-2 xl:gap-3">
              {/* WHATSAPP */}
              <a
                href="https://wa.me/919639211114"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                relative flex items-center justify-center
                w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 rounded-full
                bg-green-500 hover:bg-green-600
                transition-all duration-300
                hover:scale-110 active:scale-95
                shadow-[0_0_25px_rgba(34,197,94,0.5)]
                animate-pulse
              "
              >
                {/* Ping */}
                <span
                  className="
                  absolute inset-0 rounded-full
                  bg-green-400 opacity-30 animate-ping
                "
                />
                <FaWhatsapp className="relative z-10 text-white w-4 h-4 xl:w-4 xl:h-4" />
              </a>

              {/* BOOK NOW BUTTON */}
              <Link
                href="/contact"
                className="
                hidden lg:flex items-center justify-center
                px-3 py-1.5 xl:px-4 xl:py-2 2xl:px-5
                rounded-full
                bg-gradient-to-r from-orange-500 to-pink-500
                text-white text-[12px] xl:text-sm font-semibold
                shadow-lg
                transition-all duration-300
                hover:scale-105 active:scale-95
                hover:shadow-[0_10px_30px_rgba(255,115,0,0.35)]
              "
              >
                Book Now
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                lg:hidden flex items-center justify-center
                w-8 h-8 rounded-full
                text-gray-800 dark:text-gray-200
                transition-all duration-300
                hover:bg-gray-100 dark:hover:bg-white/10
                hover:scale-110 active:scale-95
              "
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        <div
          className={`
          absolute top-[80px] left-3 right-3 lg:hidden
          transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
        >
          <div
            className="
            overflow-hidden rounded-[32px]
            border border-white/20 dark:border-white/10
            bg-white/70 dark:bg-black/70
            backdrop-blur-[40px]
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            p-5
          "
          >
            <nav
              className="flex flex-col gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                    className={`
                    px-5 py-3 rounded-2xl
                    text-[15px] font-semibold
                    transition-all duration-300
                    hover:translate-x-1

                    ${
                      isActive
                        ? "bg-orange-50 dark:bg-white/10 text-orange-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                    }
                  `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                mt-3 flex items-center justify-center
                rounded-2xl py-3
                bg-gradient-to-r from-orange-500 to-pink-500
                text-white font-semibold
                transition-all duration-300
                hover:scale-[1.02]
              "
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}