import { Navbar } from "./Navbar.tsx";
import { Hero } from "./Hero.tsx";
import { Proof } from "./Proof.tsx";
import { Projects } from "./Projects.tsx";
import { OpenSource } from "./OpenSource.tsx";
import { Contact } from "./Contact.tsx";
import { Footer } from "./Footer.tsx";

export function HomeContent() {
  return (
    <div className="min-h-screen bg-[#faf7f4] text-stone-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-20 sm:px-6">
        <Hero />
        <Proof />
        <Projects />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
