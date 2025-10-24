import { HeroTerminal } from "@/components/sections/hero-terminal";
import { SkillsTerminal } from "@/components/sections/skills-terminal";
import { ProjectsTerminal } from "@/components/sections/projects-terminal";
import { ContactTerminal } from "@/components/sections/contact-terminal";
import { FooterTerminal } from "@/components/footer-terminal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroTerminal />
      <SkillsTerminal />
      <ProjectsTerminal />
      <ContactTerminal />
      <FooterTerminal />
    </main>
  );
}
