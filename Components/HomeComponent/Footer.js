import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../firebase/auth'

export default function Footer() {
    const {user}= useAuth();
    return (
        <View style={styles.container}>
           <View>
            <Text style={styles.txt}>for more contact as </Text>
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
    txt:{
        color:'white'
    },
})