import 'package:flutter/material.dart';
import 'package:dengue_stop/constants.dart';

class MainScreen extends StatefulWidget {
  static const String id = "main";

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: null,
          actions: <Widget>[
            IconButton(
                icon: Icon(Icons.close),
                onPressed: () {
                  //Implement logout functionality
                }),
          ],
          title: Text('Main Screen'),
          backgroundColor: Colors.lightBlueAccent,
        ),
        body: Padding(
          padding: EdgeInsets.only(top: 250.0, left: 40.0),
          child: Column(
            children: <Widget>[
              Center(
                child: Text(
                  'Dengue Stop main functionality will be implement here',
                  style: TextStyle(
                    fontSize: 20.0,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),

            ],
          ),
        )
    );
  }
}
