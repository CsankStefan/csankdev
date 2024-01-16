import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your
          <br /> brand grow and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
      
          <h1>
            <motion.b whileHover={{color:"#b80a0a"}}>My Proficiency</motion.b> Levels for
          </h1>
        </div>
        <div className="title">
          <h1>
          Programming <motion.b whileHover={{color:"#b80a0a"}}>Languages </motion.b>
          </h1>
        </div>
      </motion.div>
     
      <motion.div className="listContainer" variants={variants}>
       
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Python</h2>
          <img src="python.png
          " alt="" />
        <h3>Advanced</h3>
       

        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML</h2>
          <img src="html.png
          " alt="" />
        <h3>Advanced</h3>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CSS</h2>
          <img src="css.png
          " alt="" />
       <h3>Advanced</h3>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >

          <h2>Flutter</h2>
     <img src="flutter.png
          " alt="" />
        <h3>Intermediate</h3>
        </motion.div>
        <motion.div
          className="box lastItem"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React</h2>
          <img src="react.png
          " alt="" />
          
            <h3>Intermediate</h3>

        </motion.div>
       
      </motion.div>
    </motion.div>
  );
};

export default Services;
