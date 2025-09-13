// /src/App.jsx

import './App.css';
import AnimatedFeatures from './components/AnimatedFeatures';

function App() {
  return (
    <div className="App">
      {/* You can add a Hero/Header section here if you want */}
      <header style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: 'white' }}>
        <h1>Scroll Down to See the Magic</h1>
      </header>

      <AnimatedFeatures />

      {/* You can add a footer or more content here */}
      <footer style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: 'white' }}>
        <h1>End of the Page</h1>
      </footer>
    </div>
  );
}

export default App;
