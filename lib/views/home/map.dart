import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapDashboard extends StatefulWidget {
  @override
  _MapDashboardState createState() => _MapDashboardState();
}

class _MapDashboardState extends State<MapDashboard> {

  List<Marker> mapMarks= [];

  //GoogleMapController _controller

  void initState(){
    super.initState();
    mapMarks.add(
      Marker(
        markerId: MarkerId('firstmarker'),
        draggable: false,
        onTap: (){
          print('Marker Tapped');
        },
        position: LatLng(6.835404800000001,79.89493759999999)
      )
    );
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Map Dashboard'),
        backgroundColor: Colors.grey.shade800,
      ),
      body: Center(
        child: Container(
          height: 400.0,
          width: MediaQuery.of(context).size.width,
          child: GoogleMap(
            initialCameraPosition: CameraPosition(
              target: LatLng(6.835404800000001,79.89493759999999),
              zoom: 4.0,
            ),
            markers: Set.from(mapMarks),
          ),
        ),
      ),
    );
  }
}
