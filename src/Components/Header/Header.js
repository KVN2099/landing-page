import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
    return (
        <div className="header-container">
            <Container style={{ display: 'flex' }} maxWidth="md">
                <Box className="header-icon" component="span" m={1}>
                    <Button>Contacts</Button>
                </Box>
                <Box className="header-buttons" component="span" m={1}>
                    <Button href="#about">About</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="#coding-challenges">Coding Challenges</Button>
                    <Button href="#contact" variant="outlined" color="primary">Contact</Button>
                </Box>
            </Container>
        </div>
    )
}

export default Header
