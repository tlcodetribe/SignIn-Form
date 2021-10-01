

import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import {firebase} from '../firebase/config'
import { doc, setDoc } from "firebase/firestore"; 


export default function SignUp({navigation}) {
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [rePass, setRePass] = useState('') 


  const handleSignUp = () => {
   
    {password === rePass ? 
      firebase.auth().createUserWithEmailAndPassword(email, password )
      .then(() => {
        
        firebase.firestore().collection('users').doc(email).collection('music').add({
          fName:fName,
          lName:lName,
          email:email,
        })
        .then(()=>{
        alert('User saved successfully')
        setEmail(email)

        })
          .catch((error) => {
          alert(error)
        })

      navigation.navigate('SignIn')
      alert('Successfully Signed Up') 
    
    })
  
      .catch((error) => {
      alert(error)
      setEmail('')
    })
  
    :
  
      alert("Passwords don't match")
    }
  }

  return (

      <SafeAreaView style={styles.container}>

      
      <View style={styles.separator}>

      <Text style={styles.title}><u>Sign Up Form</u></Text>

    

      <Text style={styles.intro}>Sign-Up to be able to save 
       your favourite bookmarks.</Text>




        <TextInput name='fName' style={styles.txtInput} 
        placeholder='   First Name'
        onChangeText={(text) => {setfName(text)}}/>





        <TextInput name='lName' style={styles.txtInput}
        placeholder='   Last Name' 
        onChangeText={(text) => {setlName(text)}}/>





        <TextInput name='email' style={styles.txtInput}
        placeholder='   Email' 
        onChangeText={(text) => {setEmail(text)}}
        />




        <TextInput name='pass' style={styles.txtInput}
        placeholder='   Password' 
        onChangeText={(text) => {setPass(text)}}/>





        <TextInput name='rePass' style={styles.txtInput}
        placeholder='   Re-Enter Password' 
        onChangeText={(text) => {setRePass(text)}}/>




          <TouchableOpacity style= {styles.btnSignUp} 
            onPress= {handleSignUp}>
             <Text> Sign Up</Text>
          </TouchableOpacity>

      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'slateblue',
    textAlign: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 34,
    paddingRight: '30%',
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: '100%'
  },

  separator: {
    marginBottom: 100,
    marginLeft:'15%',
    height: 1,
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center',
  },

  txtInput: {
    backgroundColor: '#f0e5e5',
    marginTop: 20,
    width:200,
    borderRadius: 30,
    padding: 3
  }, 

  btnSignUp: {
    backgroundColor:'#61f8e4',
    width: 100,
    height: 30,
    marginLeft: 50,
    marginTop: 30,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },

intro: {
  paddingTop: 60,
  fontSize: 16,
  color: '#1ffff0',
  maxWidth: 225
}
  
});
