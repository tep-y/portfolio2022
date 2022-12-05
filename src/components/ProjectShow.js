import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/css/project.css';
import elements from '../db.json';
import BackHome from './BackHome';

const ProjectShow = () => {
  const { project } = useParams();
  let item = elements.find(element => {return element.title === project});
  const title = item.title;
  const capTitle = title.charAt(0).toUpperCase() + title.slice(1);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.backgroundColor = "#F7F7F7";
  }, [])

  const mainVariants = {
    hidden: {
      y: 200,
      opacity: 0
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
      y: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  const animationBottomVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  return(
    <>
      <BackHome />
      { item ? ( 
        <>
      <motion.div 
        className='project-title'
        variants={mainVariants}
        initial='hidden'
        animate='visible'
        exit="exit"
      >
        <h2>
          {title}
        </h2>
        <img 
          src={`../${item.image001}`}
        />
      </motion.div>
      <motion.div 
        className='project-middle'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants}
      >
        { !item.image002 ? <></>
        : <>
          { item.image002.includes('.mp4')
            ? ( 
              <video
                autoPlay={true} 
                loop={true}
                controls={false} 
                playsInline
                muted  
              >
                <source src={`../${item.image002}`} type="video/mp4"/>
              </video>
            )
            : <img src={`../${item.image002}`} /> 
          }
          </>
        }
        <p>{`${item.description}`}</p>
      </motion.div>
      <motion.div 
        className='project-last' 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationBottomVariants}
      >
        <div className='project-images'>
          { item.image003 ? (
            <img src={`../${item.image003}`} />
            )
          : <></> }
          { item.image004 ? (
            <img src={`../${item.image004}`} />
          ) 
          : <></> }
        </div>

        { item.detail && item.link ? (
          <>
            <p>{item.detail}</p>
            <p><a href={item.link} target='_blank' className='project-link'>{capTitle}</a></p>
          </>
        )
        : <>
          { item.detail ? ( 
            <p>{item.detail}</p>
            )
            : <p><a href={item.link} target='_blank' className='project-link'>{capTitle}</a></p>
          }
          </>
        }
      </motion.div>
      </>
      )
      : <div className='center'><h3>No project to see here. Try again :)</h3></div>}
      <motion.div 
        className='footer-project'
        variants={mainVariants}
        exit='exit'
      >
            <Link to='/projects'><p>Back to all projects</p></Link>
      </motion.div>
    </>
  )
};

export default ProjectShow;