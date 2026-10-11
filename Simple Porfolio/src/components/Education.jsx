import { motion } from "framer-motion";
import { certifications, education } from "../data/site";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Learning that still shows up in the work.</h2>
        <div className="edu-grid">
          <motion.article
            className="edu-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Degree</p>
            <h3>{education.degree}</h3>
            <p className="section-copy">{education.school}</p>
          </motion.article>
          <motion.article
            className="edu-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Certifications</p>
            <div className="cert-list">
              {certifications.map((item) => (
                <div className="cert" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.org}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
