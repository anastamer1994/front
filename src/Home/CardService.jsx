import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,IconButton,Collapse} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const usesStyles = makeStyles((theme) => ({
    root : {
        maxWidth : 345
    },
    media : {
        height: 0,
        paddingTop : '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

const CardService = () => {
    
    const classes = usesStyles();
    const post  = {
        title :'Title Test Test',
        description : 'Lopsem Lopsel Lopsem shhosq hhqs ihhsq ppohphs posq pjjjqs pjpojs uusbqu ouyzbbq oquhns lquueq uhs euheq ojqnns pjjjqs pjpojs uusbqu ouyzbbq oquhns lquueq uhs euheq ojqnns;',
        date : '12 Nov',
        image : 'https://source.unsplash.com/random',
        imageTitle : 'Image Title '
    }
    
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
             setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
             <CardMedia
                className={classes.media}
                image={post.image}
                title={post.imageTitle}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
             <CardActions disableSpacing>
                  <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                       <ExpandMoreIcon />
                </IconButton>
             </CardActions>
             <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CardService;