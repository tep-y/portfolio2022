import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import elements from '../db.json';
import { Link } from 'react-router-dom';

const Projects = ({backgroundColor}) => {
  // const [loading, setLoading] = useState(true);
  // const [scrollarrow, setScrollarrow] = useState(true);

  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;

    // const timer = setTimeout(() => {
    //   setScrollarrow(false);
    // }, 5000);

    // return () => clearTimeout(timer)

  }, []);


  const imageVariants = { 
    hidden: {
      scale: 1,
      opacity: 0,
      y: 200
    },
    hover: {
      scale: 1.08
    },
    visible: {
      opacity: 0.5,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  const titleVariants = { 
    hidden: {
      scale: 1,
      opacity: 0,
      y: 400
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    },
    exit: {
      opacity: 0,
      y: 400,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
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
        repeat: 8,
        repeatType: 'reverse',
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

  // const scrollarrowVariants = {
  //   hidden: {
  //     opacity: 0
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       ease: 'easeIn',
  //       duration: 1,
  //       delay: 1
  //     }
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: {
  //       ease: 'easeOut',
  //       duration: 0.8
  //     }
  //   }

  // }

  return(
    <>
      {/* <div style={{display: loading ? 'block' : 'none', textAlign: 'center', margin: '100px'}}>
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
      </div> */}
      <div class="projects-container">
        <div className='projects'>
        { elements && elements.map(element => {
          return(
              <Link to={`/projects/${element.title}`} key={element.id} >
                <motion.h2
                  className='link-title'
                  variants={titleVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  {element.title}
                </motion.h2>
              </Link>
              )
            })}
        </div>
        <div class="sidebar">
          <p>hello</p>
        </div>
      </div>
    </>
  )
};

export default Projects;