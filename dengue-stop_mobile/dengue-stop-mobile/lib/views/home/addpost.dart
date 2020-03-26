import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/views/home/postDetails.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MyPost extends StatefulWidget {
  @override
  _MyPostState createState() => _MyPostState();
}

class _MyPostState extends State<MyPost> {

  StreamSubscription<QuerySnapshot> subscription;

  List<DocumentSnapshot> snapshot;

  CollectionReference collectionReference = Firestore.instance.collection("Post");



  passData(DocumentSnapshot snap){
    Navigator.of(context).push(MaterialPageRoute(
      builder: (context)=> PostDetails(snapshot: snap,)
    ));
  }




  @override
  void initState(){
    super.initState();

    subscription = collectionReference.snapshots()
        .listen((datasnapshot) {
      setState(() {
              snapshot = datasnapshot.documents;
      });
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('Add Document/Posts/Blog'),
        backgroundColor: Colors.redAccent,
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.search),
            onPressed: ()=> print('Tapped search'),
          ),
          IconButton(
            icon: Icon(Icons.add),
            onPressed: ()=> print('Tapped add Post'),
          ),
        ],
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: new LinearGradient(colors: [Colors.deepPurpleAccent,Colors.purpleAccent]),

        ),
        child: new ListView.builder(
          itemCount: snapshot.length,
          itemBuilder: (context,index){
            return Card(
              elevation: 2.0,
              color: Colors.transparent.withOpacity(0.2),
              margin: EdgeInsets.all(10.0),

              child: Container(
                padding: EdgeInsets.all(10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    CircleAvatar(
                      child: Text(snapshot[index].data["title"][0]),
                      backgroundColor: Colors.yellow,
                      foregroundColor: Colors.black,

                    ),
                    SizedBox(width: 6.0,),
                    //Text Area of the post
                    Container(
                      width: 210.0,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          //Click Events
                          InkWell(
                            child: Text(
                              snapshot[index].data["title"],
                              //Color TextViews
                              style: TextStyle(
                                fontSize: 22.0,
                                color: Colors.white,
                              ),
                              maxLines: 2,
                            ),
                            onTap: (){
                              passData(snapshot[index]);
                            },
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
