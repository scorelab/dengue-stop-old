import 'package:flutter/material.dart';
import 'package:dengue_stop/components/rounded_button.dart';
import 'package:dengue_stop/constants.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'main_screen.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';
import 'package:dengue_stop/components/dialog_box.dart';

class LoginScreen extends StatefulWidget {
  static const String id = "logins";

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  bool showSpinner = false;
  final _auth = FirebaseAuth.instance;
  String email;
  String password;

  DialogBox _dialogBox = DialogBox();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: ModalProgressHUD(
        inAsyncCall: showSpinner,
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Flexible(
                child: Hero(
                  tag: 'logo',
                  child: Container(
                    height: 200.0,
                    child: Image.asset('images/logo.png'),
                  ),
                ),
              ),
              SizedBox(
                height: 48.0,
              ),
              TextField(
                textAlign: TextAlign.center,
                onChanged: (value) {
                  email = value;
                },
                decoration:
                    kTextFieldDecoration.copyWith(hintText: 'Enter your email'),
              ),
              SizedBox(
                height: 8.0,
              ),
              TextField(
                textAlign: TextAlign.center,
                obscureText: true,
                onChanged: (value) {
                  password = value;
                },
                decoration: kTextFieldDecoration.copyWith(
                    hintText: 'Enter your password'),
              ),
              SizedBox(
                height: 24.0,
              ),
              RoundedButton(
                title: 'Log In',
                color: Colors.lightBlueAccent,
                onPressed: () async {
                  setState(() {
                    showSpinner = true;
                  });
                  try {
                    final user = await _auth.signInWithEmailAndPassword(
                        email: email, password: password);
                    if (user != null) {
                      Navigator.pushNamed(context, MainScreen.id);
                      setState(() {
                        showSpinner = false;
                      });
                    }
                  } catch (e) {
                    _dialogBox.information(
                        context, 'Error', 'Invalid Username or Password');
                    setState(() {
                      showSpinner = false;
                    });
                  }
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
