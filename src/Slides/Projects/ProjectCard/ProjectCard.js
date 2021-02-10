import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import imageStatic from '../../../assets/main-image.png';

function ProjectCard({ title, description, link, image }) {
    console.log(image);
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
        <Grid item xs>
            <Card style={{ minWidth: "150px" }}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={ `../../../assets/${image}` }
                    title={ title }
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { description }
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={ link } target="_blank" size="small" color="primary">
                        Visit
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard
