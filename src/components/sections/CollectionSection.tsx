import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { collections } from "../../data/collections";

const filters = ["ALL", "TRADITIONAL", "EVERYDAY", "OCCASION"] as const;

type Filter = (typeof filters)[number];

export default function CollectionSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");

  const visibleCollections = useMemo(() => {
    if (activeFilter === "ALL") {
      return collections;
    }

    return collections.filter(
      (collection) => collection.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <section className="collection-section" id="collections">
      {/* Section introduction */}
      <div className="collection-header">
        <div className="collection-heading-copy">
          <p className="eyebrow">A STUDY IN GOLD</p>

          <h2>
            The art of
            <br />
            <em>adornment.</em>
          </h2>
        </div>

        <div className="collection-heading-aside">
          <span className="collection-heading-number">01 — 03</span>

          <p>
            Every design has its own character.
            Discover a collection that celebrates
            the details, the traditions, and the
            moments worth remembering.
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div
        className="collection-toolbar"
        aria-label="Filter collections"
      >
        <div className="collection-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`collection-filter ${
                activeFilter === filter ? "is-active" : ""
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "ALL" ? "All collections" : filter}
            </button>
          ))}
        </div>

        <span className="collection-count">
          {String(visibleCollections.length).padStart(2, "0")} COLLECTIONS
        </span>
      </div>

      {/* Collection cards */}
      <div className="collection-grid">
        {visibleCollections.map((collection, index) => (
          <article
            className={`collection-card collection-card-${collection.id}`}
            key={collection.id}
          >
            <a
              className="collection-card-link"
              href="#contact"
              aria-label={`Ask about ${collection.title}`}
            >
              <div className="collection-image">
                <img
                  src={collection.image}
                  alt={collection.imageAlt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="collection-image-shade" />

                <span className="collection-number">
                  {collection.number}
                </span>

                <span className="collection-category">
                  {collection.category}
                </span>

                <span className="collection-arrow">
                  <ArrowUpRight size={20} strokeWidth={1.3} />
                </span>

                <span className="collection-image-caption">
                  SUVARNA DHENU
                </span>
              </div>

              <div className="collection-info">
                <div>
                  <span className="collection-index">
                    COLLECTION {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{collection.title}</h3>

                  <p>{collection.description}</p>
                </div>

                <ArrowDownRight
                  className="collection-info-arrow"
                  size={21}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Closing call to action */}
      <div className="collection-footer">
        <p>
          The finest details are best discovered in person.
        </p>

        <a href="#contact" className="collection-visit-link">
          Discover the collection in store
          <ArrowUpRight size={16} strokeWidth={1.4} />
        </a>
      </div>
    </section>
  );
}