import 'dart:async';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_app/screens/dashboard.dart';
import 'package:flutter_app/services/auth.dart';
import 'package:flutter_app/views/home/map.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'firestoreservice.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'taskscreen.dart';
import 'task.dart';



class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Task> items;
  FirestoreService fireServ = new FirestoreService();
  StreamSubscription<QuerySnapshot> todoTasks;
  final AuthService _auth = AuthService();

  final Color color1 = Color(0xffFA696C);
  final Color color2 = Color(0xffFA8165);
  final Color color3 = Color(0xffFB8964);

  @override
  void initState() {
    super.initState();

    items=new List();

    todoTasks?.cancel();
    todoTasks=fireServ.getTaskList().listen((QuerySnapshot snapshot){
        final List<Task> tasks=snapshot.documents
        .map((documentSnapshot) => Task. fromMap(documentSnapshot.data))
        .toList();

        setState(() {
        this.items = tasks;
      });
      
    });

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Report Case'
        ),
        backgroundColor: Colors.redAccent,
        actions: <Widget>[

          FlatButton.icon(
            icon:Icon(Icons.person),
            label: Text('logout'),
            onPressed: ()async{
              await _auth.signOut();
            },
          )
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
        children: <Widget>[
          _buildHeader(),
          Container(
            //color: Colors.grey.shade700,
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height - 80,
            child: ListView.builder(
                itemCount: items.length,
                itemBuilder: (context, index) {
                  return Stack(children: <Widget>[
                    // The containers in the background
                    Column(children: <Widget>[
                      Padding(
                        padding: EdgeInsets.only(left: 8.0, right: 8.0),
                        child: Container(
                          width: MediaQuery.of(context).size.width,
                          height: 80.0,
                          child: Padding(
                            padding: EdgeInsets.only(top: 8.0, bottom: 8.0),
                            child: Material(
                              color: Colors.white,
                              elevation: 14.0,
                              shadowColor: Color(0x802196F3),
                              child: Center(
                                child: Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: <Widget>[
                                      todoType('${items[index].tasktype}'),
                                      Text(
                                        '${items[index].taskname}',
                                        style: TextStyle(
                                            color: Colors.black,
                                            fontSize: 20.0),
                                      ),
                                      Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: <Widget>[
                                          Text(
                                            '${items[index].taskdate}',
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontSize: 18.0,
                                                fontWeight: FontWeight.bold),
                                          ),
                                          Text(
                                            '${items[index].tasktime}',
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontSize: 16.0),
                                          ),
                                        ],
                                      )
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ]),
                  ]);
                }),
          ),
        ],
      ),
      ),
      floatingActionButton: SpeedDial(
      animatedIcon: AnimatedIcons.menu_close,
      backgroundColor: Colors.redAccent,
      marginRight: 20.0,
      marginBottom: 20.0,
      children: [
        SpeedDialChild(
          child: Icon(Icons.pan_tool,),
          backgroundColor: Colors.green,
          label: 'Report Patient',
          onTap: (){
            Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => TaskScreen(Task('', '', '', '', '')),
                    fullscreenDialog: true),);
          },
        ),
        SpeedDialChild(
          child: Icon(Icons.picture_as_pdf,),
          backgroundColor: Colors.amber,
          label: 'Report Documents',
          onTap: (){
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => TaskScreen(Task('', '', '', '', '')),
                  fullscreenDialog: true),
            );
          },
        ),
        SpeedDialChild(
          child: Icon(Icons.description,),
          backgroundColor: Colors.redAccent,
          label: 'Add Blogs',
          onTap: (){
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => Dashboard(),
                  fullscreenDialog: true),
            );
          },
        ),
        SpeedDialChild(
          child: Icon(Icons.image,),
          backgroundColor: Colors.blueAccent,
          label: 'Add Image/Video',
          onTap: (){
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => TaskScreen(Task('', '', '', '', '')),
                  fullscreenDialog: true),
            );
          },
        ),
      ],
     ),
    );
  }
  Container _buildHeader() {
    return Container(
      height: 250,
      width: double.infinity,
      child: Stack(
        children: <Widget>[
          Positioned(
            bottom: 0,
            left: -100,
            top: -150,
            child: Container(
              width: 350,
              decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                      colors: [color1, color2]
                  ),
                  boxShadow: [
                    BoxShadow(
                        color: color2,
                        offset: Offset(4.0,4.0),
                        blurRadius: 10.0
                    )
                  ]
              ),
            ),
          ),
          Container(
            width: 100,
            height: 100,
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: LinearGradient(
                    colors: [color3,color2]
                ),
                boxShadow: [
                  BoxShadow(
                      color: color3,
                      offset: Offset(1.0,1.0),
                      blurRadius: 4.0
                  )
                ]
            ),
          ),
          Positioned(
            top: 100,
            right: 200,
            child: Container(
              width: 50,
              height: 50,
              decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                      colors: [color3,color2]
                  ),
                  boxShadow: [
                    BoxShadow(
                        color: color3,
                        offset: Offset(1.0,1.0),
                        blurRadius: 4.0
                    )
                  ]
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(
                top: 60,
                left: 30
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text("Hey, John Doe", style: TextStyle(
                    color: Colors.white,
                    fontSize: 28.0,
                    fontWeight: FontWeight.w700
                ),),
                SizedBox(height: 10.0),
                Text("Have a Healthy Day\nand we need your help...", style: TextStyle(
                    color: Colors.white,
                    fontSize: 18.0
                ),)
              ],
            ),
          )
        ],
      ),
    );
  }


  Widget todoType(String icontype) {
    IconData iconval;
    Color colorval;
    switch (icontype) {
      case 'travel':
        iconval = FontAwesomeIcons.mapMarkerAlt;
        colorval = Color(0xff4158ba);
        break;
      case 'shopping':
        iconval = FontAwesomeIcons.shoppingCart;
        colorval = Color(0xfffb537f);
        break;
      case 'gym':
        iconval = FontAwesomeIcons.dumbbell;
        colorval = Color(0xff4caf50);
        break;
      case 'party':
        iconval = FontAwesomeIcons.glassCheers;
        colorval = Color(0xff9962d0);
        break;
      default:
         iconval = FontAwesomeIcons.tasks;
         colorval = Color(0xff0dc8f5);
      //
    }
    return CircleAvatar(
      backgroundColor: colorval,
      child: Icon(iconval, color: Colors.white, size: 20.0),
    );
  }
}
