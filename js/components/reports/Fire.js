import firebase from 'firebase'
import '@firebase/firestore';
import '@firebase/storage'

var firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

class Fire {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    addReport = async (reportObject) => {
        try {
            const db = firebase.firestore()
            const email = firebase.auth().currentUser.email
            reportObject.id = firebase.auth().currentUser.email
            reportObject.timestamp = Date.now()
            await db.collection("reports").doc(reportObject.timestamp).add(reportObject)
        } catch (error) {
            alert("Error: ", error)
        }
    }
}

Fire.shared = new Fire();
export default Fire;
