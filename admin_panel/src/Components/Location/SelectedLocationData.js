import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './LocationData.styles.js';
import Details from './Details/Details';
import News from '../News/News';

const useStyles = makeStyles(styles);

function SelectedLocationData(props){
    const classes=useStyles();
    return(
        <div className={classes.LocationDataWrapper}>
            <Typography variant="subtitle2" >Jammu & Kashmir</Typography>
            <Details total="387" active={345} recovered={290} death={24} />            
            <Typography variant="h6">News</Typography>
            <List component="nav" aria-label="news-list">
                <ListItem button >
                    <News />
                </ListItem>
                <ListItem button >
                    <News />
                </ListItem>
            </List>
        </div>
    )
}

export default SelectedLocationData;