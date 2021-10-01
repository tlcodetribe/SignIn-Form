/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 18/08/2021 - 09:49:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/08/2021
    * - Author          : MLab
    * - Modification    : 
**/


  import firebase from 'firebase'
  import 'firebase/auth'
  import 'firebase/firestore'

  
const firebaseConfig = {
    apiKey: "AIzaSyDgb7bAp2NLqk3AU9avlVU1elvmZhnxmYg",
    authDomain: "loginform-b5c6d.firebaseapp.com",
    projectId: "loginform-b5c6d",
    storageBucket: "loginform-b5c6d.appspot.com",
    messagingSenderId: "234654277720",
    appId: "1:234654277720:web:2f9b2bb051b12172742a2d",
    measurementId: "G-H3H1EN7TPK"
  };
  firebase.initializeApp(firebaseConfig);

  export {firebase} 