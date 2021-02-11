import { Box, Button, makeStyles, Paper, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ContainerLayout from '../../Components/Container/Container';
import emailjs from 'emailjs-com';
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

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_6ydxn08', 'template_bqlcpy2', e.target, 'user_PXTlX7vDwNbtkwjS3hGg1')
            .then((result) => {
                alert(result.text);
                console.log(result.text);
            }, (error) => {
                alert(error.text);
                console.log(error.text);
            });
            e.target.reset();
        }
    return (
        <ContainerLayout className="container-slide" id="contact" background={ colors.lightBackground }>
            <Box className="container-content">
                <Paper className="paper-form" elevation={3}>
                    <form onSubmit={ sendEmail }>
                        <h1>Get in Touch</h1>
                        <TextField className="material-input" name="from_name" size="small" id="outlined-basic" label="Your email address" variant="outlined" />
                        <TextField className="material-input" name="_subject" size="small" id="outlined-basic" label="Subject" variant="outlined" />
                        <TextField className="material-input" name="message" size="small" multiline rows="4" id="outlined-basic" label="Message body" variant="outlined" />
                        <button type="submit">Send</button>
                    </form>
                </Paper>
            </Box>
        </ContainerLayout>
    )
}

export default Contact
