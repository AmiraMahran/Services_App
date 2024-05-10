import { View, Text, Image, StyleSheet, TextInput, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../firebase/auth'

export default function Footer() {
    const {user}= useAuth();
    return (
        <View style={styles.container}>
           <View style={styles.box}>
            <Text style={styles.txt}>for more .. contact us</Text>
            <Text
             style={styles.txt}
             onPress={()=>{Linking.openURL('mailto:'+user?.email+'?subject=I am looking for your service&body=Hi There,')}}
             
            >
                servicesApp@gmail.com
                </Text>

           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#003c43',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    box:{
        padding:20,

    },
    txt:{
        color:'white'
    },
})