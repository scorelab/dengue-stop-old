import 'package:flutter/material.dart';
import 'package:flutter_app/models/user.dart';
import 'package:flutter_app/views/authenticate/authenticate.dart';
import 'package:flutter_app/views/home/dashboard.dart';
import 'package:flutter_app/views/home/home.dart';
import 'package:flutter_app/views/home/nav_home.dart';
import 'package:provider/provider.dart';


class Wrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    final user = Provider.of<User>(context);
    print(user);

    //return either Home or Authenticate
    if(user == null){
      return Authenticate();
    }else{
      return NavBar();
    }
  }
}
