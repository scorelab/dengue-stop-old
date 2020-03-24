import 'package:flutter/material.dart';


class UserSettings extends StatefulWidget {
  @override
  _UserSettingsState createState() => _UserSettingsState();
}

class _UserSettingsState extends State<UserSettings> {

  final _formKey = GlobalKey<FormState>();
  final List<String> ages = ['0','10','20','30','40','50','60'];

  String _currentName;
  String _currentCity;
  String _currentCountry;
  String _currentEmail;
  String _currentAge;



  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Text('Update your Profile', style: TextStyle(fontSize: 18.0),),
            SizedBox(height: 20.0,),
            TextFormField(
              decoration: InputDecoration(
                hintText: 'UserName',
                fillColor: Colors.brown[100],
                filled: true,
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 2.0)
                ),
                focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                ),
              ),
              validator: (val) => val.isEmpty ? 'Please enter a name' : null,
              onChanged: (val) => setState(() => _currentName = val),
            ),
            SizedBox(height: 20.0,),
            TextFormField(
              decoration: InputDecoration(
                hintText: 'City',
                fillColor: Colors.brown[100],
                filled: true,
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 2.0)
                ),
                focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                ),
              ),
              validator: (val) => val.isEmpty ? 'Please enter nearest city' : null,
              onChanged: (val) => setState(() => _currentCity = val),
            ),
            SizedBox(height: 20.0,),
            TextFormField(
              decoration: InputDecoration(
                hintText: 'Country',
                fillColor: Colors.brown[100],
                filled: true,
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 2.0)
                ),
                focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                ),
              ),
              validator: (val) => val.isEmpty ? 'Please enter your living country' : null,
              onChanged: (val) => setState(() => _currentCountry = val),
            ),
            SizedBox(height: 20.0,),
            TextFormField(
              decoration: InputDecoration(
                hintText: 'Valid Email',
                fillColor: Colors.brown[100],
                filled: true,
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 2.0)
                ),
                focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.redAccent, width: 2.0)
                ),
              ),
              validator: (val) => val.isEmpty ? 'Please enter a valid email' : null,
              onChanged: (val) => setState(() => _currentEmail = val),
            ),
            SizedBox(height: 20.0,),
            //age slider
            //city/country dropdown
            DropdownButtonFormField(
              value: _currentAge,
              items: ages.map((age){
                return DropdownMenuItem(
                  value: age,
                  child: Text('$age range'),
                );
              }).toList()
            ),
            RaisedButton(
              color: Colors.redAccent,
              child: Text('Update Data',style: TextStyle(color: Colors.white),),
              onPressed: (){
                print(_currentName);
                print(_currentCity);
                print(_currentCountry);
                print(_currentEmail);
                print(_currentAge);
              },

            ),
          ],
        )
    );
  }
}
