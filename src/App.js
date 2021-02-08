import './App.css';
import Header from './Components/Header/Header';
import ContainerLayout from './Components/Container/Container';
import colors from './Themes/Light Theme/styles';
import { Box, Button } from '@material-ui/core';
import ContentBox from './Components/ContentBox/ContentBox';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import theme from './Themes/Light Theme/LightTheme';
import mainImage from './assets/main-image.png';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      }
    },
  }));
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <ContainerLayout className="container-slide" id="about" background={ colors.white }>
        <Box className="container-content">
          <ContentBox className={ classes.root } size="small">
              <Paper className="paper" elevation={3}>
                <div>
                  <h1>Kevin Romero</h1>
                  <p>I am a self-taught software developer, casual gamer, and full-time geek.</p>
                  <ThemeProvider theme={theme}>
                    <Button href="#projects" variant="contained" color="primary" disableElevation>
                      Check Out My Projects!
                    </Button>
                    <Button href="#projects" variant="contained" color="secondary" disableElevation>
                      And my social media
                    </Button>
                  </ThemeProvider>
                </div>
              </Paper>
          </ContentBox>
          <ContentBox size="large" image={ mainImage }></ContentBox>
        </Box>
      </ContainerLayout>
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
