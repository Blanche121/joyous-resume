import {
  Navbar,
  Footer,
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Portfolio,
  AICapability,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <AICapability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
