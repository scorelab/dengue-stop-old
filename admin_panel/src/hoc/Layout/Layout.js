import React,{Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../Components/Navigation/Header/Header';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import { withStyles } from '@material-ui/core/styles';
import styles from './Layout.styles';

class Layout extends Component{
    state={
        open:false,
    };

    handleDrawerOpen = () => {
        this.setState({open:true});
    }

    handleDrawerClose = () => {
        this.setState({open:false});
    };

    handleClose=()=>{
        this.setState({showAlert:false});
    }
    
      render(){
        const {classes} = this.props;
        return(
            <Auxiliary>
                <div className={classes.root}>
                    <CssBaseline />
                    <Header onClickHandler={this.handleDrawerOpen} isOpen={this.state.open} />
                    <SideDrawer onClickHandler={this.handleDrawerClose} show={this.state.open} />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {this.props.children}
                    </main>
                </div>
            </Auxiliary>
        )
    }
}

export default withStyles(styles)(Layout);