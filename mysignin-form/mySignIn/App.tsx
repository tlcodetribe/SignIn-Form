/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 18/08/2021 - 09:47:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/08/2021
    * - Author          : MLab
    * - Modification    : 


import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "@react-navigation/native";
import firebase from "firebase"
  import 'firebase/auth'
  import 'firebase/firestore'



import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';


export default function App() {
  


    return (
      <SafeAreaProvider>

        <SignUp />
 
        <SignIn/>

      </SafeAreaProvider>
    );
  }**/

