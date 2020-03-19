import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/views/home/dashboard.dart';
import 'menu.dart';

void main () {
//  debugPaintPointersEnabled = true;
  runApp(NavBar());
}

class NavBar extends StatelessWidget {
  final AuthService _auth = AuthService();
  @override
  Widget build(BuildContext context) {
    final controller = FabCircularMenuController();

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: FabCircularMenu(
          child: Container(
            color: Colors.grey.shade800,
            child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 500.0),
                  child: Column(
                    children: <Widget>[
                      SizedBox(height: 20.0,),
                      Text(
                          'Dengue Stop Mobile App',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white, fontSize: 32.0)
                      ),
                      Image(
                        image: AssetImage('img/02-512.png'),
                        height: 80.0,
                        width: 100.0,
                      ),
                      SizedBox(height: 10.0,),
                    ],
                  ),

                )
            ),
          ),
          ringColor: Colors.white30,
          controller: controller,
          options: <Widget>[
            IconButton(
                icon: Icon(Icons.settings_applications),
                tooltip: 'Settings',
                onPressed: () {
                controller.isOpen = false;
            }, iconSize: 36.0, color: Colors.black),
            IconButton(icon: Icon(Icons.home),
                onPressed: () {}, iconSize: 48.0, color: Colors.black),
            IconButton(
                icon: Icon(Icons.add_circle_outline),
                tooltip: 'Add PUI',
                onPressed: () {}, iconSize: 48.0, color: Colors.black),
            IconButton(icon: Icon(Icons.map),
                tooltip: 'Dashboard',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => DashboardTwoPage()));
                }, iconSize: 48.0, color: Colors.black),
            IconButton(icon: Icon(
                Icons.person),
                tooltip: 'Profile',
                onPressed: () {}, iconSize: 48.0, color: Colors.black),
          ],
        ),
        appBar: AppBar(
          title: const Text('Dengue Stop'
          ),
          backgroundColor: Colors.redAccent,
          actions: <Widget>[

            FlatButton.icon(
              icon:Icon(Icons.person),
              label: Text('logout'),
              onPressed: ()async{
                await _auth.signOut();
              },
            )
          ],
        ),
//        drawer: Drawer(
//          elevation: 20.0,
//          child: ListView(
//            padding: EdgeInsets.zero,
//            children: const <Widget>[
//              DrawerHeader(
//                decoration: BoxDecoration(
//
//                  color: Colors.redAccent,
//                ),
//                child: CircleAvatar(
//                  backgroundColor: Colors.grey,
//                  radius: 5.0,
//                ),
//              ),
//              ListTile(
//                leading: Icon(Icons.message),
//                title: Text('Messages'),
//
//              ),
//              ListTile(
//                leading: Icon(Icons.account_circle),
//                title: Text('Profile'),
//
//              ),
//              ListTile(
//                leading: Icon(Icons.settings),
//                title: Text('Settings'),
//              ),
//            ],
//          ),
//        ),
      ),
    );
  }

}
