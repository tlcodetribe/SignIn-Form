
import React, {useState, useRef} from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {firebase} from '../firebase/config'
import Home from './Home'


export default function SignIn({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('') 
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  

  const handleSignIn = () => {
    
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    navigation.navigate('Home')
    alert('Signed in!!!')
     setEmail(email)

  })
  .catch((error) => {
    alert('Failed!!!')
  });
    
  }


  // fadeAnim will be used as the value for opacity. Initial Value: 0
  

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 3 seconds
    
    Animated.timing(fadeAnim, {
      
      toValue: 1,
      duration: 3000
    }).start();
    
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };



  return (

    <SafeAreaView style={styles.container}>

      


      


      <View style={styles.separator}>

          <Text style={styles.title}><u>Sign In Form</u></Text>
      
          <Text style={styles.header}>Sign-In To Save Bookmarks</Text>
          
          <TextInput name='email' style={styles.email} 
          placeholder='Email...' onChangeText={(text) => {setEmail(text)}}/>


          <TextInput style={styles.pass} 
          name='password'
          placeholder='Password...' onChangeText={(text) => {setPass(text)}} />


          <TouchableOpacity  style= {styles.btnSignIn}
            onPress={handleSignIn} 
          >

              <Text>Sign In</Text>

          </TouchableOpacity>    


          <TouchableOpacity onPress={ fadeIn} >

             <Text style= {styles.sign}>"Don't have an account?"</Text>

         </TouchableOpacity>

          
      <View>
       
           

      </View>  

      <Animated.View
        style={[
          
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >


        <TouchableOpacity style= {styles.fadingBtn}
          onPress= {() => {navigation.navigate('SignUp')}} >
              <Text>SignUp</Text>
          </TouchableOpacity>

      </Animated.View>       
          
    </View>

  </SafeAreaView>

      
        
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'slateblue'
  },

  title: {
    fontSize: 36,
    marginTop:60,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent:'center'
  },

  separator: {
    marginBottom: 350,
    marginLeft: '25%',
    height: 1,
    width: '80%',
  },

  email: {
    width:200,
    marginTop: 20,
    backgroundColor: '#f0e5e5',
    borderRadius: 30,
    padding: 3 
  },

  pass: {
    backgroundColor: '#f0e5e5',
    marginTop: 20,
    width:200,
    borderRadius: 30,
    padding: 3
  },

  btnSignIn: {
    backgroundColor:'#61f8e4',
    width: 100,
    height: 30,
    marginLeft: 50,
    marginTop: 40,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },


  fadingBtn: {
    backgroundColor:'#61f8e4',
    color: '#fff',
    textDecorationColor: 'red',
    width: 100,
    height: 30,
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },

  sign: {
    padding:15,
    color:'maroon',
    fontWeight: 'bold'
  },

  header: {
    fontSize: 16,
    paddingTop: 40,
    fontWeight: 'bold',
    color: '#1ffff0',
    justifyContent:'center'
  }
});
