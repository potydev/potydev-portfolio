import { ArrowUpRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import useActiveSection from "@/hooks/useActiveSection";
import useMousePosition from "@/hooks/useMousePosition";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const Index = () => {
  const activeSection = useActiveSection(["about", "experience", "projects"]);
  useMousePosition();

  return (
    <div className="relative">
      {/* Spotlight gradient that follows mouse */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute spotlight" />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary to-primary/70 px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />
          
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" title="About">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Saya adalah seorang Fullstack Developer yang passionate dalam membangun aplikasi web modern dengan fokus pada user experience dan clean code. Spesialisasi saya adalah{" "}
                  <span className="font-medium text-slate-light">Vue.js</span> dan{" "}
                  <span className="font-medium text-slate-light">React</span>, dan saya telah mendapatkan sertifikasi dari{" "}
                  <a
                    href="https://www.meta.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-light hover:text-primary transition-colors"
                  >
                    Meta
                  </a>
                  .
                </p>
                <p className="text-foreground leading-relaxed">
                  Saat ini saya adalah mahasiswa{" "}
                  <span className="font-medium text-slate-light">TRPL</span> di{" "}
                  <a
                    href="https://pnc.ac.id"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-light hover:text-primary transition-colors"
                  >
                    Politeknik Negeri Cilacap
                  </a>
                  , Indonesia. Saya juga aktif mengerjakan proyek freelance, membangun berbagai aplikasi mulai dari company profile hingga platform e-commerce.
                </p>
                <p className="text-foreground leading-relaxed">
                  Saya telah membangun berbagai proyek termasuk{" "}
                  <a
                    href="https://github.com/potydev/CompanyProfile-pt-inovasi-nusantara"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-light hover:text-primary transition-colors"
                  >
                    company profiles
                  </a>
                  ,{" "}
                  <a
                    href="https://github.com/potydev/lumora-ecommerce"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-light hover:text-primary transition-colors"
                  >
                    e-commerce platforms
                  </a>
                  , dan aplikasi berbasis{" "}
                  <a
                    href="https://github.com/potydev/grammar-checker-ai"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-light hover:text-primary transition-colors"
                  >
                    AI
                  </a>
                  .
                </p>
                <p className="text-foreground leading-relaxed">
                  Di waktu luang, saya suka mengeksplorasi teknologi baru, berkontribusi ke open source, dan terus belajar untuk meningkatkan skill development saya. 🚀
                </p>
              </div>
            </Section>

            <Section id="experience" title="Experience">
              <ol className="group/list">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </ol>
              
              <div className="mt-12">
                <a
                  href="https://github.com/potydev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-medium leading-tight text-slate-light group"
                  aria-label="View GitHub Profile"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-primary">
                    View GitHub Profile
                  </span>
                  <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </Section>

            <Section id="projects" title="Projects">
              <ol className="group/list">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </ol>
              
              <div className="mt-12">
                <a
                  href="https://github.com/potydev?tab=repositories"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-medium leading-tight text-slate-light group"
                  aria-label="View All Repositories"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-primary">
                    View All Repositories
                  </span>
                  <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </Section>

            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built with{" "}
                <a
                  href="https://react.dev/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  React
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tailwind CSS
                </a>
                . Inspired by{" "}
                <a
                  href="https://brittanychiang.com/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Brittany Chiang
                </a>
                . All text is set in the{" "}
                <a
                  href="https://rsms.me/inter/"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Inter
                </a>{" "}
                typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
