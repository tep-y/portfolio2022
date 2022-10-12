import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/main.css';
import '../assets/fontawesome/css/all.css';
import Main from './Main';
import Projects from './Projects';
import Info from './Info';
import ProjectShow from './ProjectShow';
import NotFound from './NotFound';

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Main backgroundColor={'#DFF8EB'} />} />
          <Route path="projects" element={<Projects backgroundColor={'#F7F7F7'}/>} />
          <Route path="info" element={<Info backgroundColor={'#EF946C'}/>} />
          <Route path="projects/:project" element={<ProjectShow />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
};

export default App;