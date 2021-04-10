import React from 'react'
import './CodingChallenges.css';
import colors from '../../Themes/Light Theme/styles';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import challenges from '../../assets/Info/challenges';
import ContainerLayout from '../../Components/Container/Container';
import { Button, Grid } from '@material-ui/core';

function CodingChallenges() {
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          flexGrow: 1,
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '33.33%',
          flexShrink: 0,
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <ContainerLayout className="container-slide" id="coding-challenges" background={ colors.background }>
            <span id="coding-challenges-ref1"></span>
            <span id="coding-challenges-ref2"></span>
            <div className={`container-content challenges-container ${ classes.root }`}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <h1>Easy</h1>
                        { challenges.easy.map((accordion, key) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion key={ key } expanded={expanded === id} onChange={handleChange(id)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <Typography className={classes.heading}><code className={ type }>{ type }</code></Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        { name }
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        { description }
                                        <br/>
                                        <Button variant="outlined" href={ link } target="_blank" size="small" color="primary">
                                            Visit
                                        </Button>
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Grid>
                    <Grid item xs>
                        <h1>Medium</h1>
                        { challenges.medium.map((accordion, key) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion key={ key } expanded={expanded === id} onChange={handleChange(id)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography className={classes.heading}><code className={ type }>{ type }</code></Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        { name }
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        { description }
                                        <br/>
                                        <Button variant="outlined" href={ link } target="_blank" size="small" color="primary">
                                            Visit
                                        </Button>
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Grid>
                    <Grid item xs>
                        <h1>Hard</h1>
                        { challenges.hard.map((accordion, key) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion key={ key } expanded={expanded === id} onChange={handleChange(id)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <Typography className={classes.heading}><code className={ type }>{ type }</code></Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        { name }
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        { description }
                                        <br/>
                                        <Button variant="outlined" href={ link } target="_blank" size="small" color="primary">
                                            Visit
                                        </Button>
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        </ContainerLayout>
    )
}

export default CodingChallenges
