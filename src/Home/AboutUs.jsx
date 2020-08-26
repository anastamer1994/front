import React from 'react'
import {Grid, Typography,Container,Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Image from 'material-ui-image';
import CssBaseline from '@material-ui/core/CssBaseline';

const usesStyles = makeStyles((theme) => ({
       heroContent: {
         padding: theme.spacing(8, 0, 0),
         marginBottom : 0
       },
       paper :{
           padding : theme.spacing(0),
           align:'center',
       },
       paperDesc :{
        padding : theme.spacing(6),
        align:'center',
    }

}));

const AboutUs = () => {

    const classes = usesStyles(); 
    const image = {url :'https://patch.com/img/cdn20/users/22926785/20190430/101333/styles/raw/public/BrooklineHighSchoolJennaFisher.jpg'}
    
    return(
        <>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                A Propos de Nous ?
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Nous detaillons dans cette container la description de notre societe 
            </Typography>
        </Container>
        <Container maxWidth = 'lg' style={{marginTop:30}}>
            <Grid container spacing={8}>
                <Grid item  xs={12} md={6} sm={4} >
                 
                        <Typography variant="h4">
                             Histoire 
                        </Typography>
                        <br /><br />
                         <Typography variant="h5" paragraph>
                             body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <br />
                        <Typography variant="h5" paragraph>
                             body1. Lorem ipsum dolor sit amet, consectetur. unde suscipit, neque doloribus.
                        </Typography>
                </Grid>
                <Grid item  xs={12} md={6} sm={4}>
                      <Paper variant='outlined' className={classes.paper}>
                          <Image src={image.url} />
                      </Paper> 
                </Grid>
                <Grid item  xs={12} md={6} sm={4}>
                      <Paper variant='outlined' className={classes.paper}>
                          <Image src={image.url} />
                      </Paper> 
                </Grid>
                <Grid item  xs={12} md={6} sm={4} >
                        <Typography variant="h4">
                             Construction
                        </Typography>
                        <br /><br />
                         <Typography variant="h5" paragraph>
                             body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <br />
                        <Typography variant="h5" paragraph>
                             body1. Lorem ipsum dolor sit amet, consectetur. unde suscipit neque doloribus.
                        </Typography>
                </Grid> 
            </Grid>
        </Container>
       </>
    )
}

export default AboutUs;