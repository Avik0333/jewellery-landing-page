import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type CinematicState = {
  sceneProgress: number;
  assemblyProgress: number;
};

export default function useCinematicTransition() {
  const scope = useRef<HTMLDivElement>(null);

  const cinematicState = useRef<CinematicState>({
    sceneProgress: 0,
    assemblyProgress: 1,
  });

  useGSAP(
    () => {
      const root = scope.current;

      if (!root) return;

      const hero = root.querySelector<HTMLElement>(
        '[data-scene="hero"]',
      );

      const heroCopy = hero?.querySelector<HTMLElement>(
        "[data-hero-copy]",
      );

      const heroVisual = hero?.querySelector<HTMLElement>(
        "[data-hero-visual]",
      );

      const heroScroll = hero?.querySelector<HTMLElement>(
        "[data-hero-scroll]",
      );

      const storefront = root.querySelector<HTMLElement>(
        '[data-scene="storefront"]',
      );

      if (!hero || !storefront || !heroCopy) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        cinematicState.current.sceneProgress = 0;
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        cinematicState.current,
        {
          sceneProgress: 1,
          duration: 2,
          ease: "none",
        },
        0,
      );

      timeline.to(
        heroCopy,
        {
          autoAlpha: 0,
          y: -35,
          duration: 0.7,
        },
        0.25,
      );

      if (heroVisual) {
        timeline.to(
          heroVisual,
          {
            autoAlpha: 0,
            scale: 0.94,
            duration: 0.7,
          },
          0.35,
        );
      }

      if (heroScroll) {
        timeline.to(
          heroScroll,
          {
            autoAlpha: 0,
            duration: 0.3,
          },
          0.25,
        );
      }

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  return {
    scope,
    cinematicState,
  };
}