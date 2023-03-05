import React from 'react'
import "../css/Skills.css"
import { html, css, javascript, reactjs, mongoDb } from '../assets'
const Skills = () => {
  return (
    <section className='skills'>
      <h1 className='skills-title'>Skills</h1>
      <div className="skills-card">
        <div className="card-details">
          <div className="card-img">
            <img src={html} alt="html-5" />
          </div>
          <div className="card-title">
            <span>Html-5</span>
            <p>HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). </p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={css} alt="html-5" />
          </div>
          <div className="card-title">
            <span>CSS</span>
            <p>Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page. It describes how a webpage should look: it prescribes colors, fonts, spacing, and much more. In short, you can make your website look however you want. CSS lets developers and designers define how it behaves, including how elements are positioned in the browser.</p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={javascript} alt="html-5" />
          </div>
          <div className="card-title">
            <span>JavaScript</span>
            <p>JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages.</p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={reactjs} alt="html-5" />
          </div>
          <div className="card-title">
            <span>ReactJs</span>
            <p>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook.</p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={mongoDb} alt="html-5" />
          </div>
          <div className="card-title">
            <span>MongoDb</span>
            <p>MongoDB, the most popular NoSQL database, is an open-source document-oriented database. The term ‘NoSQL’ means ‘non-relational’. It means that MongoDB isn’t based on the table-like relational database structure but provides an altogether different mechanism for storage and retrieval of data. This format of storage is called BSON ( similar to JSON format). </p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={html} alt="html-5" />
          </div>
          <div className="card-title">
            <span>Html-5</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis suscipit minima autem vel debitis neque voluptatem, numquam error consequatur rem nemo velit deserunt eos officia, quia impedit adipisci eaque?</p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={html} alt="html-5" />
          </div>
          <div className="card-title">
            <span>Html-5</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis suscipit minima autem vel debitis neque voluptatem, numquam error consequatur rem nemo velit deserunt eos officia, quia impedit adipisci eaque?</p>
          </div>
        </div>

        <div className="card-details">
          <div className="card-img">
            <img src={html} alt="html-5" />
          </div>
          <div className="card-title">
            <span>Html-5</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis suscipit minima autem vel debitis neque voluptatem, numquam error consequatur rem nemo velit deserunt eos officia, quia impedit adipisci eaque?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills