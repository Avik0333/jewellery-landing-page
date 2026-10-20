import StorefrontScene from "../three/StorefrontScene";

export default function StorefrontSection() {
  return (
    <section
      id="storefront"
      data-scene="storefront"
      className="storefront-section relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#120407] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Ambient burgundy atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 72% 45%, rgba(128, 72, 31, 0.2), transparent 48%), linear-gradient(180deg, #1c0509 0%, #120407 45%, #1c0509 100%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 md:grid-cols-2 lg:gap-16">
        {/* Editorial copy */}
        <div
          data-storefront-copy
          className="max-w-xl"
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-antique-gold">
            A place for timeless elegance
          </p>

          <h2 className="font-display text-5xl font-normal leading-[1.05] text-warm-ivory sm:text-6xl lg:text-7xl">
            Tradition,
            <br />
            <span className="italic text-champagne">
              illuminated.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-warm-ivory/65">
            Discover a world of traditional-inspired jewellery, thoughtfully
            presented for life&apos;s most memorable occasions.
          </p>

          <a
            href="#collection"
            className="mt-9 inline-flex items-center gap-4 border-b border-antique-gold/60 pb-3 text-xs uppercase tracking-[0.18em] text-champagne transition-colors duration-300 hover:text-warm-ivory"
          >
            Explore the collection
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* 3D storefront */}
        <div
          data-storefront-visual
          className="relative isolate aspect-[4/5] min-w-0 overflow-hidden border border-antique-gold/20 bg-[#18090b] md:aspect-[5/4]"
          aria-label="Stylised three-dimensional Suvarnadhenu storefront"
        >
          {/* WebGL scene */}
          <div className="absolute inset-0">
            <StorefrontScene />
          </div>

          {/* Architectural frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 z-10 border border-antique-gold/20"
          />

          {/* Brand identification */}
          <div
            data-storefront-caption
            className="pointer-events-none absolute inset-x-6 bottom-6 z-10 flex items-end justify-between gap-4"
          >
            <div>
              <p className="font-display text-xl italic text-champagne">
                Suvarnadhenu
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-warm-ivory/55">
                Unique Store
              </p>
            </div>

            <span className="text-[8px] uppercase tracking-[0.2em] text-warm-ivory/45">
              Pune · India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}