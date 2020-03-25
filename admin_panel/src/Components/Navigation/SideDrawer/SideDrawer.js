import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './SideDrawer.styles';

const useStyles = makeStyles(styles);

function SideDrawer(props) {
  const classes = useStyles();
  const list= (
    <div>
      <List>
        {['Reports', 'Past Reports', 'Events', 'Statistics'].map((text, index) => (
          <ListItem button key={text} component={RouterLink} to={'/'+text} >
            <ListItemIcon>
              {index % 2 === 0 ? 
              <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}  
      </List>
      <Divider />
      <List>
        {['Locations', 'Cases'].map((text, index) => (
          <ListItem button key={text} component={RouterLink} to={'/'+text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const listWithTooltip= (
    <div>
      <List>
        {['Reports', 'Past', 'Events', 'Statistics'].map((text, index) => (
          <Tooltip key={text} title={text}  arrow id={text} placement='right' >
            <ListItem button key={text} component={RouterLink} to={'/'+text} >
              <ListItemIcon>
                {index % 2 === 0 ? 
                <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Tooltip>
        ))}  
      </List>
      <Divider />
      <List>
        {['Locations', 'Cases'].map((text, index) => (
          <Tooltip key={text} title={text} arrow id={text} placement='right' >
            <ListItem button key={text} component={RouterLink} to={'/'+text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </div>
  )

  return (
    <Drawer
      variant="permanent"
      open={props.show}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.show,
        [classes.drawerClose]: !props.show,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.show,
          [classes.drawerClose]: !props.show,
        }),
      }}
    >
      <div className={classes.toolbar}>
          <IconButton onClick={props.onClickHandler}>
            <ChevronLeftIcon />
          </IconButton>
      </div>
      <Divider />
      {props.show?list:listWithTooltip}
    </Drawer>
  );
}

export default SideDrawer;