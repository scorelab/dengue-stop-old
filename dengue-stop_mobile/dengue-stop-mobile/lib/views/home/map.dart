import 'package:flutter/material.dart';
import 'package:flutter_app/report/newtask.dart';
import 'package:flutter_app/views/home/activities.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:flutter/services.dart' show rootBundle;

class MapDashboard extends StatefulWidget {
  @override
  _MapDashboardState createState() => _MapDashboardState();
}

class _MapDashboardState extends State<MapDashboard> {

  List<Marker> mapMarks= [];

  GoogleMapController _controller;

  String _mapStyle;

  void initState(){
    rootBundle.loadString('styles/map_style.txt').then((string) {
      _mapStyle = string;
    });
    super.initState();
    mapMarks.add(
      Marker(
        markerId: MarkerId('firstmarker'),
        draggable: true,
        onTap: (){
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
                        onTap: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => PUIdata()));
                        }
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
        backgroundColor: Colors.redAccent,
      ),
      body: Column(
        children: <Widget>[
          Center(
            child: Container(
            height: MediaQuery.of(context).size.height-150.0,
            width: MediaQuery.of(context).size.width,
            child: GoogleMap(
            initialCameraPosition: CameraPosition(
              target: LatLng(6.835404800000001,79.89493759999999),
              zoom: 8.0,
            ),
              markers: Set.from(mapMarks),
              onMapCreated: (GoogleMapController controller) {
                _controller = controller;
                _controller.setMapStyle(_mapStyle);
                },
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
  
  moveColombo(){
    _controller.animateCamera(CameraUpdate.newCameraPosition(
      CameraPosition(
        target: LatLng(6.9271, 79.8612),
        zoom: 12.0,
      ),
    ));
  }

}
