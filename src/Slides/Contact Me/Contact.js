import { Box, Button, makeStyles, Paper, Snackbar, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import ContainerLayout from '../../Components/Container/Container';
import emailjs from 'emailjs-com';
import colors from '../../Themes/Light Theme/styles';
import SendIcon from '@material-ui/icons/Send';
import './Contact.css';
import SocialMedia from '../../Components/Social Media Bar/SocialMedia';

function Contact() {
    const [open, setOpen] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ severity, setSeverity ] = useState("");

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
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
        button: {
            margin: theme.spacing(1),
          },
      }));
    
    const classes = useStyles();

    function setError(error) {
        setSeverity("error");
        handleClick();
    }

    function sendEmail(e) {
        e.preventDefault();
        if (validateFields(e.target)) {
            emailjs.sendForm('service_26au5on', 'template_zcr2y22', e.target, 'WDXIQZupEse5Dek9d')
                .then((result) => {
                    setSeverity("success");
                    setAlertMessage('Email sent! I will get back to you soon.');
                    handleClick();
                    console.log(result.text);
                }, (error) => {
                    setAlertMessage("An error ocurred. Please try again.")
                    setError();
                });
                e.target.reset();
        } else {
            setError();
        }
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    function validateFields(fields) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(fields.from_name.value).toLowerCase())) {
            setAlertMessage("Please use a valid email address.")
            return false;
        }
        if (fields._subject.value.replace(/\s+/g, '') == "") {
            setAlertMessage("Please type a subject.")
            return false;
        }
        if (fields.message.value.replace(/\s+/g, '') == "") {
            setAlertMessage("Please send a message.")
            return false;
        }
        return true;
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={ classes.button }
                            startIcon={ <SendIcon /> }
                        >
                            Send Email
                        </Button>
                        <Snackbar open={ open } autoHideDuration={ 0 } onClose={ handleClose }>
                            <Alert onClose={ handleClose } severity={ severity }>
                                { alertMessage }
                            </Alert>
                        </Snackbar>
                    </form>
                    <SocialMedia />
                </Paper>
            </Box>
        </ContainerLayout>
    )
}

export default Contact
