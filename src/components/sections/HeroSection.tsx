import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Hero copy controlled by GSAP */}
      <div className="hero-copy" data-hero-copy>
        <p className="eyebrow">
          AN EXPRESSION OF TIMELESS BEAUTY
        </p>

        <h1>
          Gold that
          <br />
          tells a <em>story.</em>
        </h1>

        <p className="hero-description">
          Discover jewellery that celebrates tradition,
          craftsmanship, and the moments that matter.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#collections">
            Discover the collection
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>

          <a className="button-text" href="#collections">
            Explore our store
          </a>
        </div>
      </div>

      {/* Decorative marker for the hero visual area */}
      <div
        className="hero-visual-marker"
        data-hero-visual
        aria-hidden="true"
      />

      {/* Scroll indicator controlled by GSAP */}
      <div className="hero-bottom">
        <span>CRAFTED FOR MOMENTS THAT LAST</span>

        <a
          href="#collections"
          data-hero-scroll
          aria-label="Scroll to explore collections"
        >
          <ArrowDown size={16} strokeWidth={1.3} />
        </a>

        <span>EST. WITH ELEGANCE</span>
      </div>
    </section>
  );
}