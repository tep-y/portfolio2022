import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/css/project.css';
import elements from '../db.json';
import Header from './Header';

const ProjectShow = () => {
  const { project } = useParams();
  let item = elements.find(element => {return element.title === project});
  const title = item.title;
  const capTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return(
    <>
      { item ? ( 
        <>
      <div className='project-title'>
        <h2>{title}</h2>
        <img src={`../${item.image001}`} />
      </div>
      <div className='project-middle'>
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
      </div>
      <div className='project-last'>
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
      </div>
      </>
      )
      : <div style={{textAlign: 'center'}}>No project to see here. Try again :)</div>}
      <div className='footer-project'>
            <Link to='/projects'><p>Back to all projects</p></Link>
      </div>
    </>
  )
};

export default ProjectShow;