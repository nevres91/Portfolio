import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md p-4 shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <a
            href="/#home"
            className="text-lg font-semibold hover:text-cyan-400 transition-colors text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="text-lg font-semibold hover:text-cyan-400 transition-colors text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className="text-lg font-semibold hover:text-cyan-400 transition-colors text-white"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="text-lg font-semibold hover:text-cyan-400 transition-colors text-white"
          >
            Contact
          </a>
        </li>
        <li>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              `text-lg font-semibold hover:text-cyan-400 transition-colors ${
                isActive ? "text-cyan-400" : "text-white"
              }`
            }
          >
            Components
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
