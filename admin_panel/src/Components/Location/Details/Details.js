import React from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Details.styles.js';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const useStyles = makeStyles(styles);

function Details(props){
    const classes=useStyles();
    return(
        <div>
            {props.total?(
                <Auxiliary>
                    <Typography variant="h6">Total confirmed cases</Typography>
                    <Typography variant="h4" color="secondary">{props.total}</Typography>
                </Auxiliary>
            ):null}
            <Grid container spacing={1} direction="row" alignItems="center" className={classes.details} >
                <Grid item sm={1}>
                    <div className={classes.icon} style={{'background':'#f9a825'}} ></div>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="body2" className={classes.status}>Active Cases</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Badge badgeContent={props.active} max={500} classes={{badge:classes.activeBadge}}/>
                </Grid>
                <Grid item sm={1}>
                    <div className={classes.icon} style={{'background':'#1b5e20'}} ></div>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="body2" className={classes.status}>Recovered Cases</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Badge badgeContent={props.recovered} max={500} classes={{badge:classes.recoveredBadge}}/>
                </Grid>
                <Grid item sm={1}>
                    <div className={classes.icon} style={{'background':'#d50000'}} ></div>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="body2" className={classes.status}>Deaths</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Badge badgeContent={props.death} max={500} classes={{badge:classes.deathBadge}}/>
                </Grid>
            </Grid>
        </div>  
    )
}

export default Details;