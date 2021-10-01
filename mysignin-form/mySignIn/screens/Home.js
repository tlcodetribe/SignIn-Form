import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList} from 'react-native'
import {firebase} from '../firebase/config'
import Display from './Display'
import { ListItem, Divider} from 'react-native-elements'

export default function Home ({navigation, email})  {
  const [fName, setFName] = useState('')
  const [title, setTitle] = useState('') 
  const [artist, setArtist] = useState('')
  const [albumn, setAlbumn] = useState('')
  const [genre, setGenre] = useState('')
  let [year, setYear] = useState('')

  const state = {
    musicList: [],
    currentMusicItem: null
  }

  function onMusicReceived(musicList) {
    alert(musicList)
    this.setState(prevState => ({
      musicList: prevState.musicList = musicList
    }))
  }

const handleStore = () => {

  firebase.firestore().collection('users').doc(email).collection('music').add({
    fName:fName,
    title:title,
    artist:artist,
    albumn:albumn,
    genre:genre,
    year:year,
    createAt: firebase.firestore.FieldValue.serverTimestamp()

  }).then(()=>{
    alert('Bookmark saved successfully')

  })
     .catch((error) => {
      alert(error)
     })
  }





  const retrieveData = async (musicRetrieved, email) => {
   
    var musicList = []

    var snapshot= await firebase.firestore().collection('users').doc(email).collection('music')
    .orderBy('createAt')
    .get()
 
    snapshot.forEach((doc) => {
      musicList.push(doc.data())
      
    })
    console.log(musicList)
    alert('Data collected')
    musicRetrieved([...musicList])
  
} 





  
  return (
    <SafeAreaView>
    <View style= {styles.covForm}>
      <Text style= {styles.head}><u>Save Bookmark :</u></Text>
        <View style= {styles.firstRow}>

            <Text style= {styles.intro}>
              Bookmark Your Favourite Songs 
            </Text>

        </View>



        <View style={styles.row}>

                <View > 
                    <TextInput style={styles.colTitle} 
                    className='inID'
                    type='text'
                    name="title" 
                    onChangeText={(text) => {setTitle(text)}} 
                    placeholder="Song Title" 
                />
                </View>
            </View>



               <br />



            <View style={styles.row}>

                <View >
                    <TextInput style={styles.column}
                    type='text'
                    name="artist" 
                     onChangeText={(text) => {setArtist(text)}} 
                    placeholder="Artist" 
                   />
                </View>
            </View>


              <br />

        
            <View style={styles.row}>

                <View >
                    <TextInput style={styles.column}
                    type='text'
                    name="album" 
                     onChangeText={(text) => {setAlbumn(text)}} 
                    placeholder="Album" 
                    />
                </View>
            </View>   


              <br />

            <View style={styles.row}>

                <View >
                    <TextInput style={styles.column}
                    type='text'
                    name="genre" 
                     onChangeText={(text) => {setGenre(text)}} 
                    placeholder="Genre" 
                    />
                </View>
            </View>       


                   <br />


            <View style={styles.row}>

                <View >
                    <TextInput style={styles.column}
                    type='text'
                    name="year"
                    onChangeText={(text) => {setYear(text)}}
                    placeholder="Year" 
                    />
                </View>
            </View>



            <TouchableOpacity style={styles.btnSign} 
              onPress= {handleStore}
            >
                  Add Bookmark
          </TouchableOpacity>



          <TouchableOpacity style={styles.btnSign} 
              onPress= {onMusicReceived}
            >
                  Show Bookmark
          </TouchableOpacity>


        
      



    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  
  covForm:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'slateblue',
    paddingBottom: 100,
  },

  head: {
    fontSize: 36,
    paddingTop:20,
    color: '#fff',
  },


  intro: {
    paddingTop: 40,
    fontSize: 18,
    color: '#1ffff0',
  },

  column: {
    backgroundColor: '#f0e5e5',
    marginTop: 2,
    width:200,
    borderRadius: 30,
    padding: 3    
  },

  colTitle: {
    backgroundColor: '#f0e5e5',
    marginTop: 22,
    width:200,
    borderRadius: 30,
    padding: 3 
  },

  btnSign: {
    backgroundColor:'#61f8e4',
    width: 200,
    height: 30,
    marginTop: 30,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },

})

