import firebase from 'firebase'
import '@firebase/firestore';
import '@firebase/storage'

var firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

class Fire {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    addPost = async ({ text, localUri, avatar, name }) => {

        try {
            const remoteUri = await this.uploadPhotoAsync(localUri, `photos/$(this.uid)/${Date.now()}`);
            const db = firebase.firestore()
            const email = firebase.auth().currentUser.email
            // const avatar = db.collection("users").doc(email).then(doc => {
            //     doc.data()
            // }).catch(err => {
            //     console.log(err)
            // })
            // console.log(avatar)
            await db
                .collection("posts")
                .add({
                    text,
                    id: firebase.auth().currentUser.email,
                    timestamp: this.timestamp,
                    image: remoteUri,
                    name: name,
                    avatar: avatar
                })
        } catch (error) {
            alert("Error: ", error);
        }
    }

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => { },
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };


    sendHandler = (messages) => {
        console.log(messages)
        console.log('jhdfg')
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            };
            console.log(message)
            let location = message.user.sender + message.user.reciever
            let location1=''
            for (let i = 0; i < location.length; i++) {
                if (location[i] === '.')
                    continue;
                location1+=location[i];
            }
            console.log(location1)
            const db = firebase.database().ref(location1)
            location1=''
            location = message.user.reciever + message.user.sender
            for (let i = 0; i < location.length; i++) {
                if (location[i] === '.')
                    continue;
                location1+=location[i]
            }
            console.log(location1)
            db.push(message)
            db = firebase.database().ref(location1)
            db.push(message)
        }
        console.log('123')
    }


    createUser = async user => {
        let remoteUri = null
        console.log(firebase.auth().currentUser)
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            // let db = firebase.firestore;

            // await db.collection("users").doc('1').set({
            //     name: user.name,
            //     email: user.email,
            //     avatar: null 
            // });

            // if (user.avatar) {
            //     remoteUri = await this.uploadPhotoAsync(user.avatar, `avatar/${this.uid}`);

            //     db.collection("users").doc('1').set({ avatar: remoteUri }, { merge: true });
            // }
        } catch (error) {
            alert("Error: ", 'error');
        }
        try {
            const db = firebase.firestore();

            await db.collection("users").doc(user.email).set({
                name: user.name,
                email: user.email,
                avatar: null
            });
        } catch (error) {
            console.log('2')
            alert("Error: ", 'error2');
        }
        try {
            const db = firebase.firestore();
            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatar/${this.uid}`);
                db.collection("users").doc(user.email).set({ avatar: remoteUri }, { merge: true });
            }
        } catch (error) {
            console.log('3')
            alert("Error: ", 'error3');
        }
    }
    signOut = () => {
        firebase.auth().signOut();
    }

    get fireStore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;
