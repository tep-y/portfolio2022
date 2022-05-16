import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Main = ({backgroundColor}) => {
  useEffect(() => {
    const bodyElm = document.querySelector('body');
    bodyElm.style.backgroundColor = backgroundColor;
  }, []);

  return(
    <div className='wrapper'>
      <Header />
      <nav>
        <div className="row">
          <div className="column">
          </div>
          <div className="column left">
            <div className="center-nav">
              <Link to="projects" className='link-main'><h3>Projects</h3></Link>
              <Link to="info" className='link-main'><h3>Info</h3></Link>
            </div>
          </div>
        </div>
      </nav> 
      <Footer />
    </div>
  )
}

export default Main;