import 'package:flutter/material.dart';
import 'package:flutter_app/models/user.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/views/wrapper.dart';
import 'package:provider/provider.dart';


void main() => runApp(Myapp());

class Myapp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamProvider<User>.value(
      value: AuthService().user,
      child:MaterialApp(
      home: Wrapper(),
    ),
    );
  }
}
