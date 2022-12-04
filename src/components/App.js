import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/main.css';
import '../assets/fontawesome/css/all.css';

const Main = React.lazy(() => import('./Main'));
const Projects = React.lazy(() => import('./Projects'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const ProjectShow = React.lazy(() => import('./ProjectShow'));
const Contact = React.lazy(() => import('./Contact'));
const NotFound = React.lazy(() => import('./NotFound'));

const loader = (
  <div>
    <div className='loader'></div>
    <h3 className='center'>loading..</h3>
  </div>
);

const App = () => {
  const location = useLocation();
  
  return (
    <>
      <AnimatePresence initial={true} exitBeforeEnter>
        <React.Suspense fallback={loader}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:project" element={<ProjectShow />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </React.Suspense>
      </AnimatePresence>
    </>
  )
};

export default App;