import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Selected products in production.</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card glass"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {project.image ? (
                <div className="thumb">
                  <img src={encodeURI(project.image)} alt={project.title} />
                </div>
              ) : (
                <div className="thumb thumb-fallback">{project.title}</div>
              )}
              <div className="body">
                <div className="cat">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a className="btn btn-ghost" href={project.live} target="_blank" rel="noreferrer">
                  View live <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
