import { useState, useCallback } from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const PAGES = { Home, About, Work, Contact };

export default function App() {
  const [current, setCurrent] = useState('Home');
  const [animKey, setAnimKey] = useState(0);

  const navigate = useCallback((page) => {
    if (page === current) return;
    setCurrent(page);
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [current]);

  const PageComponent = PAGES[current];

  return (
    <>
      <Cursor />
      <div className="grain-overlay" />
      <Nav current={current} onNavigate={navigate} />
      <PageComponent key={animKey} onNavigate={navigate} />
    </>
  );
}
