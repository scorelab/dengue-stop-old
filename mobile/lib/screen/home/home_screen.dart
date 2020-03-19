import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dengue Stop App"),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.mapMarkedAlt),
            title: Text("Map"),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.userAlt),
            title: Text("Profile"),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.facebookMessenger),
            title: Text("Chat"),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.cog),
            title: Text("Settings"),
          ),
        ],
      ),
    );
  }
}
