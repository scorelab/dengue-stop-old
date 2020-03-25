import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './LocationData.styles.js';
import Details from './Details/Details';
import News from '../News/News';

const useStyles = makeStyles(styles);

function SelectedLocationData(props){
    const classes=useStyles();
    return(
        <div className={classes.LocationDataWrapper}>
            <Typography variant="subtitle2" >Jammu & Kashmir</Typography>
            <Details total="128" active={114} recovered={12} death={2} />            
            <Typography variant="h6">News</Typography>
                <div className={classes.newsContainer}>
                    <News />
                    <News />
                    <News />
                </div>
        </div>
    )
}

export default SelectedLocationData;