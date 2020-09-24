import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        
    },
    media: {
      height: 416,
      
    },
    marginRight: {
        marginRight:'10px'
    },
   
    
    
   
  });

const BookingImage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Card className={classes.marginRight}>
                        <CardActionArea  >
                            <CardMedia
                            className={classes.media}
                            image="https://iili.io/2A86EG.png"
                            
                            
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Cox's Bazar
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    
                    </Card>
                    <Card className={classes.marginRight} >
                        <CardActionArea >
                            <CardMedia
                            className={classes.media}
                            image="https://iili.io/2ASfTP.png"
                            
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Sreemangal
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    
                    </Card>

                    <Card className={classes.marginRight}>
                        <CardActionArea >
                            <CardMedia
                            className={classes.media}
                            image="https://iili.io/2ASYZX.png"
                            
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Sundorbon
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    
                    </Card>
        </div>
    );
};

export default BookingImage;