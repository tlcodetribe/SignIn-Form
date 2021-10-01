import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Navigation from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from "firebase"



import SignIn from './mySignIn/screens/SignIn';
import SignUp from './mySignIn/screens/SignUp';
import Home from './mySignIn/screens/Home';
import Display from './mySignIn/screens/Display';
 
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [email, setEmail] = React.useState('')
  const [users, setUsers] = React.useState('')
 


    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn">

        <Stack.Screen name="SignIn">
        {props => <SignIn {...props} setMail= {setEmail} />}
        </Stack.Screen>


        <Stack.Screen name="SignUp">
        {props => <SignUp {...props} setMail= {setEmail} />}
        </Stack.Screen>

        
        <Stack.Screen name="Home" >
        {props => <Home {...props} setMail= {setEmail} />}
        </Stack.Screen>


        <Stack.Screen name="Display">
        {props => <Display {...props} setMail= {setEmail}/>}
        </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>  

    );
  }