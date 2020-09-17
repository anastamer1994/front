import React from 'react';
import {Grid,Container,CssBaseline,Link,Box,Avatar} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        minHeight:'94vh',
        marginBottom: theme.spacing(2),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : 'white',
      },
      form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
      submit: {
        margin: theme.spacing(3, 0, 2),
        },
  }));

const Header = () => {

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      };
    const classes  = useStyles();
    const post = {
                    title :'Title Test Test',
                    description : 'Lopsem Lopsel Lopsem shhosq hhqs ihhsq ppohphs posq pjjjqs pjpojs uusbqu ouyzbbq oquhns lquueq uhs euheq ojqnns pjjjqs pjpojs uusbqu ouyzbbq oquhns lquueq uhs euheq ojqnns;',
                    linkText : 'Continuez ...',
                    image : 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
                    imageText : 'Image Text '
                }
     
    return(
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
            <div className={classes.overlay} />
            <Grid container > 
                <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{color:'black'}}>
                               Sign in
                            </Typography>
                            <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs align='center' style={{paddingBottom : 6}}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                                </Grid>
                            </Grid>
                            <Box mt={8}>
                                <Copyright />
                           </Box>
                            </form>
                        </div>
                    
                </Container>
            </Grid>      
         </Paper>

    )
}

export default Header;