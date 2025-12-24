import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import { useRef } from "react";
import { motion } from "motion/react";

function App() {
  const NavLink = {
    About: useRef(null),
    Project: useRef(null),
    Contact: useRef(null),
    Skills: useRef(null),
  };

  const scrollToComponent = (key) => {
    NavLink[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
     
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />

   
      <div className="relative z-10">
        <Navbar scrollToComponent={scrollToComponent} />

        <motion.section
          ref={NavLink.About}
          className="bg-[#030712]"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Home scrollToComponent={scrollToComponent} />
        </motion.section>

        <motion.section
          ref={NavLink.Skills}
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          ref={NavLink.Project}
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          ref={NavLink.Contact}
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
