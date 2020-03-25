import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styles from './LocationData.styles.js';
import Details from './Details/Details';

const useStyles = makeStyles(styles);

function LocationData(props){
    const classes=useStyles();
    return(
        <div className={classes.LocationDataWrapper} >
            <Details total="387" active={345} recovered={290} death={24} />            
            <List component="nav" aria-label="areas-list">
                <ListItem button >
                    <ListItemText primary="India" />
                </ListItem><Divider />
                <ListItem button selected>
                    <ListItemText primary="Jammu & Kashmir" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Haryana" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Punjab" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Delhi" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Uttar Pradesh" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Rajasthan" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Madhya Pradesh" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Maharashtra" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Bihar" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Uttrakhand" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Kerala" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Tamil Nadu" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Karnataka" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="West Bengal" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Assam" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Odisha" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Andhra Pradesh" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Jharkhand" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem><Divider />                
            </List>
        </div>
    )
}   

export default LocationData;