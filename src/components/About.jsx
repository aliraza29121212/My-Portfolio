import { motion } from "framer-motion";
import { about } from "../data/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-kicker">About</p>
        <h2 className="section-title">A frontend mind with an automation edge.</h2>
        <div className="about-grid">
          <motion.article
            className="about-card glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>{about.intro}</p>
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </motion.article>
          <div className="stat-grid">
            {about.stats.map((stat, index) => (
              <motion.div
                className="stat glass"
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              >
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
