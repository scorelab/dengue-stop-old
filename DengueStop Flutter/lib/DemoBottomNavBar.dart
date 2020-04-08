import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: 'Demo Bottom Navigation Bar',
    home: Home(),
  ));
}

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int appCurrIndex = 0;
  List<Icon> iconsList = [
    Icon(Icons.home),
    Icon(Icons.group),
    Icon(Icons.child_care),
    Icon(Icons.info),
    Icon(Icons.account_circle),
  ];
  List<Widget> bodyData = [
    Center(
      child: Text("Home"),
    ),
    Center(
      child: Text("Groups"),
    ),
    Center(
      child: Text("Volunteer"),
    ),
    Center(
      child: Text("Information"),
    ),
    Center(
      child: Text("Profile"),
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: Container(
            margin: EdgeInsets.all(10.0),
            padding: EdgeInsets.all(10.0),
            decoration: BoxDecoration(
              color: Colors.blue[900],
              borderRadius: BorderRadius.circular(100.0),
            ),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: List<IconButton>.generate(5, (int i) {
                  return IconButton(
                    color: i == appCurrIndex ? Colors.white : Colors.white60,
                    icon: iconsList[i],
                    iconSize: 30.0,
                    onPressed: () {
                      setState(() {
                        appCurrIndex = i;
                      });
                    },
                  );
                }))),
        body: Container(
          child: bodyData[appCurrIndex],
        ));
  }
}
