import React,{useState} from 'react';
import { Map, TileLayer, Circle, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Maps.styles';

const useStyles = makeStyles(styles);

const geoLocation = [
    {
      "state": "Kerala",
      "latitude": 10.8505,
      "longitude": 76.2711
    },
    {
      "state": "Maharashtra",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    {
      "state": "Goa",
      "latitude": 15.2993,
      "longitude": 74.124
    },
    {
      "state": "Karnataka",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    {
      "state": "Madhya Pradesh",
      "latitude": 22.9734,
      "longitude": 78.6569
    },
    {
      "state": "Telengana",
      "latitude": 18.1124,
      "longitude": 79.0193
    },
    {
      "state": "Tamil Nadu",
      "latitude": 11.1271,
      "longitude": 78.6569
    },
    {
      "state": "Andhra Pradesh",
      "latitude": 15.9129,
      "longitude": 79.74
    },
];

let center = [9.5915668, 76.5221531];

function Maps(props){
    const [firstLoad, setFirstLoad] = useState(true);
    const classes=useStyles();
    const PopupData = ({ type, count, name }) => {
        return (
          <>
            <div className={classes.popupName}></div>
            <div className={classes.type}>{type}</div>
            <div className={classes.counts}>{count}</div>
          </>
        );
    };
    return(
        <Map center={center} zoom={6} className={classes.mapContainer} >
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
            {geoLocation.map(location => {
            return (
                <Circle
                key={location.state}
                center={[location.latitude, location.longitude]}
                fillColor="red"
                radius={
                    1500 +
                    ((Math.random()*10) +
                    (Math.random()*100)) *
                    2500
                }
                onMouseOver={e => {
                    firstLoad && setFirstLoad(false);
                    e.target.openPopup();
                }}
                >
                <Popup>
                    <h3>{location.state}</h3>
                    <div className={classes.popupData}>
                      <PopupData
                        name="Cases"
                        type="Cases"
                        count={41}
                      />
                      <PopupData
                        name="Cured"
                        type="Cured/Discharged"
                        count={3}
                      />
                      <PopupData
                        name="Death"
                        type="Deaths"
                        count={1}
                      />
                    </div>                            
                </Popup>
            </Circle>
            );
            })}
        </Map>
    )
}

export default Maps;