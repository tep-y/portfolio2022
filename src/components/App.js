import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/fontawesome/css/all.css';
import Main from './Main';
import Projects from './Projects';
import Info from './Info';
import ProjectShow from './ProjectShow';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main backgroundColor={'#DFF8EB'} />} />
        <Route path="projects" element={<Projects backgroundColor={'#F7F7F7'}/>} />
        <Route path="info" element={<Info backgroundColor={'#EF946C'}/>} />
        <Route path="projects/:project" element={<ProjectShow />} />
      </Routes>
    </>
  )
};

export default App;