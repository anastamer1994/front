import React from 'react'
import {Typography,Grid,Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NumberValue from './NumberValue';

const usesStyles = makeStyles((theme) => ({
    gridContainer : {
        maxWidth : '100%',   
     },
    heroContent: {
      padding: theme.spacing(6, 0, 4),
    },
}));

const BlockNumbers = () => {
    
    const classes = usesStyles();

    return(
        <>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
                Statistiques 
            </Typography>
            </Container>
            <Grid container spacing={2} justify = "center" className={classes.gridContainer}>               
                <Grid item xs={12} sm={6} md={3} spacing={2} align="center" >
                    <NumberValue />
                </Grid>
                <Grid item xs={12} sm={6} md={3} spacing={2} align="center"  >
                    <NumberValue />
                </Grid>
                 <Grid item xs={12} sm={6} md={3} spacing={2} align="center"  >
                    <NumberValue />
                </Grid>
            </Grid>
        </>
    )
}

export default BlockNumbers;