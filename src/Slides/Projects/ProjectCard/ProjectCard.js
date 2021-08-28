import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';

function ProjectCard({ title, description, link, image, tags = [] }) {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(0),
          textAlign: 'center',
          color: "#ffffff",
          backgroundColor: "#333333"
        },
        media: {
            height: 140,
        },
    }));
    const classes = useStyles();
    return (
        <Grid item sm={4}>
            <Card style={{ minWidth: "150px" }}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={ image }
                    title={ title }
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        { title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { description }
                    </Typography>
                    <Grid style={{ marginTop:'10px' }} container spacing={1}>
                        {tags.map((tag, key) => {
                            const paper_style = { 
                                backgroundColor: tag.color, 
                                display: 'inline-block',
                                padding: '2px 7px',
                                border: 'none',
                                fontSize: '16px',
                                color: '#ffffff',
                                borderRadius: '10px'
                            }
                            return (
                                <Grid textAlign="center" backgroundColor="#000000" item sm={4.1}>
                                    <Paper elevation={0} style={paper_style} color="#000000">{tag.name}</Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
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
