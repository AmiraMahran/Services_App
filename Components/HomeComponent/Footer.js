import { View, Text, Image, StyleSheet, TextInput, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../firebase/auth'

export default function Footer() {
    const { user } = useAuth();
    return (
        // main fotter 
        <View style={styles.container}>

            {/* first one */}
            <View style={styles.subcontainer1}>
                <Text style={{ color: '#003c43' }}>
                    Find out what makes us the #1 email marketing and automations platform
                </Text>
                <Text style={{ color: '#003c43' }}>
                    Start your free website trial today
                </Text>
            </View>

            {/* second one */}
            <View style={styles.subcontainer1}>

                <View style={styles.box}>
                    <Text style={styles.txt}>for more .. contact us</Text>
                    <Text
                        style={{ color: '#135D66' }}
                        onPress={() => { Linking.openURL('mailto:' + user?.email + '?subject=I am looking for your service&body=Hi There,') }}
                    >
                        servicesApp@gmail.com
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.txt}>Our app is ready to help you </Text>
                </View>
                
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
    subcontainer1: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#77B0AA',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    box: {
        padding: 20,
        marginBottom: 20,


    },
    txt: {
        color: 'white'
    },
})