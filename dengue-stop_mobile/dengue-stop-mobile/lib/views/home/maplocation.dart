import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_app/views/home/activities.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:geolocation/geolocation.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';


class MapNavigation extends StatefulWidget {
  @override
  _MapNavigationState createState() => _MapNavigationState();
}

class _MapNavigationState extends State<MapNavigation> {
  GoogleMapController _controller;
  bool mapToggle = false;
  String _mapStyle;


  void initState(){
    super.initState();
    rootBundle.loadString('styles/map_style.txt').then((string) {
      _mapStyle = string;
    });
    Geolocation.currentLocation(

    );
  }
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Map Dashboard Marker'),
        backgroundColor: Colors.redAccent,
      ),
      body: Stack(
            children: <Widget>[
              _googleMap(context),
            ],
          ),
      floatingActionButton: FloatingActionButton.extended(
          onPressed: (){
            Navigator.push(
              context,
                MaterialPageRoute(
                       builder: (context) => PUIdata()));
          },
          label: Text('Add PUI',style: TextStyle(color: Colors.black),),
          backgroundColor: Colors.green,
          icon: Icon(FontAwesomeIcons.plusSquare),
      ),
    );
  }

  Widget _googleMap(BuildContext context){
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: GoogleMap(
        mapType: MapType.normal,
        initialCameraPosition: CameraPosition(
          target: LatLng(7.2906, 80.6337),
          zoom: 8,
        ),
        onMapCreated: (GoogleMapController controller){
          _controller = controller;
          _controller.setMapStyle(_mapStyle);
        },
        markers: {
          colombo, colombo1,colombo2,colombo3,colombo4
        }
      ),
    );
  }

  Widget _patientInfo(){
    return Align(
      alignment: Alignment.bottomLeft,
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 20.0),
        height: 150.0,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: <Widget>[
            SizedBox(width: 10.0,),
            Padding(

            ),

          ],
        ),
      ),
    );
  }
}

Marker colombo= Marker(
  markerId: MarkerId('colombo1'),
  position: LatLng(6.7897, 79.8913),
  infoWindow: InfoWindow(title: 'case 0\nHospitalized'),
  icon: BitmapDescriptor.defaultMarkerWithHue(
    BitmapDescriptor.hueGreen
  ),
);

Marker colombo1= Marker(
      markerId: MarkerId('colombo2'),
      position: LatLng(6.8301, 79.8801),
      infoWindow: InfoWindow(title: 'case1\nHospitalized - covid 19'),
      icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueViolet
      ),
);

Marker colombo2= Marker(
  markerId: MarkerId('colombo2'),
  position: LatLng(6.935404800000001,80.593759999999),
  infoWindow: InfoWindow(title: 'case2\nDeath Case - Dengue'),
  icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed
  ),
);

Marker colombo3= Marker(
  markerId: MarkerId('colombo2'),
  position: LatLng(6.9117, 79.8646),
  infoWindow: InfoWindow(title: 'case3\nRecovered'),
  icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueGreen
  ),
);

Marker colombo4= Marker(
  markerId: MarkerId('colombo2'),
  position: LatLng(7.2906, 80.6337),
  infoWindow: InfoWindow(title: 'case 4\nHospitalized'),
  icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueBlue
  ),
);

Container _bottom = Container(
  height: 330.0,
  color: Colors.white,
  child: Column(
    children: <Widget>[
      ListTile(
        contentPadding:
        EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        title: Text("PUI Data", style: TextStyle(fontSize: 20.0),),
        subtitle: Text("Marker Settings"),
//              onTap: () {
//                Navigator.push(
//                    context,
//                    MaterialPageRoute(
//                        builder: (context) => PUIdata()));
//              }
      ),
      ListTile(
        contentPadding:
        EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        leading: Icon(Icons.my_location),
        title: Text("Location"),
        subtitle: Text("Colombo, Sri lanka"),
      ),
      ListTile(
        leading: Icon(Icons.person_pin),
        title: Text("Contributor"),
        subtitle: Text("John Doe"),
      ),
      ListTile(
        leading: Icon(Icons.details),
        title: Text("Patient Status"),
        subtitle: Text("Dengue , Hospitalized"),
      ),
    ],
  ),
);
