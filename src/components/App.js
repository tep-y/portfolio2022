import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/main.css';
import '../assets/fontawesome/css/all.css';
import Main from './Main';
import Projects from './Projects';
import Info from './Info';
import ProjectShow from './ProjectShow';

const App = () => {
  return (
    <>
      <AnimatePresence intitial={false} exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Main backgroundColor={'#DFF8EB'} />} />
          <Route path="projects" element={<Projects backgroundColor={'#F7F7F7'}/>} />
          <Route path="info" element={<Info backgroundColor={'#EF946C'}/>} />
          <Route path="projects/:project" element={<ProjectShow />} />
        </Routes>
      </AnimatePresence>
    </>
  )
};

export default App;

// REMOVE BEFORE COMMITING / PUSHING
// TO DO:
// TRANSITIONS BETWEEN PAGES
// SCROLL ARROW
// CHANGE SCROLL ORIENTATION