import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDN1UilYRJ1SY39wpicOWzcRy8o0gPhRHA",
    authDomain: "pro-71-4186d.firebaseapp.com",
    projectId: "pro-71-4186d",
    storageBucket: "pro-71-4186d.appspot.com",
    messagingSenderId: "839039381980",
    appId: "1:839039381980:web:c598a6717c5f4a8e5f5f19"
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

