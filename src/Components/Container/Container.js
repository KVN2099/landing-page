import React from 'react';
import './Container.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ContainerLayout(props) {
    const { id, background } = props;
    return (
        <div id={ id } style={{ backgroundColor: background}}>
        <CssBaseline />
        <Container maxWidth="lg">
            <Typography component="div" className="typography">
                { props.children }
            </Typography>
        </Container>
        </div>
    )
}

export default ContainerLayout
