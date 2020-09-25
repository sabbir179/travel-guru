import React from 'react';
import Header from '../Header/HeaderB';
import Grid from '@material-ui/core/Grid';


const HotelDetail = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                    This is Hotel Detail
                    </Grid>
                    <Grid item>
                    google maps
                    </Grid>
                </Grid>
            </div>
            
            
            
            
        </div>
    );
};

export default HotelDetail;