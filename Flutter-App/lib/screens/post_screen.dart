import 'package:fab_circular_menu/fab_circular_menu.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class PostScreen extends StatefulWidget {
  static const String id = "posts";

  @override
  _PostScreenState createState() => _PostScreenState();
}

class _PostScreenState extends State<PostScreen> {
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
        title: Text('Posts',
            style: TextStyle(
              color: Colors.white,
            )),
        backgroundColor: Colors.blueAccent,
      ),

      floatingActionButton: FabCircularMenu(children: <Widget>[
        IconButton(
            icon: Icon(Icons.perm_media),
            onPressed: () {
              print('Timeline');
            }),
        IconButton(
            icon: Icon(Icons.notifications_active),
            onPressed: () {
              print('News');
            }),
        IconButton(
            icon: Icon(Icons.photo_camera),
            onPressed: () {
              print('Food and Nutrians');
            }),
        IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              print('Favorite');
            }),
        IconButton(
            icon: Icon(Icons.supervisor_account),
            onPressed: () {
              print('News');
            }),
      ]),

    );
  }
}
