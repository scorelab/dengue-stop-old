import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_app/report/mainfile.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/views/home/blog.dart';
import 'package:flutter_app/views/home/dashboard.dart';
import 'package:flutter_app/views/home/map.dart';
import 'package:flutter_app/views/home/maplocation.dart';
import 'package:flutter_app/views/home/profile.dart';
import 'package:flutter_app/views/home/activities.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
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
      //debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: FabCircularMenu(
          child: Container(
            color: Colors.grey.shade800,
            child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.only(bottom: 500.0),
                  child: Column(
                    children: <Widget>[
                      SizedBox(height: 20.0,),
                      Text(
                          'Risk Status : ',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white, fontSize: 32.0)
                      ),
                      SizedBox(height: 10.0,),
                      Image(
                        image: AssetImage('img/02-512.png'),
                        height: 200.0,
                        width: 200.0,
                      ),
                      SizedBox(height: 10.0,),
                      Text('High',
                        style: TextStyle(fontSize: 30.0,color: Colors.red),

                      ),
                      SizedBox(height: 10.0,),
                      Card(
                        child: ListTile(
                          leading: Icon(Icons.healing),
                          title: Text('Identify Virus Attacks In your Area'),
                          subtitle: Text('You need to aware of thses'),
                        ),
                        elevation: 3.0,
                        color: Colors.grey,
                      ),
                      Card(
                        child: ListTile(
                          leading: Icon(Icons.healing),
                          title: Text('Virus Attacks'),
                          subtitle: Text('Dengue\nCovid-19\nH1N1'),
                        ),
                        elevation: 3.0,
                        color: Colors.grey,
                      ),
                    ],
                  ),

                )
            ),
          ),
          ringColor: Colors.white30,
          controller: controller,
          options: <Widget>[
            IconButton(
                icon: Icon(Icons.forum),
                tooltip: 'News/Forum',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => Blog()));
            }, iconSize: 36.0, color: Colors.black),
            IconButton(
                icon: Icon(Icons.dashboard),
                tooltip: 'dashboard',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => DashboardTwoPage()));
                }, iconSize: 48.0, color: Colors.black),
            IconButton(
                icon: Icon(Icons.add_box),
                tooltip: 'Add PUI',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) =>MyHomePage()));
                }, iconSize: 48.0, color: Colors.black),
            IconButton(icon: Icon(Icons.map),
                tooltip: 'Map Marker',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => MapNavigation()));
                }, iconSize: 48.0, color: Colors.black),
            IconButton(icon: Icon(
                Icons.person),
                tooltip: 'Profile',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => Profile()));
                }, iconSize: 48.0, color: Colors.black),
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
      ),
    );
  }

}
