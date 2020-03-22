import 'package:curved_navigation_bar/curved_navigation_bar.dart';
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
  int _page = 0;
  GlobalKey _bottomNavigationKey = GlobalKey();

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
        title: Text('Dengue Stop',
          style: TextStyle(
            color:Colors.white,
          )
        ),
        backgroundColor: Colors.blueAccent,
      ),
      body: Container(
        color: Colors.white70,

        child: Padding(
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
//              Text(_page.toString(), textScaleFactor: 10.0),
//              RaisedButton(
//                child: Text('Go To Page of index 1'),
//                onPressed: () {
//                  //Page change using state does the same as clicking index 1 navigation button
//                  final CurvedNavigationBarState navBarState =
//                      _bottomNavigationKey.currentState;
//                  navBarState.setPage(1);
//                },
//              )
            ],
          ),
        ),
      ),
      bottomNavigationBar: CurvedNavigationBar(
        color: Colors.blueAccent,
        backgroundColor: Colors.white70,
        buttonBackgroundColor: Colors.blueAccent,
        height: 50,
        items: <Widget>[
          Icon(Icons.home, size: 20, color: Colors.white,),
          Icon(Icons.add, size: 20, color: Colors.white,),
          Icon(Icons.map, size: 20, color: Colors.white,),
        ],
        animationDuration: Duration(
          milliseconds: 200
        ),
        animationCurve: Curves.bounceInOut,
        onTap: (index){
          debugPrint("$index");
          setState(() {
            _page = index;
          });
        },
      ),
    );
  }
}
