import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/site";

const roles = ["React & Next.js apps", "REST API integrations", "MERN stack products", "TypeScript UIs"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div>
          <motion.div
            className="hero-badge glass"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="pulse" />
            Open for Work · {profile.location}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hello.
            <span>I'm Ali Raza.</span>
          </motion.h1>
          <motion.p
            className="section-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Senior software engineer building <span className="typed">{roles[index]}</span>.
            {` ${profile.tagline}`}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a className="btn btn-primary" href="#work">
              View work <ArrowUpRight size={18} />
            </a>
            <a className="btn btn-ghost" href={profile.cv} download="Ali-Raza.pdf">
              Download CV
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </motion.div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> {profile.location}
            </span>
            <span>
              <Sparkles size={14} /> React · Next.js · Node.js
            </span>
          </div>
        </div>

        <aside className="hero-stage">
          <div className="hero-portrait glass">
            <div className="hero-photo">
              <img src={profile.photo} alt={profile.name} />
            </div>
            <div className="hero-portrait-meta">
              <strong>{profile.name}</strong>
              <span>{profile.role} at {profile.company}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
