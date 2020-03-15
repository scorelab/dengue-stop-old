import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'menu.dart';

void main () {
//  debugPaintPointersEnabled = true;
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final controller = FabCircularMenuController();

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: FabCircularMenu(
          child: Container(
            color: Colors.deepOrange[400],
            child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 256.0),
                  child: Text(
                      'Welcome to Home Page',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white, fontSize: 32.0)
                  ),
                )
            ),
          ),
          ringColor: Colors.white30,
          controller: controller,
          options: <Widget>[
            IconButton(icon: Icon(Icons.network_check), onPressed: () {
              controller.isOpen = false;
            }, iconSize: 48.0, color: Colors.white),
            IconButton(icon: Icon(Icons.home), onPressed: () {}, iconSize: 48.0, color: Colors.white),
            IconButton(icon: Icon(Icons.settings), onPressed: () {}, iconSize: 48.0, color: Colors.white),
            IconButton(icon: Icon(Icons.map), onPressed: () {}, iconSize: 48.0, color: Colors.white),
            IconButton(icon: Icon(Icons.person_outline), onPressed: () {}, iconSize: 48.0, color: Colors.white),
          ],
        ),
      ),
    );
  }

}
