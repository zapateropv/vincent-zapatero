import React from 'react'
import { skills } from '../skills'
import { motion } from 'motion/react'

// ✅ DEFINE VARIANTS HERE
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const BottomSkills = () => {
  return (
    <motion.div
      className="flex justify-center mt-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {skills.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#0B1320] py-5 flex flex-col items-center justify-center text-white
                       w-35 sm:w-60 rounded-xl border-gray-600 border cursor-pointer
                       hover:bg-[#111B2E] transition ease-in duration-200"
          >
            <img src={itemData.link} className="w-12 h-12" />
            <p className="mt-2 text-md">{itemData.title}</p>
            <p className="text-sm text-gray-500">{itemData.stack}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default BottomSkills
