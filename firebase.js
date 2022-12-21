import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM9GCUOViu-g5awXBmPeqdRXvyOXqoGKc",
  authDomain: "uber-eats-clone-372210.firebaseapp.com",
  projectId: "uber-eats-clone-372210",
  storageBucket: "uber-eats-clone-372210.appspot.com",
  messagingSenderId: "330646805333",
  appId: "1:330646805333:web:56f506567d3a78e791eddc"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;