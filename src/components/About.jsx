import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", 0.1 * index, 0.5)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
            className='bg-tertiary rounded-[20px] py-5 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, my name is Shiva and I am a full-stack web
        developer with experience in the MERN stack.
        I am also a student pursuing a degree in computer science.
        I have a passion for designing and developing web applications that provide value to users.
        My expertise in the MERN stack allows me to create dynamic and responsive web applications that are both intuitive and efficient.
        Throughout my academic and professional career,
        I have gained a strong foundation in computer science concepts and programming languages such as JavaScript, HTML, and CSS.
        I have also honed my skills in software development methodologies and project management, which allow me to deliver projects
        on time and within budget. When I'm not coding or studying, I enjoy exploring new technologies and attending tech conferences to stay up-to-date with the latest trends in the industry.
        Thank you for visiting my website, and feel free to reach out to me if you have any questions or if you're interested in working together on a project.
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about"); 