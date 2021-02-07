import React from 'react';
import './Container.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ContainerLayout({ id, background }) {
    return (
        <div id={ id } style={{ backgroundColor: background}}>
        <CssBaseline />
        <Container maxWidth="md">
            <Typography component="div" style={{ height: '100vh' }} />
        </Container>
        </div>
    )
}

export default ContainerLayout
