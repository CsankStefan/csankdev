import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import imageReactMovies from "./ReactMoviesPC.png";
import Kassamap from "./Kassamap.png";
import KidTalesWorld from "./KidTalesWorld.png"
import QuickGist from "./Summarize.png"

const items = [
  {
    id: 1,
    title: "React Movies",
    img: imageReactMovies,
    desc: "Introducing my movie searcher webpage, a project where I leveraged APIs to seamlessly retrieve and display detailed information about movies. The user interface is designed to be intuitive and user-friendly, allowing visitors to effortlessly explore various movies. This project showcases my skills in web development and API integration.",
    link: "https://65a6dfdf0b8e67186843a850--zesty-maamoul-4552d5.netlify.app/",
  },
  {
    id: 2,
    title: "Košice Map",
    img: Kassamap,
    desc: "Introducing the Košice Map Android app—a sleek solution for discovering historical sites in Košice. Seamlessly blending modern tech with cultural exploration, this app reflects my expertise in mobile development. Explore the city's heritage effortlessly with interactive maps and insightful details—a testament to my commitment to innovative app solutions.",
    link: "https://play.google.com/store/apps/details?id=com.kosicemap.kosicemap",
  },
  {
    id: 3,
    title: "Kid Tales World",
    img: KidTalesWorld,
    desc: "Introducing my WordPress-based project dedicated to sharing magical tales tailored for young minds. In this endeavor, I've seamlessly blended the art of storytelling with technology to create an immersive and delightful experience for children and their families.",
    link: "https://kidtalesworld.com/",
  },

  {
    id: 4,
    title: "Quick Gist",
    img: QuickGist,
    desc: "Introducing my latest project: an AI summarizer webpage, brought to life with the power of OpenAI. Witness the fusion of human ingenuity and AI precision as it distills complex information into concise, insightful summaries. Revolutionizing the way we consume knowledge, this tool is your key to efficient and accessible learning."
    ,link: "https://65a6e04e3edb87198c282e90--teal-dango-5b9740.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="demoButton">See Demo</button>
            </a>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
