import { motion } from "framer-motion";
import { softSkills, technicalSkills } from "../data/site";

export default function Skills() {
  const marquee = [...technicalSkills, ...technicalSkills];

  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tools I ship with every day.</h2>
        <p className="section-copy">
          Frontend, fullstack, APIs, WordPress, Shopify, Cypress, and the team tools I use to deliver clean, reliable work.
        </p>
        <div className="skill-grid">
          {technicalSkills.map((skill, index) => (
            <motion.article
              className="skill-card glass"
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              {skill}
            </motion.article>
          ))}
        </div>
        <div className="soft-row">
          {softSkills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {marquee.map((name, index) => (
            <b key={`${name}-${index}`}>{name} ✦</b>
          ))}
        </div>
      </div>
    </section>
  );
}
