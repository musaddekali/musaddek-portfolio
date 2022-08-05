import React from "react";

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="hero-card">
          <div className="hero-card-in">
            <h1 className="hero-card-title">👋 Hi, I'm Musaddek Ali</h1>
            <p className="hero-card-desc txt-lg">
              I'm a web developer from Sylhet, Bangladesh. Currently i'm working
              as a freelancer in Fiverr. In my spare time I enjoy gaming and
              building my own projects. My preferred tools are React js,
              JavaScript, HTML, CSS, Bootstrap and VScode etc.
            </p>
            <div className="txt-lg">
              I'm on{" "}
              <a
                className="hero-card-link"
                target="_blank"
                href="https://github.com/musaddekali"
              >
                Github
              </a>{" "}
              <a
                className="hero-card-link"
                target="_blank"
                href="https://www.linkedin.com/in/musaddekalidev"
              >
                Linkedin
              </a>{" "}
              <a
                className="hero-card-link"
                target="_blank"
                href="https://www.instagram.com/webdevmusaddek"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                className="hero-card-link"
                target="_blank"
                href="https://web.facebook.com/musaddekali.dev"
              >
                Facebook
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
