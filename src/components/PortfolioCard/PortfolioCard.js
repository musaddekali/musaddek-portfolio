import "./PortfolioCard.css";
import { motion } from "framer-motion";
import { scrollVariants, scrollViewport } from "../../utils/utils";

const PortfolioCard = ({ portfolio }) => {
  const { title, desc, image, codeLink, previewLink } = portfolio;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={scrollViewport}
      variants={scrollVariants}
      className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
    >
      <div className="img-box">
        <img className="img-box-img" height="400" width="400" src={image} alt={title} />
        <div className="img-box-title-overlay">
          <span>{title}</span>
        </div>
        <div className="img-box-overlay">
          <p className="img-box-text">{desc}</p>
          <div className="d-flex gap-3">
            {codeLink && (
              <a target="_blank" href={codeLink} className="btn">
                Code
              </a>
            )}
            <a target="_blank" href={previewLink} className="btn">
              Preview
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
