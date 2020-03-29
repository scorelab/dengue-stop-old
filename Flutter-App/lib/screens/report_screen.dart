import 'package:fab_circular_menu/fab_circular_menu.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';

class ReportScreen extends StatefulWidget {
  static const String id = "report";

  @override
  _ReportScreenState createState() => _ReportScreenState();
}

class _ReportScreenState extends State<ReportScreen> {
  final _auth = FirebaseAuth.instance;
  FirebaseUser loggedInUser;

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
        title: Text('Report',
            style: TextStyle(
              color: Colors.white,
            )),
        backgroundColor: Colors.blueAccent,
      ),
      floatingActionButton: FabCircularMenu(children: <Widget>[
        IconButton(
            icon: Icon(Icons.local_hospital),
            onPressed: () {
              print('Health tips');
            }),
        IconButton(
            icon: Icon(Icons.perm_media),
            onPressed: () {
              print('News');
            }),
        IconButton(
            icon: Icon(Icons.fastfood),
            onPressed: () {
              print('Food and Nutrians');
            }),
        IconButton(
            icon: Icon(Icons.favorite),
            onPressed: () {
              print('Favorite');
            })
      ]),
    );
  }
}
