import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <Paper className="footer-container" elevation={0} square style={{ backgroundColor: '#2a4d69' }}>
            <Box className="content-box">
                <Typography>
                    Copyright @ 2021 Kevin Romero. All Rights Reserved.
                </Typography>
            </Box>
        </Paper>
    )
}

export default Footer
