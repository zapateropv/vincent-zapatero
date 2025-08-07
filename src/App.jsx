import Home from "./pages/Home";
import dayjs from 'dayjs';
import { FiAlignJustify } from "react-icons/fi";
import { useState, useRef } from 'react';
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import { motion } from "motion/react"
function App() {
  const [toggle, setToggle] = useState(false);


  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setToggle(false); 
  };

  
  const birthDate = dayjs("2006-06-17");
  const today = dayjs();
  let age = today.year() - birthDate.year();
  const thisYearsBirthday = birthDate.year(today.year());
  const bday = today.isBefore(thisYearsBirthday) ? age - 1 : age;

  const about = `I’m a passionate ${bday}-year-old BSIT student at the University of Perpetual Help Dalta, actively honing my skills to pursue a career as a Full Stack Developer. Based in the Philippines, I am on an exciting journey to blend my love for technology with a relentless drive for innovation.`;

  return (
    <div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
      
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* All content above background */}
      <div className="relative z-30">

       
        <div className="flex justify-around items-center p-5">
          <p className="text-blue-900 cursor-pointer text-2xl font-archivo border-b-2 border-transparent hover:border-b-red-500 transition-all duration-200">
            Vincent.dev
          </p>

          {/* navbar <3 */}
          <ul className="hidden sm:flex justify-between items-center gap-10 text-lg font-roboto font-semibold text-gray-700">
            <li onClick={() => scrollToSection(homeRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Home</li>
            <li onClick={() => scrollToSection(skillsRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Skills</li>
            <li onClick={() => scrollToSection(projectRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Projects</li>
            <li onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Contact</li>
          </ul>

        
          <FiAlignJustify className="sm:hidden text-2xl cursor-pointer" onClick={() => setToggle(!toggle)} />

          {/* para sa mobile view  */}
          <div className={`transition-all duration-700 ease-in-out bg-white absolute h-64 top-12 right-0 w-48 z-50 shadow-lg rounded-lg sm:hidden ${toggle ? "opacity-100" : "hidden"}`}>
            <ul className="p-5 flex flex-col gap-5 text-lg">
              <li onClick={() => scrollToSection(homeRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Home</li>
              <li onClick={() => scrollToSection(skillsRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Skills</li>
              <li onClick={() => scrollToSection(projectRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Projects</li>
              <li onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:border-b-red-500 border-b-2 border-transparent transition-all duration-200">Contact</li>
            </ul>
          </div>
        </div>

        
        <motion.div
          ref={homeRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Home about={about} />
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Skills />
        </motion.div>

        <motion.div
          ref={projectRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Project />
        </motion.div>

        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>


      </div>
    </div>
  );
}

export default App;
