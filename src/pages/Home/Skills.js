import { api } from "../../api/api";
import { motion } from "framer-motion";
import {
  scrollVariants,
  scrollViewport,
} from "../../utils/utils";

const Card = ({ title, icon, skillsItem, variants }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={scrollViewport}
      variants={scrollVariants}
      whileHover={{scale: 1.05}}
      className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch justify-content-stretch"
    >
      <div className="card w-100">
        <div className="card-header">
          <div className="icon">{icon}</div>
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-body">
          {skillsItem.map((item, i) => (
            <span key={i} className="card-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = api;

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-title">
          <h3>Skills</h3>
        </div>
        <div className="row">
          {skills ? (
            skills.map((item) => <Card key={item.id} {...item} />)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
