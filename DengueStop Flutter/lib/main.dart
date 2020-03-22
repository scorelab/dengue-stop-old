import 'package:flutter/material.dart';

import './signin/signin.dart';
import './signin/signup.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Minimalist Login',
      home: SignIn(),
      routes: {
        SignIn.routeName: (ctx) => SignIn(),
        SignUp.routeName: (ctx) => SignUp(),
      },
    );
  }
}
