import './App.css';
import Header from './Components/Header/Header';
import ContainerLayout from './Components/Container/Container';
import colors from './styles';

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerLayout id="about" background={ colors.white } />
      <ContainerLayout id="projects" background={ colors.lilac } />
      <ContainerLayout id="coding-challenges" background={ colors.lightBlue } />
      <ContainerLayout id="contact" background={ colors.lightGreen } />
    </div>
  );
}

export default App;
