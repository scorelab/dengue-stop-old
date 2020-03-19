import 'package:dengustop/screens/home/home_screen.dart';
import 'package:flutter/material.dart';

void main() => runApp(DengueApp());

class DengueApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Dengue stop app",
      home: HomeScreen()
    );
  }
}