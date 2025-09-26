export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black/80 to-black/40 text-light w-full py-6 relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Section: Copyright & Contact */}
          <div className="text-sm font-jura-light text-center sm:text-left">
            <p>© 2025 Nevres Muratović. All rights reserved.</p>
            <p className="mt-1">
              <a
                href="mailto:your.email@example.com"
                className="hover:text-red-400 transition-colors"
              >
                nevres_muratovic@hotmail.com
              </a>
            </p>
          </div>

          {/* Center Section: Navigation Links */}
          <nav className="flex gap-8 text-sm font-jura-light">
            <a href="#home" className="hover:text-red-400 transition-colors">
              <i className="fa-solid fa-house fa-xl"></i>
            </a>
            <a
              href="#projects"
              className="hover:text-red-400 transition-colors"
            >
              <i className="fa-solid fa-diagram-project fa-xl"></i>
            </a>
            <a href="#about" className="hover:text-red-400 transition-colors">
              <i className="fa-solid fa-address-card fa-xl"></i>
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors">
              <i className="fa-solid fa-phone fa-xl"></i>
            </a>
          </nav>

          {/* Right Section: Social Media */}
          <div className="flex gap-4 text-sm font-jura-light">
            <a
              href="https://linkedin.com/in/nevres-muratovic-9718a4321"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a
              href="https://github.com/nevres91"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/nevres.muratovic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute left-[-40%] xl:left-[5%] bottom-[-50%] w-[600px] xl:w-[800px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
        <div className="absolute right-[10%] left-1/2 transform -translate-x-1/2 bottom-[-20%] w-[600px] xl:w-[800px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
        <div className="absolute right-[10%]   bottom-[-15%] w-[400px] xl:w-[500px] aspect-square rounded-full bg-red-500/30 blur-[60px] opacity-40 -z-10"></div>
      </div>
    </footer>
  );
};
