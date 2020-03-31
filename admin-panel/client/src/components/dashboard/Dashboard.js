import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import TimelineIcon from "@material-ui/icons/Timeline";
import FireplaceIcon from '@material-ui/icons/Fireplace';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";
import RedditIcon from '@material-ui/icons/Reddit';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EnhancedTable from "./Report"


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MiniDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  

  const IconArray = [<TimelineIcon/>, <FireplaceIcon/>, <AssessmentIcon/>,<RedditIcon/>, <Link to = "/location"><EditLocationIcon/></Link>]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { user } = props.auth;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dengue Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Graph', 'HeatMap', 'Ananlysis', 'Prediction', <Link to = "/location">MAP VIEW</Link>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{IconArray[index] }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button key="Logout">
              <ListItemIcon><ExitToAppIcon onClick={onLogoutClick}/> </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
            <ListItem button key="Profile">
              <ListItemIcon><Link to = "/profile" ><PersonIcon/></Link></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h5>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h5>
            <div > 
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
              <Button
                  variant="contained"
                  color="primary"
                  startIcon={<TimelineIcon />}
                >
                  Graph
                </Button>
                <Button variant="contained" color="secondary" startIcon = {<FireplaceIcon/>}>
                  HeatMaps
                </Button>
                <Link to = "/table">
                  <Button variant="contained" color="primary" startIcon = {<AssessmentIcon/>}>
                    Analysis
                  </Button>
                </Link>
                <Button variant="contained" color="secondary" startIcon = {<RedditIcon/>}>
                  Prediction
                </Button>
              </div>
              <h4 id="title">Recent reported cases</h4>
              <div style = {{width: "1000px"}}><EnhancedTable/></div>
              
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

MiniDrawer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(MiniDrawer);