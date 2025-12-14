import { useState } from 'react';
import { runModule01 } from './curriculum/01-ts-basics/01-primitives';
import { Module06 } from './curriculum/06-components/01-basic-components';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const handleRunModule01 = () => {
    console.clear();
    runModule01();
    alert("Check the browser console for Module 01 output!");
  };

  return (
    <div className="app-container">
      <header>
        <h1>React + TypeScript Curriculum</h1>
        <p>Select a module to view or run.</p>
      </header>

      <nav className="module-nav">
        <div className="nav-section">
          <h3>Phase 1: TS Fundamentals</h3>
          <button onClick={handleRunModule01}>
            Run Module 01 (Console)
          </button>
        </div>

        <div className="nav-section">
          <h3>Phase 2: React Core</h3>
          <button onClick={() => setActiveModule('06')}>
            View Module 06 (Components)
          </button>
        </div>
      </nav>

      <main className="content-area">
        {activeModule === '06' && <Module06 />}
        {!activeModule && <p>Select a module from the menu.</p>}
      </main>
    </div>
  );
}

export default App;
