import { motion } from "framer-motion";
import { shopify } from "../data/site";

export default function Shopify() {
  return (
    <section className="section shopify-section" id="shopify">
      <div className="container">
        <motion.div
          className="shopify-panel glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="shopify-head">
            <img className="shopify-logo" src="/shopify.png" alt="Shopify" />
            <div>
              <p className="section-kicker">{shopify.kicker}</p>
              <h2 className="section-title">{shopify.title}</h2>
              <p className="section-copy">{shopify.copy}</p>
            </div>
          </div>
          <div className="shopify-grid">
            {shopify.points.map((item, index) => (
              <motion.article
                className="shopify-card"
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
