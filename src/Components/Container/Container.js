import React from 'react';
import './Container.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

function ContainerLayout(props) {
    const { id, background } = props;
    return (
        <div id={ id } style={{ backgroundColor: background}}>
        <CssBaseline />
        <Container maxWidth="lg">
            <Box component="div" className="typography">
                { props.children }
            </Box>
        </Container>
        </div>
    )
}

export default ContainerLayout
