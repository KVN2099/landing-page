import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
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
            <div className={`${classes.root} content`}>
                <Box className="header-icon" component="span" m={1}>
                    <Button>Contacts</Button>
                </Box>
                <Box className="header-buttons" component="span" m={1}>
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Coding Challenges</Button>
                    <Button>Contacts</Button>
                </Box>
            </div>
        </div>
    )
}

export default Header
