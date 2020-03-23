import 'package:cloud_firestore/cloud_firestore.dart';


class DatabaseService{

    final String uid;
    DatabaseService({this.uid});

    final CollectionReference userCollection = Firestore.instance.collection('userStat');
    
    Future updateUserData(String username,String location , int age) async{
        return await userCollection.document(uid).setData({
            'username' : username,
            'location' : location,
            'age'      : age
            }
        );
    }
    //get user streams
    Stream<QuerySnapshot> get userStat{
        return userCollection.snapshots();
    }
}