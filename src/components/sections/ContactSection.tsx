import {
  ArrowUpRight,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

const MAPS_URL =
  "https://maps.app.goo.gl/cy8amCQwLVbfK26N9?g_st=ac";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div
        className="contact-heading"
        data-storefront-copy
      >
        <p className="eyebrow">
          YOUR NEXT VISIT BEGINS HERE
        </p>

        <h2>
          A world of
          <br />
          <em>golden detail.</em>
        </h2>

        <p>
          Discover Suvarnadhenu in person and explore the
          collection at our store in Balewadi, Pune.
        </p>
      </div>

      {/* Animation target for the storefront's HTML companion content */}

      <div
        className="storefront-caption"
        data-storefront-caption
      >
        <span className="caption-line" />
        <p>SUVARNA DHENU · UNIQUE STORE</p>
        <span className="caption-line" />
      </div>

      <div className="contact-details">
        <article className="contact-detail">
          <div className="contact-icon">
            <MapPin size={20} strokeWidth={1.4} />
          </div>

          <div>
            <h3>Visit our store</h3>

            <p>
              Shop No. 2, Sara Residency,
              <br />
              Mahalunge, Balewadi,
              <br />
              Pune, Maharashtra 411045
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={14} />
            </a>
          </div>
        </article>

        <article className="contact-detail">
          <div className="contact-icon">
            <Phone size={20} strokeWidth={1.4} />
          </div>

          <div>
            <h3>Speak with us</h3>

            <p>
              Have a question about visiting the store?
              <br />
              Get in touch with our team.
            </p>

            <a href="tel:+917722038033">
              +91 77220 38033
              <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      </div>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <span>सुवर्णधेनु</span>
          <small>UNIQUE STORE</small>
        </a>

        <p>
          © {new Date().getFullYear()} Suvarnadhenu. All rights reserved.
        </p>

        <a className="back-to-top" href="#top">
          Back to top <ArrowUp size={13} />
        </a>
      </footer>
    </section>
  );
}