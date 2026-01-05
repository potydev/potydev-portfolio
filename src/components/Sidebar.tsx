import { Github, Linkedin, Instagram, Mail } from "lucide-react";

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/potydev", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/potyhi/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@potydev.com", label: "Email" },
];

const Sidebar = ({ activeSection }: SidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-light sm:text-5xl">
          <a href="/">potydev</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-light sm:text-xl">
          Fullstack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-foreground">
          I build modern, responsive web applications with Vue.js & React.
        </p>

        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center py-3"
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === item.id
                        ? "nav-indicator-active"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-slate-light"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === item.id
                        ? "text-slate-light"
                        : "text-muted-foreground group-hover:text-slate-light"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} (opens in a new tab)`}
              className="block text-muted-foreground hover:text-slate-light transition-colors"
            >
              <link.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Sidebar;
