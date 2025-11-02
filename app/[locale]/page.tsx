import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
