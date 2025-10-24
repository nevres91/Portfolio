import { toast } from "react-toastify";

export const Footer = () => {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("nevres_muratovic@hotmail.com");
    toast.success("📋 Email copied!");
  };

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText("+38761648575");
    toast.success("📋 Phone number Copied");
  };
  return (
    <footer
      className="bg-gradient-to-t from-black/80 to-black/40 text-light w-full py-8 relative overflow-hidden  z-99"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Left Section: Branding & Contact */}
          <div className="text-start  min-w-57">
            <h2 className="text-lg font-jura-bold text-white">
              Nevres Muratović
            </h2>
            <p className="flex text-sm font-jura-light text-gray-300 mt-1">
              <i className="fa-regular fa-copyright mr-2 mt-[5px] md:mt-[4px]"></i>
              <p className="mb-0 sm:mb-[5px] md:mb-0">
                2025 Nevres Muratović. All rights reserved.
              </p>
            </p>
            <div className="mt-2 text-sm font-jura-light text-gray-300">
              <p>
                <p
                  className="hover:text-gray-500 transition-colors cursor-pointer flex items-center"
                  aria-label="Email Nevres Muratović"
                  onClick={() => copyEmail()}
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  <p className="mb-0 sm:mb-[5px] md:mb-0">
                    nevres_muratovic@hotmail.com
                  </p>
                </p>
              </p>
              <p className="mt-1">
                <p
                  className="hover:text-gray-500 cursor-pointer transition-colors"
                  aria-label="Call Nevres Muratović"
                  onClick={() => copyPhoneNumber()}
                >
                  <i className="fa-solid fa-phone mr-2"></i>
                  +38761648575
                </p>
              </p>
            </div>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r border-white/50 w-[90%] sm:w-0 sm:h-[140px]"></div>

          {/* Center Section: Navigation Links */}
          <nav
            className="flex flex-wrap  justify-center gap-6 md:gap-8 text-sm font-jura-light"
            aria-label="Footer navigation"
          >
            <a
              href="#home"
              className="hover:text-gray-500 transition-colors flex items-center gap-2"
              aria-label="Home"
            >
              <i className="fa-solid fa-house text-xs md:text-lg"></i>
              <p className="flexx">Home</p>
            </a>
            <a
              href="#projects"
              className="hover:text-gray-500 transition-colors flex items-center gap-2"
              aria-label="Projects"
            >
              <i className="fa-solid fa-diagram-project text-xs md:text-lg"></i>
              <p className="flexx">Projects</p>
            </a>
            <a
              href="#about"
              className="hover:text-gray-500 transition-colors flex items-center gap-2"
              aria-label="About"
            >
              <i className="fa-solid fa-address-card text-xs md:text-lg"></i>
              <p className="flexx">About</p>
            </a>
            <a
              href="#contact"
              className="hover:text-gray-500 transition-colors flex items-center gap-2"
              aria-label="Contact"
            >
              <i className="fa-solid fa-phone text-xs md:text-lg"></i>
              <p className="flexx">Contact</p>
            </a>
            <a
              href="/resume"
              className="hover:text-gray-500 transition-colors flex items-center gap-2"
              aria-label="Download Resume"
            >
              <i className="fa-solid fa-file-pdf text-xs md:text-lg"></i>
              <p className="flexx">Resume</p>
            </a>
          </nav>
          <div className="border-b sm:border-b-0 sm:border-r border-white/50 w-[90%] sm:w-0 sm:h-[140px]"></div>

          {/* Right Section: Social Media Links */}
          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex flex-row sm:flex-col md:flex-row gap-6 md:gap-4 text-sm font-jura-light  mx-auto">
              <a
                href="https://linkedin.com/in/nevres-muratovic-9718a4321"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
              <a
                href="https://github.com/nevres91"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/nevres.muratovic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
                aria-label="Facebook Profile"
              >
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
            </div>
            <div className="text-sm font-jura-light text-gray-300 text-center hidden md:block">
              <p>This website does not collect</p>
              <p> or store any personal data.</p>
            </div>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute left-[-40%] xl:left-[5%] bottom-[-50%] w-[600px] xl:w-[800px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
        <div className="absolute right-[10%] left-1/2 transform -translate-x-1/2 bottom-[-20%] w-[600px] xl:w-[800px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
        <div className="absolute right-[10%] bottom-[-15%] w-[400px] xl:w-[500px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
      </div>
    </footer>
  );
};
