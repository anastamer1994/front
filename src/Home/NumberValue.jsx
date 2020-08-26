import React from 'react';
import {useCountUp} from "react-countup";
import { Card,CardHeader,Avatar,CardContent,Typography} from '@material-ui/core';
import LayersIcon from '@material-ui/icons/Layers';



const NumberValue = () => {

    const { countUp } = useCountUp({ end: 2000 , duration:20});
    const post  = {
        title :'Shrimp and Chorizo Paella',
        date : 'September 14, 2016',
    }
    return(
            <Card>
                <Avatar >
                    <LayersIcon />
                </Avatar>
                <CardHeader
                          title={post.title}
                          subheader={post.date}
                 />
                <CardContent>
                    <Typography variant="h3" color="textSecondary">
                      {countUp}
                    </Typography>
            </CardContent>
            </Card>
    )    
}

export default NumberValue;