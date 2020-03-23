import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:dengue_stop/screens/home_screen.dart';
import 'package:dengue_stop/screens/post_screen.dart';
import 'package:dengue_stop/screens/report_screen.dart';
import 'package:flutter/material.dart';
import 'package:dengue_stop/constants.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'chat_screen.dart';
import 'map_screen.dart';

class MainScreen extends StatefulWidget {
  static const String id = "main";

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
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


  final PageController _pageController = PageController();
  @override
  void initState() {
    super.initState();
    getCurrentUser();
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: PageView(
          controller: _pageController,
          children: <Widget>[
            HomeScreen(),
            ReportScreen(),
            PostScreen(),
            ChatScreen(),
            MapScreen(),
          ],
          onPageChanged: (int index) {
            setState(() {
              _pageController.jumpToPage(index);
            });
          }),


      bottomNavigationBar: CurvedNavigationBar(
        color: Colors.blueAccent,
        backgroundColor: Colors.white70,
        buttonBackgroundColor: Colors.blueAccent,
        height: 50,
        index: 0,
        items: <Widget>[
          Icon(
            Icons.home,
            size: 20,
            color: Colors.white,
          ),
          Icon(
            Icons.report,
            size: 20,
            color: Colors.white,
          ),
          Icon(
            Icons.add,
            size: 20,
            color: Colors.white,
          ),
          Icon(
            Icons.chat,
            size: 20,
            color: Colors.white,
          ),
          Icon(
            Icons.map,
            size: 20,
            color: Colors.white,
          ),
        ],
        animationDuration: Duration(milliseconds: 200),
        animationCurve: Curves.bounceInOut,
        onTap: (index) {
          debugPrint("$index");

          setState(() {
            _pageController.jumpToPage(index);
          });
        },
      ),
    );
  }
}
