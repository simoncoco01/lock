import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useFonts, Roboto_100Thin, Roboto_400Regular, Roboto_900Black, Roboto_300Light} from '@expo-google-fonts/roboto'
import moment from 'moment-timezone'
import 'moment/locale/fr'
import Day from './Day'

export default function Hour() {

    
    const [hour, setHour] = useState(moment().hour())
    const [minute, setMinute] = useState(moment().format('mm'))

    setInterval(() => {
    
        setHour(moment().tz('Europe/Paris').hours())
        setMinute(moment().format('mm'))
    }, 1000)

    const [fontLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular
    })

    if(!fontLoaded) {
        return (<View></View>)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{hour}</Text>
            <Text style={styles.text}>{minute}</Text>
            <Day />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: -80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Roboto_100Thin',
        fontSize: 100,
        color: '#FFFFFF',
        margin: -20,
    }
})