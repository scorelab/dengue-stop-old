import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:fab_circular_menu/fab_circular_menu.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'package:latlong/latlong.dart';

class HomeScreen extends StatefulWidget {
  static const String id = "home";

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _auth = FirebaseAuth.instance;
  FirebaseUser loggedInUser;

  List<Marker> allMarkers = [];

  setMarkers() {
    allMarkers.add(
      Marker(
        width: 45.0,
        height: 45.0,
        point: LatLng(5.9772833, 80.5087741),
        builder: (context) => Container(
          child: IconButton(
            icon: Icon(Icons.location_on),
            color: Colors.red,
            iconSize: 45,
            onPressed: () {
              debugPrint("talp");
            },
          ),
        ),
      ),
    );

    return allMarkers;
  }

  void getCurrentUser() async {
    try {
      final user = await _auth.currentUser();
      loggedInUser = user;
    } catch (e) {
      print(e);
    }
  }

  @override
  void initState() {
    super.initState();
    getCurrentUser();
  }

  Widget loadMap() {
    return StreamBuilder(
      stream: Firestore.instance.collection('markers').snapshots(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) return Text('Loading maps..');
        for (int i = 0; i < snapshot.data.documents.length; i++) {
          allMarkers.add(
            Marker(
              width: 45.0,
              height: 45.0,
              point: LatLng(snapshot.data.documents[i]['coords'].latitude,
                  snapshot.data.documents[i]['coords'].longitude),
              builder: (context) => Container(
                child: IconButton(
                  icon: Icon(Icons.location_on),
                  color: Colors.red,
                  iconSize: 45,
                  onPressed: () {
                    print(snapshot.data.documents[i]['place']);
                  },
                ),
              ),
            ),
          );
        }

        return new FlutterMap(
          options: new MapOptions(
            center: LatLng(7.8731, 80.7718),
//            zoom: 8.0,
            zoom: 7.5,
          ),
          layers: [
            new TileLayerOptions(
              urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              subdomains: ['a', 'b', 'c'],
//              urlTemplate:
//              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
//              subdomains: ['a', 'b', 'c'],
//              tileProvider: CachedNetworkTileProvider(),
            ),
            MarkerLayerOptions(
              markers: allMarkers,
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: null,
        iconTheme: IconThemeData(
          color: Colors.white, //change color here
        ),
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.close),
              onPressed: () {
                _auth.signOut();
                Navigator.pop(context);
              }),
        ],
        title: Text('Patient Distribution',
            style: TextStyle(
              color: Colors.white,
            )),
        backgroundColor: Colors.blueAccent,
      ),
      floatingActionButton:SpeedDial(
      animatedIcon: AnimatedIcons.menu_close,

        children: [
        SpeedDialChild(
            child: Icon(Icons.person),
            label: "Male",
            labelBackgroundColor: Colors.purpleAccent,
            backgroundColor: Colors.purpleAccent,
            onTap: () => print("p1")
//                  () {
//              }
        ),
        SpeedDialChild(
            child: Icon(Icons.person_outline),
            labelBackgroundColor: Colors.orangeAccent,
            backgroundColor: Colors.orangeAccent,
            label: "Female",
            onTap: () => print("p2")
//                  () {
//                addLocationToFierstore();
//              }
        ),
      ],
    ),
      body: loadMap(),
    );
  }
}
