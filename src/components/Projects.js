import React, { useEffect } from 'react';
import Header from './Header';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';

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
              <Link to={`/projects/${element.title}`} className='link-title' ><h2>{element.title}</h2></Link>
              <img src={element.image001} alt={element.tile} />
            </section>
          )
        })}
      </main>
    </div>
  )
};

export default Projects;