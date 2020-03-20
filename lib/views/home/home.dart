import 'package:flutter/material.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/services/auth.dart';

class Home extends StatelessWidget {
  final AuthService _auth = AuthService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.brown[200],
      appBar: AppBar(
        title: Text('Dengue Stop'),
        backgroundColor: Colors.redAccent,
        elevation: 2.0,
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
    );
  }
}
