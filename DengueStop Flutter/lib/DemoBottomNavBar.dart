import 'package:flutter/material.dart';

void main()
{
  runApp(BottomNavBar());
}

class BottomNavBar extends StatefulWidget
{
  State<StatefulWidget> createState()
  {
    return BottomNavBarState();
  }
}

class BottomNavBarState extends State<BottomNavBar>
{
  int selectedIndex = 0;
  
  void screenChanged(int index)
  {
    setState(() {
      selectedIndex = index;
    });
  }
  
  Widget build(BuildContext context)
  {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Demo Bottom Nav Bar"),
          centerTitle: true,
          backgroundColor: Colors.blueGrey,
        ),
        backgroundColor: Colors.blueGrey[200],
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.blueGrey,
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              title: Text("Home"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.group),
              title: Text("Group"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.child_care),
              title: Text("Clean"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.info),
              title: Text("Info"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.account_circle),
              title: Text("Profile"),
            ),
          ],
          currentIndex: selectedIndex,
          selectedItemColor: Colors.black,
          onTap: screenChanged,
          unselectedItemColor: Colors.blueGrey[800],
        ),
      ),
    );
  }
}

