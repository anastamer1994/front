import React from 'react';
import ReactPlayer from 'react-player';
import {Typography,Container,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const usesStyles = makeStyles((theme) => ({
     heroContent: {
       padding: theme.spacing(8, 0, 6),
     },
     gridContainer : {
         paddingBottom : 20,
     }
}));

const GuideVideo = () => {

    const classes = usesStyles();

    return(
        <>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
            Guide d'Utilisation
        </Typography>
        </Container>
        <Grid container  justify = "center" className={classes.gridContainer}>
           <ReactPlayer width='80%' height='650px' controls url='https://www.youtube.com/watch?v=m9ENgrwF7hI' />
        </Grid>
        </>
    )
}

export default GuideVideo;