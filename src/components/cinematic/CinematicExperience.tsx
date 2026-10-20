import { useEffect } from "react";

import useCinematicTransition from "../../hooks/useCinematicTransition";

import CinematicCanvas from "./CinematicCanvas";
import Navbar from "../layout/Navbar";
import HeroSection from "../sections/HeroSection";
import CollectionSection from "../sections/CollectionSection";
import ContactSection from "../sections/ContactSection";

export default function CinematicExperience() {
  const { scope, cinematicState } = useCinematicTransition();

  useEffect(() => {
    // Refresh ScrollTrigger after the page content has mounted.
    // This ensures it measures the final layout.
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="cinematic-experience" ref={scope}>
      <Navbar />

      <div className="cinematic-stage" aria-hidden="true">
        <CinematicCanvas cinematicState={cinematicState} />
      </div>

      <main>
        <div data-scene="hero">
          <HeroSection />
        </div>

        <CollectionSection />

        <div data-scene="storefront">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}