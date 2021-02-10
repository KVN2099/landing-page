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
import { Grid } from '@material-ui/core';

function CodingChallenges() {
    console.log(challenges);
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
            <div className={`container-content challenges-container ${ classes.root }`}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        { challenges.easy.map((accordion) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion expanded={expanded === id} onChange={handleChange(id)}>
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
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Grid>
                    <Grid item xs>
                        { challenges.medium.map((accordion) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion expanded={expanded === id} onChange={handleChange(id)}>
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
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </Grid>
                    <Grid item xs>
                        { challenges.hard.map((accordion) => {
                            const { id, type, name, description, link } = accordion;
                            return (
                                <Accordion expanded={expanded === id} onChange={handleChange(id)}>
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
