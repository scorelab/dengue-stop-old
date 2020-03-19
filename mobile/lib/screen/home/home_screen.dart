import 'package:dengustop/screen/chat/chat_screen.dart';
import 'package:dengustop/screen/map/map_screen.dart';
import 'package:dengustop/screen/profile/profile_screen.dart';
import 'package:dengustop/screen/settings/settings_screen.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Widget> _screens = <Widget>[
    MapScreen(),
    ProfileScreen(),
    ChatScreen(),
    SettingsScreen(),
  ];

  int _selectedIndex = 0;

  void _onSelectBottomNav(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dengue Stop App"),
      ),
      body: _screens.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        onTap: _onSelectBottomNav,
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
