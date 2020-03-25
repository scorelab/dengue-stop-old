import 'package:flutter/material.dart';
import 'package:flutter_app/views/home/maplocation.dart';
import 'package:flutter_circular_chart/flutter_circular_chart.dart';
import 'package:flutter_sparkline/flutter_sparkline.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class DashboardTwoPage extends StatelessWidget {
  final TextStyle whiteText = TextStyle(color: Colors.white);
  DashboardTwoPage({Key key, this.title}) : super(key: key);


  bool animate;

  var data = [0.0,2.0, 5.0, 8.0, 10.0, 11.0, 10.0, 10.5, 9.0, 2.5, 0.0, 0.0];
  var data1 = [0.0,2.0,5.5,7.0,10.5,11.0,0.8,1.0,2.0,3.0,3.2];

  List<charts.Series> seriesList;

  List<CircularStackEntry> circularData = <CircularStackEntry>[
    new CircularStackEntry(
      <CircularSegmentEntry>[
        new CircularSegmentEntry(5.0, Color(0xff4285F4), rankKey: 'R'),
        new CircularSegmentEntry(60.0, Color(0xfff3af00), rankKey: 'H'),
        new CircularSegmentEntry(20.0, Color(0xffec3337), rankKey: 'C'),
        new CircularSegmentEntry(4.0, Color(0xff40b24b), rankKey: 'D'),
      ],
      rankKey: 'Distributions',
    ),
  ];


  final String title;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade800,
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        elevation: 0,
        title: Text("Dashboard"),
        centerTitle: true,
        actions: <Widget>[
          IconButton(icon: Icon(
              FontAwesomeIcons.mapMarked),
              tooltip: 'View Map',
              onPressed: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => MapNavigation()));
            //
          }),
        ],
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
          const SizedBox(height: 10.0),
          Padding(
            padding: const EdgeInsets.all(2.0),
            child: mychart1Items("Patient Growth Day by Day","102","+90.9% down"),
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
                      height: 100,
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
                      height: 100,
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
          ),
          SizedBox(height: 10.0,),
          Text('Other Statistics',style: TextStyle(fontSize: 20.0,),),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: myCircularItems("Patient types","Confirmed"),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
//            child: newChart(),
          ),
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
              Text(
                "Virus : COVID-19 Corona",
                style: TextStyle(color: Colors.grey, fontSize: 16.0),
              ),
              //const SizedBox(height: 10.0),
              Text(
                'Last Update : 18th March 2020',
                style: TextStyle(color: Colors.white,fontSize: 16.0),
              ),
            ],
          ),
        )
      ],
    );
  }

  //charts
  Material myCircularItems(String title, String subtitle){
    return Material(
      color: Colors.white,
      elevation: 14.0,
      borderRadius: BorderRadius.circular(24.0),
      shadowColor: Color(0x802196F3),
      child: Center(
        child:Padding(
          padding: EdgeInsets.all(3.0),
          child: Row(
            mainAxisAlignment:MainAxisAlignment.center,
            children: <Widget>[
              Column(
                mainAxisAlignment:MainAxisAlignment.center,
                children: <Widget>[

                  Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Text(title,style:TextStyle(
                      fontSize: 20.0,
                      color: Colors.blueAccent,
                    ),
                    ),
                  ),

                  Padding(
                    padding: EdgeInsets.all(2.0),
                    child:Text(subtitle,style:TextStyle(
                      fontSize: 20.0,
                    ),),
                  ),

                  Padding(
                    padding:EdgeInsets.all(2.0),
                    child:AnimatedCircularChart(
                      size: const Size(150.0, 150.0),
                      initialChartData: circularData,
                      chartType: CircularChartType.Pie,
                    ),
                  ),

                ],
              ),
            ],
          ),
        ),
      ),
    );
  }


  Material mychart1Items(String title, String priceVal,String subtitle) {
    return Material(
      color: Colors.white,
      elevation: 14.0,
      borderRadius: BorderRadius.circular(24.0),
      shadowColor: Color(0x802196F3),
      child: Center(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[

                  Padding(
                    padding: EdgeInsets.all(1.0),
                    child: Text(title, style: TextStyle(
                      fontSize: 20.0,
                      color: Colors.blueAccent,
                    ),),
                  ),

                  Padding(
                    padding: EdgeInsets.all(1.0),
                    child: Text(priceVal, style: TextStyle(
                      fontSize: 30.0,
                    ),),
                  ),
                  Padding(
                    padding: EdgeInsets.all(1.0),
                    child: Text(subtitle, style: TextStyle(
                      fontSize: 20.0,
                      color: Colors.blueGrey,
                    ),),
                  ),

                  Padding(
                    padding: EdgeInsets.all(1.0),
                    child: new Sparkline(
                      data: data,
                      lineColor: Color(0xffff6101),
                      pointsMode: PointsMode.all,
                      pointSize: 8.0,
                    ),
                  ),

                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Material newChart(){
    return Material(
        child: charts.TimeSeriesChart(seriesList,
            animate: animate,
            primaryMeasureAxis: new charts.NumericAxisSpec(
                renderSpec: charts.GridlineRendererSpec(
                    lineStyle: charts.LineStyleSpec(
                      dashPattern: [4, 4],
                    )))),
    );
  }


  static List<charts.Series<MyRow, DateTime>> _createSampleData() {
    final data = [
      new MyRow(new DateTime(2017, 9, 25), 6),
      new MyRow(new DateTime(2017, 9, 26), 8),
      new MyRow(new DateTime(2017, 9, 27), 6),
      new MyRow(new DateTime(2017, 9, 28), 9),
      new MyRow(new DateTime(2017, 9, 29), 11),
      new MyRow(new DateTime(2017, 9, 30), 15),
      new MyRow(new DateTime(2017, 10, 01), 25),
      new MyRow(new DateTime(2017, 10, 02), 33),
      new MyRow(new DateTime(2017, 10, 03), 27),
      new MyRow(new DateTime(2017, 10, 04), 31),
      new MyRow(new DateTime(2017, 10, 05), 23),
    ];

    return [
      new charts.Series<MyRow, DateTime>(
        id: 'Cost',
        domainFn: (MyRow row, _) => row.timeStamp,
        measureFn: (MyRow row, _) => row.cost,
        data: data,
      )
    ];
  }
}

/// Sample time series data type.
class MyRow {
  final DateTime timeStamp;
  final int cost;

  MyRow(this.timeStamp, this.cost);
}