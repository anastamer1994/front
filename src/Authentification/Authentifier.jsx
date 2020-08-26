import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ButtonBase,Typography } from '@material-ui/core';


const images = [
    {
      url: '',
      title: 'Administrateur',
      width: '25%',
    },
    {
      url: '',
      title: 'Professeur',
      width: '25%',
    },
    {
      url: '',
      title: 'Elève',
      width: '25%',
    },
    {
      url: '',
      title: 'Parents',
      width: '25%',
    },
  ];

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        minHeight:'94vh',
        marginBottom: theme.spacing(2),
        backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2018&q=80m)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
      },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
      },
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.45,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        fontSize:30,
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        color: 'white',
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        paddingTop: 240,
      },
      titleTypography : {
        textAlign : 'center',
        paddingTop : 80,
        color: 'black',
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
        
      }
}));


 const Authentifier = () => {

  const  classes = useStyles();

        return (
            <>
            <div className={classes.mainFeaturedPost}>
                <Typography variant="h4" className={classes.titleTypography}>
                    Selectionner votre fonctionalité
                </Typography>
                
                <div className={classes.root}>
                    {images.map((image) => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                            width: image.width,
                            }}
                        >
                           
                            <span className={classes.imageBackdrop} />


                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                    >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>

                        </ButtonBase>
                    ))}
                </div>
            </div>
            </>
        )
}

export default Authentifier;