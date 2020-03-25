import 'package:flutter/material.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/shared/loading.dart';

import 'dart:async';

class SignIn extends StatefulWidget {
  final Function toggleView;
  SignIn({this.toggleView});

  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {

  final AuthService _auth = AuthService();
  final _formKey = GlobalKey<FormState>();
  bool loading = false;

  //text feild
  String email = '';
  String password = '';
  String error = '';

  @override
  Widget build(BuildContext context) {
    return loading ? Loading() : Scaffold(
      backgroundColor: Colors.grey.shade800,
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        elevation: 1.0,
        title: Text('SignIn Dengue Stop'),
        actions: <Widget>[
          FlatButton.icon(
              icon: Icon(Icons.person),
              label: Text('Sign Up'),
             onPressed: (){
                widget.toggleView();
             },
          )
        ],
      ),
      body: SingleChildScrollView(

      child:Container(
        padding: EdgeInsets.symmetric(vertical: 20.0,horizontal: 50.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: <Widget>[
              SizedBox(height: 30.0,),
              Text(
                '  Dengue Stop\nCommunity App',
                style: TextStyle(color: Colors.black, fontSize: 30.0),
              ),
              SizedBox(height: 20.0,),
              Image(
                image: AssetImage("02-512.png"),
                height: 100.0,
                width: 100.0,
              ),
              SizedBox(height: 20.0,),
              TextFormField(
                decoration: InputDecoration(
                  hintText: 'Email',
                  fillColor: Colors.brown[100],
                  filled: true,
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 2.0)
                  ),
                  focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                  ),
                ),
                validator: (val)=> val.isEmpty ? 'Enter an email': null,
                onChanged: (val){
                  setState(()=>email= val);
                },
              ),
              SizedBox(height: 20.0,),
              TextFormField(
                decoration: InputDecoration(
                  hintText: 'Password',
                  fillColor: Colors.brown[100],
                  filled: true,
                  enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.white, width: 2.0)
                  ),
                  focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                  ),
                ),
                validator: (val)=>val.length < 7 ? 'Enter a password with 7 characters ': null,
                obscureText: true,
                onChanged: (val){
                  setState(()=>password= val);
                },
              ),
              SizedBox(height: 20.0,),
              RaisedButton(
                color: Colors.black45,
                child: Text(
                  'Sign In',
                  style: TextStyle(color: Colors.white),
                ),
                onPressed: ()async{
                    if(_formKey.currentState.validate()){
                      setState(()=> loading = true);
                      dynamic result = await _auth.signInWithEmailAndPassword(email, password);
                      if(result == null){
                        setState(() {
                          error = 'could not sign with those credentials';
                          loading = false;
                        });
                      }
                    }
                },
              ),
              SizedBox(height: 12.0,),
              Text(
                error,
                style: TextStyle(color: Colors.red, fontSize: 14.0),
              )
            ],
          ),
        )
      ),
      ),
    );
  }
}
