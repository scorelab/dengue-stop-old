import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocationData from '../../Components/Location/LocationData';
import SelectedLocationData from '../../Components/Location/SelectedLocationData';
import Map from '../../Components/Maps/Maps';
import styles from './Dashboard.styles';

class Dashboard extends Component{
    render(){
        const {classes}= this.props;
        return(
            <div className={classes.dbWrapper}>
                <Grid container spacing={2} >
                    <Grid item md={3} lg={3 } className={classes.leftPortion} >
                        <LocationData />
                    </Grid>
                    <Grid item md={3} lg={3} className={classes.middlePortion}>
                        <SelectedLocationData />
                    </Grid>
                    <Grid item md={6} lg={6} className={classes.map}>
                        <Map />
                    </Grid>
                </Grid>
            </div>
            
        )
    }
}

export default withStyles(styles)(Dashboard);