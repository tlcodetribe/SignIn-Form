import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase/firestore' 

export const Display = () => {

  return (
    <View style= {styles.covForm}>
       <TouchableOpacity style={styles.btnSign} 
              onPress= {retriveData}
            >
                  Show Data
          </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  covForm: {
    flex: 1,
    paddingBottom: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'slateblue'
  },

  btnSign: {
    backgroundColor:'#61f8e4',
    width: 100,
    height: 30,
    marginLeft: '16%',
    marginTop: 20,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },

})