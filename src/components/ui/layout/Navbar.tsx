import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { scrollToElement } from "../../../utils/scroll";
import { useScrollFade } from "../../../hooks/useScrollFade";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const opacity = useScrollFade(100);

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
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

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={`fixed w-full p-0 md:p-4 z-90 ${
        opacity === 1 ? "" : "backdrop-blur-3xl bg-black/20"
      }   ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <ul className="hidden md:flex justify-center space-x-5 font-anta tracking-wide ">
        {navItems.map((item) => {
          return (
            <li>
              <a
                className={`${
                  item.label === "Home"
                    ? "hover:bg-light-red hover:text-light"
                    : "hover:bg-light hover:text-light-red"
                } p-1 px-2 rounded-md transition-colors ${
                  item.label === "Home" ? "text-light-red" : "text-light"
                }`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          );
        })}
        <li>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              `hover:bg-light hover:text-light-red transition-colors p-1 px-2 rounded-md ${
                isActive ? "text-cyan-400" : "text-white"
              }`
            }
          >
            Components
          </NavLink>
        </li>
      </ul>

      <div // MOBILE MENU
        className="flex md:hidden h-10 bg-bloody  items-center justify-end px-4"
      >
        <i
          className={`fa-solid fa-xl ${
            !isMobileMenuOpen ? "fa-bars" : "fa-xmark"
          } cursor-pointer z-40`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></i>
        <div
          className={`absolute top-10 right-0 flex flex-col w-[250px] transition-all duration-100 ease-in-out z-20 overflow-hidden ${
            isMobileMenuOpen ? " max-h-80" : " max-h-0"
          }`}
        >
          <ul className="bg-bloody text-center 0 rounded-bl-lg font-anta">
            {navItems.map((item) => {
              return (
                <li className="hover:bg-red-700 transition-colors duration-20">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full p-2"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="hover:bg-red-700 transition-colors duration-20 p-2 cursor-pointer mb-5">
              <NavLink to="/components" className="block w-full">
                Components
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
