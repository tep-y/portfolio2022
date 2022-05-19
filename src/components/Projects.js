import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';

const Projects = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
  }, []);

  const [loading, setLoading] = useState(true);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
        when: 'beforeChildren'
      }
    }
  }

  const imageVariants = { 
    hidden: {
      scale: 1
    },
    hover: {
      scale: 1.08
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        delay: 0.6,
        duration: 1
      }
    }
  };

const titleVariants = { 
  exit: {
    y: '80vw',
    opacity: 0,
  transition: {
    delay: 0.8,
    duration: 1,
    ease: 'easeOut'
    }
  }
};

  const loaderVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: [0, 1],
      transition: {
        yoyo: 8,
        delay: 1,
        duration: 1.6,
        ease: 'easeInOut'
      }
    }
  }
  const spinnerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: .6
      }
    }
  }

  return(
    <>
      <div style={{display: loading ? 'block' : 'none', textAlign: 'center', margin: '100px'}}>
        <motion.h5
          variants={loaderVariants}
          initial='hidden'
          animate='visible'
        >
          loading
        </motion.h5>
        <motion.div 
          className='loader'
          variants={spinnerVariants}
          initial='hidden'
          animate='visible'
        >
        </motion.div>
      </div>
      <motion.main 
        variants={containerVariants} 
        initial='hidden' 
        animate='visible' 
        exit='exit'
      >
        { elements && elements.map(element => {
          return(
            <section className='projects' key={element.id} style={{display: loading ? 'none' : 'block'}}>
              <Link to={`/projects/${element.title}`} className='link-title' >
                <motion.h2
                  variants={titleVariants}
                  exit='exit'
                >
                  {element.title}
                </motion.h2>
              </Link>
              <div className='project-image'>
              <Link to={`/projects/${element.title}`} >
                <motion.img 
                  variants={imageVariants}
                  initial='hidden'
                  whileHover='hover'
                  animate='visible'
                  exit='exit'
                  src={element.image001}
                  alt={element.title} 
                  onLoad={() => setLoading(false)}
                  />
                </Link>
              </div>
            </section>
          )
        })}
      </motion.main>
    </>
  )
};

export default Projects;