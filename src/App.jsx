import React, { Suspense, useContext } from 'react';
import Layout from './components/layout/Layout';
import { ThemeContext } from './context/ThemeContext';

const Home = React.lazy(() => import('./components/sections/Home'));
const About = React.lazy(() => import('./components/sections/About'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Certificates = React.lazy(() => import('./components/sections/Certificates'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const Blog = React.lazy(() => import('./components/sections/Blog'));

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Certificates />
          <Contact />
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
