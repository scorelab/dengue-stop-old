import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import RoomIcon from '@material-ui/icons/Room';
import Button from "@material-ui/core/Button";
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Location from "./Locations/Location"

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 100 },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'disease',
    label: 'Disease',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
  {
    id: 'notification',
    label: 'Notification',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

function createData(id, name, age, gender, disease, location, notification,lat,lng) {
    return { id,name, age, gender, disease, location, notification, lat, lng };
  }
  


  const live = (<Button ><RoomIcon /></Button>);
  const notify = (<Button><NotificationsActiveIcon/></Button>);
  const nonotify = (<Button><NotificationsOffIcon/></Button>);


const rows = [
    createData(1,'Anshika', 19, 'F', "Malaria", live, notify, 7.2906, 80.6337),
    createData(2, "Abhay Katheria", 21, "M", "Dengue", live, nonotify, 6.9497, 80.7891),
    createData(3,"Chitransh", 20, "M", "Dengue", live, notify, 6.0535, 80.2210),
    createData(4, "Mithilesh", 22, "M", "Malaria", live, nonotify, 8.3114, 80.4037),
    createData(5, "Mithilesh", 22, "M", "Malaria", live, notify),
    createData(6, "Mithilesh", 22, "M", "Malaria", live, notify),
    createData(7, "Mithilesh", 22, "M", "Malaria", live, notify),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 300,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
