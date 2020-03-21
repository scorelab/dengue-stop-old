import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapDashboard extends StatefulWidget {
  @override
  _MapDashboardState createState() => _MapDashboardState();
}

class _MapDashboardState extends State<MapDashboard> {

  List<Marker> mapMarks= [];

  GoogleMapController _controller;


  void initState(){
    super.initState();
    mapMarks.add(
      Marker(
        markerId: MarkerId('firstmarker'),
        draggable: true,
        onTap: (){
//          print('Marker Tapped');
          showModalBottomSheet(
              context: context,
              builder: (builder){
                return Container(
                  height: 330.0,
                  color: Colors.white,
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                        title: Text("PUI Data", style: TextStyle(fontSize: 20.0),),
                        subtitle: Text("Marker Settings"),
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
              });
        },
        position: LatLng(6.835404800000001,79.89493759999999),
      )
    );
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Map Dashboard Marker'),
        backgroundColor: Colors.grey.shade800,
      ),
      body: Column(
        children: <Widget>[
          Center(
            child: Container(
            height: 600,
            width: MediaQuery.of(context).size.width,
            child: GoogleMap(
            initialCameraPosition: CameraPosition(
              target: LatLng(6.835404800000001,79.89493759999999),
              zoom: 8.0,
            ),
              markers: Set.from(mapMarks),
              onMapCreated: mapCreated,
            ),
            ),

          ),

        ],
      ),
    floatingActionButton: FloatingActionButton.extended(
      onPressed: () {
      // Add your onPressed code here!
      },
      label: Text('Add PUI',style: TextStyle(color: Colors.black),),
      icon: Icon(Icons.add),
      backgroundColor: Colors.green,
    ),
    );
  }

  void mapCreated(controller){
    setState(() {
      _controller = controller;
    });
  }
  
  movetoColombo(){
    _controller.animateCamera(CameraUpdate.newCameraPosition(
      CameraPosition(
        target: LatLng(6.9271, 79.8612),
        zoom: 12.0,
      ),
    ));
  }
}
