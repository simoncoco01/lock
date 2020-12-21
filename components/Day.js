import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import 'moment/locale/fr'

export default function Day() {
    
    const [isLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    })

    const [date, setDate] = useState(new Date())
    const [da, setDa] = useState('')
    const [show, setShow] = useState(true)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate)
        setShow(false)
    }
    
    useEffect(() => {
        var ds = getBetweenInterval(date)
        ds = ds.map(d => d = moment(d).format('ddd DD MMMM').toUpperCase())
            var f = 0
            if(ds.length > 1) {
                setInterval(() => {
                    f++
                    if(f < ds.length) {
                        setDa(ds[f])
                    }
                }, 250)
            }
    }, [date])

    if(!isLoaded) {
        return (
            <View></View>
        )
    }

    return (
        <View style={styles.container}>
            {show && <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}
          />}
          <Text style={styles.text}>{da}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontFamily: 'Roboto_500Medium',
        fontWeight: '700'
    },
    container: {
        marginTop: 30
    }
})

var getBetweenInterval = (day) => {
    var getDaysArray = function(start, end) {
      for(var arr=[],dt=new Date(start); end<=dt; dt.setDate(dt.getDate()-1)){
          arr.push(new Date(dt))
      }
      return arr
    
    }
    var daylist = getDaysArray(new Date(), day);
    return daylist
  }

