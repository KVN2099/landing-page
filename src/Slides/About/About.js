import { Box, Button, Paper, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import ContainerLayout from '../../Components/Container/Container'
import ContentBox from '../../Components/ContentBox/ContentBox'
import logo from '../../assets/The Kevo Logo-01.png';
import theme from '../../Themes/Light Theme/LightTheme';
import colors from '../../Themes/Light Theme/styles';
import './About.css';

function About() {
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
      <ContainerLayout className="container-slide" id="about" background={ colors.white }>
        <Box className="container-content">
          <ContentBox className={ classes.root } size="small">
              <Paper className="paper" elevation={3}>
                <div>
                  <h1>Kevin Romero</h1>
                  <p>I am a self-taught software developer, casual gamer, and full-time geek.</p>
                  <ThemeProvider theme={theme}>
                    <Button href="#projects-ref" variant="contained" color="primary" disableElevation>
                      Check Out My Projects!
                    </Button>
                    <Button href="#contact" variant="contained" color="secondary" disableElevation>
                      And my social media
                    </Button>
                  </ThemeProvider>
                </div>
              </Paper>
          </ContentBox>
          <ContentBox size="large" image={ logo }></ContentBox>
        </Box>
      </ContainerLayout>
    )
}

export default About
