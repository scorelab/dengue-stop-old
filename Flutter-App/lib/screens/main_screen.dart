import 'package:flutter/material.dart';
import 'package:dengue_stop/constants.dart';
import 'package:firebase_auth/firebase_auth.dart';


class MainScreen extends StatefulWidget {
  static const String id = "main";

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {

  final _auth = FirebaseAuth.instance;
  FirebaseUser loggedInUser;

  @override
  void initState() {
    super.initState();
    getCurrentUser();
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
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: null,
          actions: <Widget>[
            IconButton(
                icon: Icon(Icons.close),
                onPressed: () {
                  _auth.signOut();
                  Navigator.pop(context);
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
