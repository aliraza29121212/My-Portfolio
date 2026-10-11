import { motion } from "framer-motion";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where the work happens.</h2>
        <div className="timeline">
          {experience.map((job, index) => (
            <motion.article
              className="exp-card glass"
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="period">{job.period}</div>
                {job.current ? <span className="now">Current role</span> : null}
              </div>
              <div>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <div className="tech-row">
                  {job.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
