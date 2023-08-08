import { BsCodeSlash } from "react-icons/bs";
import { FaReact, FaDatabase, FaDev, FaGlobe } from "react-icons/fa";
import { SiMaterialdesignicons, SiLibrariesdotio } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import Img1 from "../assets/images/portfolio/img-1.png";
import Img2 from "../assets/images/portfolio/img-2.png";
import Img3 from "../assets/images/portfolio/img-3.png";
import Img4 from "../assets/images/portfolio/img-4.png";
import Img5 from "../assets/images/portfolio/img-5.png";
import Img6 from "../assets/images/portfolio/img-6.png";
import Img7 from "../assets/images/portfolio/img-7.png";
import Img8 from "../assets/images/portfolio/img-8.png";
import Img9 from "../assets/images/portfolio/img-9.png";
import Img10 from "../assets/images/portfolio/img-10.png";
import Img11 from "../assets/images/portfolio/img-11.png";
import Img12 from "../assets/images/portfolio/img-12.png";

export const api = {
  services: [
    {
      id: 1,
      icon: <BsCodeSlash />,
      title: "Clean And Maintainable Code",
      desc: "You website code will be more maintainabe and reuseable. This will give you opportunity to easyly handle your website with learge scale.",
    },
    {
      id: 2,
      icon: <FaReact />,
      title: "Single Page Application(SPA)",
      desc: "Single Page Application (SPA). Provide progressive web application for your business or personal blog. This feature will provide you super fast website.",
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Back End With Firebase",
      desc: "Store your data with firebase. You can store Text, Image, Video etc. in online. This is how you can access you data world wide.",
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Website Live On Internet",
      desc: "You will able to see your website from anywhere in the world and share your wesite link to others.",
    },
  ],
  skills: [
    {
      id: 1,
      icon: <BsCodeSlash />,
      title: "Programming Languages",
      skillsItem: ["Jabascript", "Typescript"],
    },
    {
      id: 2,
      icon: <FaDatabase />,
      title: "Databases",
      skillsItem: ["Firebase"],
    },
    {
      id: 3,
      icon: <SiMaterialdesignicons />,
      title: "Design Tools",
      skillsItem: ["Figma", "Photoshop"],
    },
    {
      id: 4,
      icon: <SiLibrariesdotio />,
      title: "Libraries & Frameworks",
      skillsItem: ["React js", "Next js", "Redux", "Framer Motion", "Tailwind CSS", "Bootstrap", "Matrial UI"],
    },
    {
      id: 5,
      icon: <FaDev />,
      title: "Dev Tools",
      skillsItem: ["Git", "Github", "Browser Dev tools", "Webpack", "Gulp", "Rest Api"],
    },
    {
      id: 6,
      icon: <MdMiscellaneousServices />,
      title: "Miscellaneous",
      skillsItem: ["HTML", "CSS", "Sass", "CLI", "VS Code", "Problem Solving", "Markdown"],
    },
  ],
  portfolios: [
    {
      id: 23784,
      title: "EzyCourse",
      desc: "SaaS platform",
      image: Img12,
      codeLink: null,
      previewLink: "https://ezycourse.com",
    },
    {
      id: 33434,
      title: "CatchMap",
      desc: "Social Site",
      image: Img11,
      codeLink: null,
      previewLink: "https://catchmap.us",
    },
    {
      id: 1,
      title: "BuyNow",
      desc: "Fullstack E-commerce website.",
      image: Img1,
      codeLink: "https://github.com/musaddekali/buynow",
      previewLink: "https://buynow1.netlify.app/",
    },
    {
      id: 2,
      title: "BlogWeb",
      desc: "Blog Post website",
      image: Img2,
      codeLink: "https://github.com/musaddekali/blog-web",
      previewLink: "https://blog-web1.netlify.app/",
    },
    {
      id: 3,
      title: "Maher",
      desc: "Personal website",
      image: Img3,
      codeLink: "https://github.com/musaddekali/maher",
      previewLink: "https://musaddekali.github.io/maher/",
    },
    {
      id: 4,
      title: "TechMahid.V2",
      desc: "Company based website",
      image: Img4,
      codeLink: "https://github.com/musaddekali/web1",
      previewLink: "https://musaddekali.github.io/web1/",
    },
    {
      id: 5,
      title: "Dog Care",
      desc: "E-commerce website with blog",
      image: Img5,
      codeLink: "https://github.com/musaddekali/web3",
      previewLink: "https://musaddekali.github.io/web3/",
    },
    {
      id: 6,
      title: "Trafalgar",
      desc: "Affordable healthcare",
      image: Img6,
      codeLink: "https://github.com/musaddekali/trafalgar",
      previewLink: "https://musaddekali.github.io/trafalgar/",
    },
    {
      id: 7,
      title: "Loopstudio",
      desc: "Interactive VR",
      image: Img7,
      codeLink: "https://github.com/musaddekali/loopstudio",
      previewLink: "https://musaddekali.github.io/loopstudio/",
    },
    {
      id: 8,
      title: "TechMahid",
      desc: "Company based website",
      image: Img8,
      codeLink: "https://github.com/musaddekali/react-techmahid",
      previewLink: "https://musaddekali.github.io/react-techmahid/",
    },
    {
      id: 9,
      title: "Creative-Agency",
      desc: "Travel agency website",
      image: Img9,
      codeLink: "https://github.com/musaddekali/creative-agency/",
      previewLink: "https://musaddekali.github.io/creative-agency/",
    },
    {
      id: 10,
      title: "PXtoREM Converter",
      desc: "Px to Rem size converter.",
      image: Img10,
      codeLink: "https://github.com/musaddekali/pxconverter",
      previewLink: "https://musaddekali.github.io/pxconverter/",
    },
  ],
  resume: (<iframe className="resume_iframe" src="https://docs.google.com/document/d/e/2PACX-1vQYeRTuNwI5UA-Sk4YXcSdfjP78ckXMG0mmEqHcqDB22NVtofqzyESCSxk091Brf_5ZIwDCCoCDOAcx/pub?embedded=true" />),
  

};
