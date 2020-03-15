import 'package:flutter/material.dart';
import 'home.dart';
import 'dart:async';
import 'nav_home.dart';

void main(){
  runApp(
    MaterialApp(
      home: myapp(),
    )
  );
}

class myapp extends StatefulWidget {
  @override
  _myappState createState() => _myappState();
}

class _myappState extends State<myapp> {
  @override
  void initState() {
    super.initState();
    Future.delayed(
      Duration(seconds: 5),
        (){
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context)=>MyApp(),
              )
          );
        },
    );

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: FlutterLogo(
          size: 100,
        ),
      ),
    );
  }
}


