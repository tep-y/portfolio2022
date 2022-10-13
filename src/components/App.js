import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/main.css';
import '../assets/fontawesome/css/all.css';
import Main from './Main';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ProjectShow from './ProjectShow';
import NotFound from './NotFound';
import Contact from './Contact';

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:project" element={<ProjectShow />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
};

export default App;