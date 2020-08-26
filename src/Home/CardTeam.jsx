import React from 'react'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const usesStyles = makeStyles((theme) => ({
    root : {
        maxWidth : 400,
    },
    media : {
        height: 0,
        paddingTop : '56.25%',
    },   
}));

const CardTeam = () => {
    const classes = usesStyles();
    const post  = {
        title :'Team 1',
        description : 'TAMER ANAS ',
        date : '12 Nov',
        image : 'https://source.unsplash.com/random',
        imageTitle : 'Image Title '
    }
    return(
        <>
            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={post.image}
                title={post.imageTitle}
            />
            <CardContent>
                <Typography variant="h5" color="textSecondary" component="p">
                    {post.description}
                </Typography>
                <Typography variant="body2" align="center" color="textPrimary" gutterBottom>
                    Ingenieur Etude et Developpement Java et React Js
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}

export default CardTeam;