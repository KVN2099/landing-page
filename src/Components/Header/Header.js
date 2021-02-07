import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Header() {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#D9E4FB',
          },
          secondary: {
            main: '#f44336',
          },
        },
      });
    return (
        <div className="header-container">
            <Container style={{ display: 'flex' }} maxWidth="md">
                <Box className="header-icon" component="span" m={1}>
                    <Button>Logo</Button>
                </Box>
                <Box className="header-buttons" component="span" m={1}>
                    <Button href="#about">About</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="#coding-challenges">Coding Challenges</Button>
                    <Button href="#contact" variant="outlined" color="primary">Contact</Button>
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Coding Challenges</Button>
                    <Button size="small" variant="outlined" color="primary">Contact</Button>
                </Box>
            </Container>
        </div>
    )
}

export default Header
