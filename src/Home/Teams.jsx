import React from 'react'
import {Typography,Container, Grid, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CardTeam from './CardTeam';

const usesStyles = makeStyles((theme) => ({
    gridContainer : {
        maxWidth : '102%'        
     },
    heroContent: {
      padding: theme.spacing(6, 0, 4),
    },
}));

const Teams = () => {

    const classes = usesStyles();
    return(
        <>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                Notre Equipe 
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Notre Equipe reste toujours a votre Disposition en toute Corruprion 
            </Typography>
        </Container>
        <Grid container  justify='center' spacing={2} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={3} spacing={2} align="center" >
                        <CardTeam />
                </Grid>
                <Grid item xs={12} sm={6} md={3} spacing={2} align="center" >
                        <CardTeam />
                </Grid>
                <Grid item xs={12} sm={6} md={3} spacing={2} align="center" >
                        <CardTeam />
                </Grid>
        </Grid>
        </>
    )
}

export default Teams;