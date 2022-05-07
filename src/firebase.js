import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAUT-7RwjdEtryqoLpQObg63FtmpodNFQI",
        authDomain: "facebook-messenger-clone-ece54.firebaseapp.com",
        projectId: "facebook-messenger-clone-ece54",
        storageBucket: "facebook-messenger-clone-ece54.appspot.com",
        messagingSenderId: "642822787123",
        appId: "1:642822787123:web:e62c584cea42529c541346",
        measurementId: "G-9QHJLR2E27"
    }
)
const db = firebaseApp.firestore();
export default firebase;
export { db };