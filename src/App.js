import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // State to keep track of which section to display
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

  // Function to change the current section
  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="app-header">
        <h1>Edge Computing Aspects of Web Technologies</h1>
        <nav>
          <ul>
            <li><button onClick={() => handleNavigation('home')}>Home</button></li>
            <li><button onClick={() => handleNavigation('content')}>Content</button></li>
            <li><button onClick={() => handleNavigation('taxonomy')}>Taxonomy</button></li>
            <li><button onClick={() => handleNavigation('team')}>Team</button></li>
          </ul>
        </nav>
      </header>

      {/* Conditionally Render Sections */}
      <div className="sections">
        {currentSection === 'home' && (
          <section id="home">
            <Home />
          </section>
        )}
        {currentSection === 'content' && (
          <section id="content">
            <Content />
          </section>
        )}
        {currentSection === 'taxonomy' && (
          <section id="taxonomy">
            <Taxonomy />
          </section>
        )}
        {currentSection === 'team' && (
          <section id="team">
            <Team />
          </section>
        )}
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
