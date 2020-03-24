import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_app/models/user.dart';
import 'package:flutter_app/models/userProperties.dart';


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
    Stream<List<Users>> get userStat{
        return userCollection.snapshots().map(_userList);
    }

    //user list from snapshot
    List<Users> _userList(QuerySnapshot snapshot){
        return snapshot.documents.map((doc){
            return Users(
                name: doc.data['name'] ?? ' ',
                city: doc.data['city'] ?? ' ' ,
                country: doc.data['country'] ?? ' ',
                email: doc.data['email'] ?? ' ',
                age: doc.data['age'] ?? 0
            );
        }).toList();
    }

    //get user profile
    Stream<UserData> get userData{
        return userCollection.document(uid).snapshots().map(_userDataFromSnapshot);
    }

    //user data from snapshots
    UserData _userDataFromSnapshot(DocumentSnapshot snapshot){
        return UserData(
            uid: uid,
            name: snapshot.data['name'],
            city: snapshot.data['city'],
            country: snapshot.data['country'],
            email: snapshot.data['email'],
            age: snapshot.data['age'],
        );
    }
}