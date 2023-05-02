// import React, { useEffect, useRef, useState } from "react";
// import "./Projects.scss";
// import { motion } from "framer-motion";
// import projectsImg from "../../assets/projectsImg/projects";
// import Project from "../../components/Project";

// const Projects = () => {
//   let outer = useRef();
//   let out = useRef();
//   const [key, setKey] = useState(0);
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     function updateSize() {
//       setWidth(outer.current.scrollWidth - out.current.offsetWidth + 32);
//       setKey((prev) => prev + 1);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//     // eslint-disable-next-line
//   }, [window.innerWidth]);

//   return (
//     <div className="app__projects-main">
//       <h2 className="app__head">Projects & Certificates</h2>
//       <motion.div
//         ref={out}
//         initial={{ paddingLeft: "50%", paddingRight: "50%" }}
//         whileInView={{ paddingLeft: 0, paddingRight: 0 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//       >
//         <motion.div key={key} ref={outer} className="app__projects">
//           <motion.div
//             className="app__projects-contain"
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             whileTap={{ cursor: "grabbing" }}
//           >
//             {projectsImg.map((project, index) => (
//               <Project project={project} key={index} />
//             ))}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Projects;
