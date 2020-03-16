import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PatientTableData from '../../Components/Table/Table';

const styles=theme=>({    
    table:{
        margin:theme.spacing(2),
        padding:theme.spacing(2),
    }
});

class Dashboard extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.table}>
                <PatientTableData />
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);