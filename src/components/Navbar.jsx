import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav glass">
      <a className="brand" href="#top">
        {/* <span className="brand-photo">
          <img src={profile.photo} alt={profile.name} />
        </span> */}
        {profile.name}
      </a>
      <nav className={`nav-links${open ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={profile.cv} download="Ali-Raza.pdf">
        Download CV
      </a>
      <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
}
