import 'package:flutter/material.dart';
import 'package:flutter_app/services/auth.dart';

class Register extends StatefulWidget {

  final Function toggleView;
  Register({this.toggleView});

  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {

  final AuthService _auth = AuthService();
  final _formKey = GlobalKey<FormState>();

  //text fields
  String email = '';
  String password = '';
  String error = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.brown[400],
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        elevation: 1.0,
        title: Text('SignUp Dengue Stop'),
        actions: <Widget>[
          FlatButton.icon(
            icon: Icon(Icons.person),
            label: Text('Sign In'),
            onPressed: (){
              widget.toggleView();
            },
          )
        ],
      ),
      body: Container(
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
                //Text('Email'),
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
                //Text('Password'),
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
                  color: Colors.black26,
                  child: Text(
                    'Create Account',
                    style: TextStyle(color: Colors.white),
                  ),
                  onPressed: ()async{
                    if(_formKey.currentState.validate()){
                      dynamic result = await _auth.registerWithEmailAndPassword(email, password);
                      if(result == null){
                        setState(()=>
                          error = 'please provide a valid email to sign up'
                        );
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
    );;
  }
}
