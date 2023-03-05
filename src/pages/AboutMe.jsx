import React from 'react'
import '../css/AboutMe.css'
const AboutMe = () => {
  return (
    <section className='about-me'>
      <h1 className='heading-about'>About Me</h1>
      <div className="about-content">
        <p>Hello, my name is Shiva and I am a full-stack web developer with experience in the MERN stack. I am also a student pursuing a degree in computer science.I have a passion for designing and developing web applications that provide value to users. My expertise in the MERN stack allows me to create dynamic and responsive web applications that are both intuitive and efficient.
          Throughout my academic and professional career, I have gained a strong foundation in computer science concepts and programming languages such as JavaScript, HTML, and CSS. I have also honed my skills in software development methodologies and project management, which allow me to deliver projects on time and within budget.
          When I'm not coding or studying, I enjoy exploring new technologies and attending tech conferences to stay up-to-date with the latest trends in the industry.
          Thank you for visiting my website, and feel free to reach out to me if you have any questions or if you're interested in working together on a project.</p>
      </div>
      <div className="about-contact">
        <button className='contact'>Contact Me &nbsp;  <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </section>
  )
}

export default AboutMe