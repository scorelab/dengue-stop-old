import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class DashboardTwoPage extends StatelessWidget {
  static final String path = "lib/src/pages/dashboard/dash2.dart";
  final TextStyle whiteText = TextStyle(color: Colors.white);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade800,
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        elevation: 0,
        title: Text("Dashboard"),
        centerTitle: true,
      ),
      body: _buildBody(context),
    );
  }

  Widget _buildBody(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          _buildHeader(),
          const SizedBox(height: 30.0),
          Container(
            padding: EdgeInsets.all(10.0),
            child: Text('Bubble Map'
              ,style: TextStyle(color: Colors.white,fontSize: 16.0),
            ),
            height: 200,
            width: 1000,
            color: Colors.black,
          ),
          const SizedBox(height: 10.0,),
          Row(
            children: <Widget>[
              Expanded(
                child: Column(
                  children: <Widget>[
                    Container(
                      height: 190,
                      color: Colors.blue,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "50+",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                color: Colors.white,
                                fontSize: 30.0,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.clinicMedical,
                              color: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Total Cases',
                              style: TextStyle(
                                fontSize: 20.0,
                                color: Colors.white,

                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    Container(
                      height: 120,
                      color: Colors.green,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "2 ",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                color: Colors.white,
                                fontSize: 30.0,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.heartbeat,
                              color: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Total Recovered',
                              style:TextStyle(
                                fontSize: 20.0,
                                color: Colors.white,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    Container(
                      height: 120,
                      color: Colors.orange,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "17",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                color: Colors.white,
                                fontSize: 30.0,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.solidHospital,
                              color: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Setup Hospitals',
                              style:TextStyle(
                                fontSize: 20.0,
                                color: Colors.white,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 10.0),
              Expanded(
                child: Column(
                  children: <Widget>[
                    Container(
                      height: 120,
                      color: Colors.red,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "2+",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                color: Colors.white,
                                fontSize: 30.0,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.skullCrossbones,
                              color: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Total Deaths',
                              style: TextStyle(
                                fontSize: 20.0,
                                color: Colors.white,

                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    Container(
                      height: 190,
                      color: Colors.yellow,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "150+",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                fontSize: 24.0,
                                color: Colors.black,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.hospital,
                              color: Colors.black,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Hospitalized Cases',
                              style: TextStyle(
                                fontSize: 20.0,
                                color: Colors.black,

                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    Container(
                      height: 120,
                      color: Colors.redAccent,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          ListTile(
                            title: Text(
                              "4+",
                              style:
                              Theme.of(context).textTheme.display1.copyWith(
                                color: Colors.white,
                                fontSize: 30.0,
                              ),
                            ),
                            trailing: Icon(
                              FontAwesomeIcons.map,
                              color: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 16.0),
                            child: Text(
                              'Affected Districts',
                              style:TextStyle(
                                fontSize: 20.0,
                                color: Colors.white,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              )
            ],
          )
        ],
      ),
    );
  }

  Widget _buildHeader() {
    return Row(
      children: <Widget>[
        Container(
          height: 100,
          width: 100,
          padding: const EdgeInsets.all(8.0),
          child: CircularProgressIndicator(
            value: 0.5,
            valueColor: AlwaysStoppedAnimation(Colors.blue),
            backgroundColor: Colors.grey.shade700,
          ),
        ),
        const SizedBox(width: 20.0),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                "Local Analysis",
                style: whiteText.copyWith(fontSize: 20.0),
              ),
              RaisedButton(
                child: Text('View Global'),
                //textColor: Colors.white,
                onPressed: (){},
              ),
              //const SizedBox(height: 5.0),
              Text(
                "Virus : COVID-19 Corona",
                style: TextStyle(color: Colors.grey, fontSize: 16.0),
              ),
              //const SizedBox(height: 10.0),
              Text(
                'Last Update : 18th March 2020',
                style: TextStyle(color: Colors.white,fontSize: 16.0),
              )
            ],
          ),
        )
      ],
    );
  }
}