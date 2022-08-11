import { api } from "../../api/api";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  const { portfolios } = api;

  return (
    <motion.section
      key="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.3 }}
      id="portfolio"
      className="portfolio section-padding"
    >
      <div className="container">
        <div className="section-title">
          <h3>Portfolio</h3>
        </div>
        <div className="row">
          {portfolios.map((item) => (
            <PortfolioCard key={item.id} portfolio={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
