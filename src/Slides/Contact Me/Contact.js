import { Box, Button, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ContainerLayout from '../../Components/Container/Container';
import ContentBox from '../../Components/ContentBox/ContentBox';
import theme from '../../Themes/Light Theme/LightTheme';
import colors from '../../Themes/Light Theme/styles';
import './Contact.css';

function Contact() {
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
        <ContainerLayout className="container-slide" id="contact" background={ colors.lightBackground }>
            <Box className="container-content">
                <ContentBox className={ classes.root } size="small">
                    <Paper className="paper" elevation={3}>
                        <div>
                        <h1>Get in Touch</h1>
                        <ThemeProvider theme={ theme }>
                            <Button href="#projects" variant="contained" color="primary" disableElevation>
                            Check Out My Projects!
                            </Button>
                            <Button href="#contact" variant="contained" color="secondary" disableElevation>
                            And my social media
                            </Button>
                        </ThemeProvider>
                        </div>
                    </Paper>
                </ContentBox>
                <ContentBox size="large" style={{ backgroundColor: 'green' }}></ContentBox>
            </Box>
        </ContainerLayout>
    )
}

export default Contact
