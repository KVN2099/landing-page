import './App.css';
import Header from './Components/Header/Header';
import ContainerLayout from './Components/Container/Container';
import colors from './Themes/Light Theme/styles';
import About from './Slides/About/About';
import Projects from './Slides/Projects/Projects';
import CodingChallenges from './Slides/Coding Challenges/CodingChallenges';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CodingChallenges />
      <ContainerLayout className="container-slide" id="contact" background={ colors.lightBackground } />
    </div>
  );
}

export default App;
