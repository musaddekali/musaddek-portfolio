import { motion } from "framer-motion";
import { api } from "../../api/api";
import './Resume.css';

const Resume = () => {
    const { resume } = api;
  // Animation Variants
  const heroCardV = {
    visible: {
      x: 0,
      transition: { duration: 0.3 },
    },
    hidden: {
      x: 100,
    },
  };
  return (
    <section className="resume section-padding">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={heroCardV} className="resume-card">
          {resume}
        </motion.div>
      </div>
    </section>
  );
};
export default Resume;
