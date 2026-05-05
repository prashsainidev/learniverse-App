// components/Header.js
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronUp, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(router.asPath || "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

  // Calculate the header's bottom position (plus a margin)
  useEffect(() => {
    const updateMenuTop = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        // Adding an extra 8px margin; adjust as needed.
        setMenuTop(rect.bottom + 8);
      }
    };

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);
    return () => window.removeEventListener("resize", updateMenuTop);
  }, [menuOpen]);

  // Close the mobile menu when the screen width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#founder", text: "Founder" },
    { href: "/#contact", text: "Contact" },
  ];

  // Handler for navigation clicks (including smooth scrolling for hash links)
  const handleNavItemClick = (e, href) => {
    setActiveNav(href);
    if (router.pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Header with a ref to measure its bottom edge */}
      <header
        ref={headerRef}
        className={`fixed top-8 left-8 right-8 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 z-50 transition-shadow rounded-full ${
          scrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex justify-between items-center py-3">
          {/* Left: Logo */}
          <div>
            <Link href="/">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                Learniverse
              </h1>
            </Link>
          </div>

          {/* Center: Desktop navigation */}
          <nav className="hidden lg:flex space-x-8 text-base font-medium items-center">
            {navItems.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavItemClick(e, href)}
                className={`transition-colors duration-300 ease-in-out ${
                  activeNav === href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-900 dark:text-white hover:text-blue-500"
                }`}
              >
                {text}
              </Link>
            ))}
          </nav>

          {/* Right: Theme toggler & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition"
            >
              {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-full shadow-lg transition bg-gray-800 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu receives the computed top offset */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        activePath={activeNav}
        menuTop={menuTop}
      />
    </div>
  );
};

export default Header;
