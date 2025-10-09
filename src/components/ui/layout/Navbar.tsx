import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scrollToElement } from "../../../utils/scroll";
import { useScrollFade } from "../../../hooks/useScrollFade";
import { motion } from "framer-motion";

export default function Navbar({ animate }: { animate: boolean }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const opacity = useScrollFade(100);
  const location = useLocation();

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
    { href: "components", label: "Components" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    //Scroll after navigation
    const handleHashChange = () => {
      // If a link has hash "#" in it, extract the string after the hash and scroll to that string id.
      if (location.hash) {
        //location.hash returns part of the link after the "#" simbol includint the #
        const target = location.hash.substring(1); //keeps all the letters starting from second letter, including the seccong letter (positon 1), removes first one (positon 0)
        scrollToElement(target);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isHomepage = location.pathname === "/";

  return (
    <motion.nav
      initial={animate ? { opacity: 0, y: -50 } : false}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={animate ? { duration: 1, ease: "easeOut", delay: 1.5 } : {}}
      className={`fixed w-full p-0 md:p-4 z-90 ${
        opacity === 1 ? "" : "backdrop-blur-3xl bg-black/20"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center space-x-5 font-anta tracking-wide">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              to={
                item.label === "Components"
                  ? `/${item.href}`
                  : isHomepage
                  ? `#${item.href}`
                  : `/#${item.href}`
              }
              className={`${
                item.label === "Home"
                  ? "text-light-red hover:bg-light-red hover:text-light"
                  : "text-light hover:bg-light hover:text-light-red"
              } p-1 px-2 rounded-md transition-colors`}
              onClick={(e) => {
                if (isHomepage && item.label !== "Components") {
                  scrollToElement(item.href);
                }
              }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="flex md:hidden h-10 bg-bloody items-center justify-end px-4 text-light">
        <i
          className={`fa-solid fa-xl transition-transform ease-in-out duration-200 ${
            !isMobileMenuOpen ? "fa-bars rotate-360" : "fa-xmark rotate-180"
          } cursor-pointer z-40`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></i>
        <div
          className={`absolute top-10 right-0 flex flex-col w-[250px] transition-all duration-100 ease-in-out z-20 overflow-hidden ${
            isMobileMenuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <ul className="bg-bloody text-center rounded-bl-lg font-anta">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="hover:bg-red-700 transition-colors duration-20"
              >
                <NavLink
                  to={
                    item.label === "Components"
                      ? `/${item.href}`
                      : isHomepage
                      ? `#${item.href}`
                      : `/#${item.href}`
                  }
                  className="block w-full p-2"
                  onClick={(e) => {
                    if (isHomepage && item.label !== "Components") {
                      scrollToElement(item.href);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
