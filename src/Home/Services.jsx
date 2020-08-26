import React from 'react';
import CardService from './CardService';
import {Grid, Typography,Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const usesStyles = makeStyles((theme) => ({
      gridContainer : {
         maxWidth : '102%'        
      },
      paper: {
         textAlign: 'center',
         color: theme.palette.text.secondary,
         maxHeight : 10
       },
       heroContent: {
         padding: theme.spacing(8, 0, 6),
       },
}));

const Services = () => {

 const classes = usesStyles();    
    return (
        <>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
               Actualités
            </Typography>
        </Container>
        <Grid container spacing={2} justify = "center" className={classes.gridContainer}>
           
            <Grid item xs={12} sm={6} md={3} spacing={2} align="center" >
                <CardService />
             </Grid>
             <Grid item xs={12} sm={6} md={3} spacing={2} align="center">
                <CardService />
             </Grid>
             <Grid item xs={12} sm={6} md={3} spacing={2} align="center">
                <CardService />
             </Grid>
             <Grid item xs={12} sm={6} md={3} spacing={2} align="center">
                <CardService />
             </Grid>
        </Grid>
        </>           
    )
}

export default Services;