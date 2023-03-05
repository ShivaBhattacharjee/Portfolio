import React from 'react'
import '../css/Projects.css'
const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div className="filter">
        <button>All</button>
        <button>Web</button>
        <button>App</button>
      </div>
      <div className="projects-showcase">
        <div className="showcase-card">
          <div className="shocase-img"></div>
          <div className="showcase-title">Animetrix</div>
          <div className="showcase-description"></div>
        </div>

        <div className="showcase-card">
          <div className="shocase-img"></div>
          <div className="showcase-title">Animetrix</div>
          <div className="showcase-description"></div>
        </div>

        <div className="showcase-card">
          <div className="shocase-img"></div>
          <div className="showcase-title">Animetrix</div>
          <div className="showcase-description"></div>
        </div>

        <div className="showcase-card">
          <div className="shocase-img"></div>
          <div className="showcase-title">Animetrix</div>
          <div className="showcase-description"></div>
        </div>
      </div>
    </section>
  )
}

export default Projects