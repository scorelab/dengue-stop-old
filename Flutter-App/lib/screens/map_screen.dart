import 'package:flutter/material.dart';

class MapScreen extends StatefulWidget {
  static const String id = "map";

  @override
  _MapScreenState createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
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
                Navigator.pop(context);
              }),
        ],
        title: Text('Map',
            style: TextStyle(
              color: Colors.white,
            )),
        backgroundColor: Colors.blueAccent,
      ),
    );
  }
}
