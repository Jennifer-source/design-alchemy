import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/portfolio/Cursor";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Manifesto } from "@/components/portfolio/Manifesto";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { HowIThink } from "@/components/portfolio/HowIThink";
import { MotionShowcase } from "@/components/portfolio/MotionShowcase";
import { Lab } from "@/components/portfolio/Lab";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Future } from "@/components/portfolio/Future";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Jennifer — UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio 2026 of Joseph Jennifer, UI/UX designer and creative technologist: case studies, research, design systems, motion and experiments.",
      },
      { property: "og:title", content: "Joseph Jennifer — Designing digital experiences that move" },
      {
        property: "og:description",
        content:
          "Case studies in UX research, product design and creative technology — plus a lab of ongoing experiments.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <SelectedWork />
        <HowIThink />
        <MotionShowcase />
        <Lab />
        <About />
        <Skills />
        <Achievements />
        <Future />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
