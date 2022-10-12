import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../assets/css/project.css';
import elements from '../db.json';
import Back from './Back';

const ProjectShow = () => {
  const { project } = useParams();
  let item = elements.find(element => {return element.title === project});
  const title = item.title;
  const capTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const [ ref, inView ] = useInView();
  const [ ref2, inView2 ] = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if(inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
          delay: 0.6
        }
      })
    }
    if (!inView) {
      animation.start({
        x: '100vw',
        opacity: 0
      })
    }
  }, [inView]);

  useEffect(() => {
    if(inView2) {
      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
          delay: 0.3
        }
      })
    }
    if (!inView2) {
      animation2.start({
        x: '-100vw',
        opacity: 0
      })
    }
  }, [inView2]);

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
  }

  return(
    <>
      <Back />
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
        ref={ref}
        animate={animation}
        exit={{opacity: 0, transition: {delay: 0.8}}}
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
        ref={ref2} animate={animation2} 
        exit={{opacity: 0, transition: {delay: 0.8}}}
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
      : <div style={{textAlign: 'center'}}><h3>No project to see here. Try again :)</h3></div>}
      <div className='footer-project'>
            <Link to='/projects'><p>Back to all projects</p></Link>
      </div>
    </>
  )
};

export default ProjectShow;