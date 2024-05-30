import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import Background from './components/Background';
import './index.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <Background />
      <div className="flex justify-center items-center min-h-screen bg-black relative">
        <div className="border-4 border-white w-full max-w-7xl h-full p-8 box-border overflow-hidden relative z-10">
          <div className="relative flex h-full">
            <NavBar />
            <div className="flex-grow bg-black text-white">
              <AnimatedRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
