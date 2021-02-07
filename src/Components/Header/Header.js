import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
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
            <div className={`${classes.root} content`}>
                <Box className="header-icon" component="span" m={1}>
                    <Button>Logo</Button>
                </Box>
                <Box className="header-buttons" component="span" m={1}>
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Coding Challenges</Button>
                    <Button size="small" variant="outlined" color="primary">Contact</Button>
                </Box>
            </div>
        </div>
    )
}

export default Header
