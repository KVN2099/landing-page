import './App.css';
import Header from './Components/Header/Header';
import ContainerLayout from './Components/Container/Container';
import colors from './Themes/Light Theme/styles';
import { Box } from '@material-ui/core';
import About from './Slides/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ContainerLayout className="container-slide" id="projects" background={ colors.secondary }>
        <Box className="container-content">
        
        </Box>
      </ContainerLayout>
      <ContainerLayout className="container-slide" id="coding-challenges" background={ colors.background } />
      <ContainerLayout className="container-slide" id="contact" background={ colors.lightBackground } />
    </div>
  );
}

export default App;
