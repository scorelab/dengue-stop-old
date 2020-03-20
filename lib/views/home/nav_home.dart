import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/views/home/blog.dart';
import 'package:flutter_app/views/home/dashboard.dart';
import 'package:flutter_app/views/home/map.dart';
import 'package:flutter_app/views/home/profile.dart';
import 'package:flutter_app/views/home/pui_data.dart';
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
                      Card(
                        margin: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 16.0),

                        color: Colors.grey,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            children: <Widget>[
                              Text(
                                'News Feed: Lastest News about Covid-19 Breakdown',
                                style: TextStyle(
                                  fontSize: 18.0,
                                  color: Colors.black
                                ),
                              ),
                              SizedBox(height: 10.0,),
                              Text('2020-03-20'),
                            ],
                          ),
                        ),
                      ),

//                      ListTile(
//                        title: Text(
//                          "Corona Patients increases upto 65",
//                          style:
//                          Theme.of(context).textTheme.display1.copyWith(
//                            color: Colors.white,
//                            fontSize: 20.0,
//                          ),
//                        ),
//                        trailing: Icon(
//                          FontAwesomeIcons.clinicMedical,
//                          color: Colors.white,
//                        ),
//                      ),
//                      SizedBox(height: 1.0,),
//                      ListTile(
//                        title: Text(
//                          "Curfew for islandwide",
//                          style:
//                          Theme.of(context).textTheme.display1.copyWith(
//                            color: Colors.white,
//                            fontSize: 20.0,
//                          ),
//                        ),
//                        trailing: Icon(
//                          FontAwesomeIcons.clinicMedical,
//                          color: Colors.white,
//                        ),
//                      ),
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
                icon: Icon(Icons.add_circle_outline),
                tooltip: 'Add PUI',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => PUIdata()));
                }, iconSize: 48.0, color: Colors.black),
            IconButton(icon: Icon(Icons.map),
                tooltip: 'Map Marker',
                onPressed: () {
                  controller.isOpen = false;
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => MapDashboard()));
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
