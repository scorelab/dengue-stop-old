import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  content: {
    padding:'0 8px',
    '&:last-child':{
      paddingBottom:0,
    }
  },
  cover: {
    width: '200px',
    borderRadius:'5px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  newsCard:{
    display:'flex',
    marginBottom:theme.spacing(2),
    padding:theme.spacing(1),
  }
}));

function News(props) {
  const classes = useStyles();
  return (
    <Card className={classes.newsCard}>
      <CardMedia
        className={classes.cover}
        image="https://www.healthxchange.sg/sites/hexassets/Assets/children/when-dengue-fever-becomes-severe-dengue.jpg"
      />
      <div className={classes.details}>
        <CardContent classes={{root:classes.content}}>
          <Typography variant="subtitle2">
            Dengue infections hit 4000, doubling from same period last year..
          </Typography>
          <Typography variant="caption" color="textSecondary">
              Global News
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default News; 