import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/site";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const subject = encodeURIComponent(form.subject || "Project inquiry");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let’s build the next one.</h2>
        <p className="section-copy">
          Need a React, Next.js, or fullstack product — APIs, dashboards, or a WordPress/Shopify front-end? I’m open to freelance and product work.
        </p>
        <div className="contact-grid" style={{ marginTop: 32 }}>
          <motion.form
            className="contact-card glass form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <label>
                Your name
                <input name="name" value={form.name} onChange={onChange} required />
              </label>
              <label>
                Your email
                <input type="email" name="email" value={form.email} onChange={onChange} required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" value={form.subject} onChange={onChange} required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
            </label>
            <button className="btn btn-primary" type="submit">
              {sent ? "Opening email…" : "Send message"}
            </button>
          </motion.form>
          <motion.aside
            className="contact-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Direct lines</h3>
            <p className="section-copy">Prefer to skip the form? Reach me here.</p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
              <a href={profile.phoneHref}>
                <Phone size={18} /> {profile.phoneDisplay}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
