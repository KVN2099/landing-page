import './App.css';
import Header from './Components/Header/Header';
import About from './Slides/About/About';
import Projects from './Slides/Projects/Projects';
import CodingChallenges from './Slides/Coding Challenges/CodingChallenges';
import Contact from './Slides/Contact Me/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CodingChallenges />
      <Contact />
    </div>
  );
}

export default App;
