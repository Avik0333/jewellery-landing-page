import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Our Store", href: "#store" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-navbar">
      <a
        className="brand-lockup"
        href="#home"
        aria-label="Suvarnadhenu home"
        onClick={closeMenu}
      >
        <span className="brand-name">सुवर्णधेनु</span>
        <span className="brand-caption">UNIQUE STORE</span>
      </a>

      <nav
        className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <a
          className="nav-visit"
          href="#contact"
          onClick={closeMenu}
        >
          Visit us
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </nav>

      <button
        className="nav-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}