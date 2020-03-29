import 'package:dengue_stop/screens/user_location_screen.dart';
import 'package:dengue_stop/screens/post_screen.dart';
import 'package:dengue_stop/screens/report_screen.dart';
import 'package:flutter/material.dart';
import 'package:dengue_stop/screens/chat_screen.dart';
import 'package:dengue_stop/screens/home_screen.dart';
import 'package:dengue_stop/screens/welcome_screen.dart';
import 'package:dengue_stop/screens/login_screen.dart';
import 'package:dengue_stop/screens/registration_screen.dart';
import 'package:dengue_stop/screens/main_screen.dart';


void main() => runApp(DengueStop());

class DengueStop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      initialRoute: WelcomeScreen.id,
      routes: {
        MainScreen.id:(context) => MainScreen(),
        WelcomeScreen.id:(context) => WelcomeScreen(),
        LoginScreen.id:(context) => LoginScreen(),
        RegistrationScreen.id:(context) => RegistrationScreen(),
        HomeScreen.id:(context) => HomeScreen(),
        ReportScreen.id:(context) => ReportScreen(),
        PostScreen.id:(context) => PostScreen(),
        ChatScreen.id:(context) => ChatScreen(),
        UserLocationScreen.id:(context) => UserLocationScreen(),
      },

    );
  }
}
