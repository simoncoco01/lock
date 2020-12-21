import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, screen, ImageBackground } from 'react-native'
import {useFonts, Roboto_100Thin, Roboto_400Regular, Roboto_900Black} from '@expo-google-fonts/roboto'
import Hour from './components/Hour'
import Day from './components/Day'
import back from './assets/back.png'

export default function App() {

  const [fontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_900Black
  })

  if(!fontLoaded) {
    return (<View></View>)
  }
  
    return (
      <View style={styles.container}>
        <StatusBar style={'light'}/>
        <ImageBackground source={back} style={styles.image}>
            <Hour />
            <Text style={{position: 'absolute', bottom: 100, color: '#FFFFFF', opacity: 0.8, fontSize: 15}}>Utiliser l'empreinte pour déverrouiller</Text>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
