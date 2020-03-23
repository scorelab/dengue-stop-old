import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height:'100px'
  },
}));

function News(props) {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.details}>
        <CardContent className={classes.content}>
            <Typography component="h5" variant="subtitle1">
                Live From Space lorem iisbf
            </Typography>
            <Typography variant="caption" color="textSecondary">
                Global News
            </Typography>
        </CardContent>
      </div>
        <CardMedia
            className={classes.cover}
            src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
        />
    </Card>
  )
}

export default News; 