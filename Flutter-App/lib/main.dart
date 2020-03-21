import 'package:flutter/material.dart';
import 'package:dengue_stop/screens/welcome_screen.dart';
import 'package:dengue_stop/screens/login_screen.dart';
import 'package:dengue_stop/screens/registration_screen.dart';
import 'package:dengue_stop/screens/main_screen.dart';


void main() => runApp(FlashChat());

class FlashChat extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      initialRoute: WelcomeScreen.id,
      routes: {
        WelcomeScreen.id:(context) => WelcomeScreen(),
        LoginScreen.id:(context) => LoginScreen(),
        RegistrationScreen.id:(context) => RegistrationScreen(),
        MainScreen.id:(context) => MainScreen(),
      },

    );
  }
}
