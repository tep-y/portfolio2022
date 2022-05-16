import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.9] };

const Projects = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
  }, []);

  return(
    <div>
      <Header />
      <main>
        { elements && elements.map(element => {
          return(
            <section className='projects' key={element.id}>
              <Link to={`/projects/${element.title}`} className='link-title' >
                <h2>{element.title}</h2>
              </Link>
              <div className='project-image'>
              <Link to={`/projects/${element.title}`} >
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  trasition={transition} 
                  src={element.image001}
                  alt={element.tile} 
                  />
               </Link>
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
};

export default Projects;