import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './Header.css';
import theme from '../../Themes/Light Theme/LightTheme';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function NormalHeader() {
    return (
        <>
            <Box className="header-icon" component="span" m={1}>
                <Button href="#about">Logo</Button>
            </Box>
            <Box className="header-buttons" component="span" m={1}>
                <ThemeProvider theme={theme}>
                    <Button href="#about">About</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="#coding-challenges">Coding Challenges</Button>
                    <Button href="#contact" variant="outlined" color="primary">Contact</Button>
                </ThemeProvider>
            </Box>
        </>
    )
}
function ResponsiveHeader() {
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    const useStyles = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
      });
    const classes = useStyles();
    const [ toggle, setToggle ] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setToggle({ ...toggle, [anchor]: open });
    };
    return (
        <div>
            {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{"Menu"}</Button>
                <Drawer anchor={anchor} open={toggle[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </React.Fragment>
            ))}
        </div>
    )
}
let windowWidth = 0;

function Header() {
    const [widthToggle, setwidthToggle] = useState(false);
    const [ width, setwidth ] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setwidth(window.innerWidth);
    });
    useEffect(() => {
        if (width > 600) {
            setwidthToggle(true);
        } else {
            setwidthToggle(false);
        }
    }, [ width ]);
    return (
        <div className="header-container">
            <Container style={{ display: 'flex' }} maxWidth="lg">
                { widthToggle ? <NormalHeader /> : <ResponsiveHeader /> }
            </Container>
        </div>
    )
};

export default Header;
