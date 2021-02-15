import app from "firebase/app";

const config = {
  
    apiKey: "AIzaSyC7nJJCgpxtxRfoHtbT8c--Sn469Y4KHuM",
    authDomain: "react-firebase-2806f.firebaseapp.com",
    projectId: "react-firebase-2806f",
    storageBucket: "react-firebase-2806f.appspot.com",
    messagingSenderId: "583097000033",
    appId: "1:583097000033:web:6fbe0e29c78014db700a20",
    measurementId: "G-LJQRQ36LTK"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  export default Firebase;
