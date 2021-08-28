import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import ContainerLayout from '../../Components/Container/Container';
import colors from '../../Themes/Light Theme/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Projects.css';

import projects from '../../assets/Info/projects';
import ProjectCard from './ProjectCard/ProjectCard';

function Projects() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        media: {
            height: 140,
        },
    }));
    const classes = useStyles();
    return (
        <>
            <ContainerLayout className="container-slide" id="projects" background={ colors.secondary }>
                <span id="projects-ref"></span>
                <Box className={`container-content ${ classes.root }`}>
                    <Grid container spacing={3}>
                            {projects.map((project, key) => {
                                return (
                                    <ProjectCard 
                                    key={ key }
                                    title={ project.title }
                                    description={ project.description }
                                    link={ project.link }
                                    image={ project.image }
                                    tags={ project.tags } />
                                )
                            })}
                    </Grid>
                </Box>
            </ContainerLayout>
        </>
    )
}

export default Projects
