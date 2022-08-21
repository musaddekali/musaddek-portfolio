import { motion } from "framer-motion";

const Hero = () => {

// Animation Variants 
  const heroCardV = {
    visible: {
      x: 0,
      transition: { duration: 0.3 }
    },
    hidden: {
      x: 100
    }
  }

  const listV = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const itemV = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
// End Variants 
  return (
    <section className="hero section-padding">
      <div className="container">
        <motion.div initial='hidden' animate='visible' variants={heroCardV} className="hero-card">
          <motion.div variants={listV} className="hero-card-in">
            <motion.h1 variants={itemV} className="hero-card-title">👋 Hi, I'm Musaddek Ali</motion.h1>
            <motion.p variants={itemV} className="hero-card-desc txt-lg">
              I'm a web developer from Sylhet, Bangladesh. Currently i'm working
              as a freelancer in Fiverr. In my spare time I enjoy gaming and
              building my own projects. My preferred tools are React js,
              JavaScript, HTML, CSS, Bootstrap and VScode etc.
            </motion.p>
            <motion.div variants={itemV} className="txt-lg">
              I'm on{" "}
              <a
                className="hero-card-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/musaddekali"
              >
                Github
              </a>{" "}
              <a
                className="hero-card-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/musaddekalidev"
              >
                Linkedin
              </a>{" "}
              <a
                className="hero-card-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/webdevmusaddek"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                className="hero-card-link"
                target="_blank"
                rel="noreferrer"
                href="https://web.facebook.com/musaddekali.dev"
              >
                Facebook
              </a>{" "}
            </motion.div>
            {/* Resume Link  */}
            <div className="hero-card-cta mt-4">
              <motion.a
                variants={itemV}
                whileTap={{scale: 0.9}}
                whileHover={{scale: 1.1}}
                href="https://drive.google.com/file/d/1UfLxsWiCrVNgocsltqejH7Gm6AopbP9t/view?usp=sharing"
                target='_blank'
                rel="noreferrer"
                className="btn"
              >
                My Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
