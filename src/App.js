// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="app-header">
        <h1>A Survey on Edge Computing Aspects of Web Technologies</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#content">Content</a></li>
            <li><a href="#taxonomy">Taxonomy</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <div className="sections">
        <section id="home">
          <Home />
        </section>
        <section id="content">
          <Content />
        </section>
        <section id="taxonomy">
          <Taxonomy />
        </section>
        <section id="team">
          <Team />
        </section>
      </div>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollTop}>
          ↑
        </button>
      )}

      <footer>
        <p>&copy; 2024 Survey on Edge Computing</p>
      </footer>
    </div>
  );
}

export default App;
