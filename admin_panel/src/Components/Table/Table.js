import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#eceff1',
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const useStyles = makeStyles({
   body:{
    backgroundColor:'#eceff1'
  }
});

const columns=['Name','Age','Gender','Contact','Location','Case'];

function PatientDataTable(props) {
  const classes = useStyles();
  const [clickedRows,setClickedRow] = React.useState([]);

  const handleCellDoubleClick=(index)=>{
    let clickedRow=[];
    clickedRow[index]=true;
    setClickedRow(clickedRow)
  }

  const handleCellSingleClick=(index)=>{
    let clickedRow=[];
    clickedRow[index]=false;
    setClickedRow(clickedRow)
  }

  let primaryTableRows=[<StyledTableCell key="blankcell">&nbsp;</StyledTableCell>];
    for(let i=0;i<6;i++){
      let asciiIndex=String.fromCharCode(i+65);
      primaryTableRows.push(<StyledTableCell key={asciiIndex}>{asciiIndex}</StyledTableCell>)
    }

  let tableRows=[];
    for(let i=0;i<8;i++){
      if(i===0){
        tableRows.push(        
          <TableRow key={i+1} hover 
            onMouseLeave={()=>handleCellSingleClick(i+1)}
            onDoubleClick={()=>handleCellDoubleClick(i+1)} 
          >
            <TableCell className={classes.body} style={{'width':'5px'}}>{i+1}</TableCell>
            {columns.map((column,index) => {
              return(
                <TableCell key={['header', index].join('_')}> 
                  {clickedRows[i+1]?<TextField value={column}/>
                  :column}
                </TableCell>
              )
            })}
          </TableRow>
        )
      }
      else{
        tableRows.push(
          <TableRow key={i+1} hover 
            onMouseLeave={()=>handleCellSingleClick(i+1)}
            onDoubleClick={()=>handleCellDoubleClick(i+1)} 
          >
            <TableCell className={classes.body} style={{'width':'5px'}}>{i+1}</TableCell>
            {columns.map((column,index) => (
                <TableCell key={['value', index,i].join('_')}>
                  {clickedRows[i+1]?
                  <TextField value={column+i} 
                  />
                  :column+i}</TableCell>
            ))}    
          </TableRow>
        )
      }
    }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {primaryTableRows}  
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientDataTable;