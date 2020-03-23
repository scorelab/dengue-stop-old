import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  static const String id = "home";

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
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
        title: Text('Dengue Stop',
            style: TextStyle(
              color: Colors.white,
            )),
        backgroundColor: Colors.blueAccent,
      ),
    );
  }
}
