import { View, Text, Image, StyleSheet, TextInput, Linking, TouchableOpacity } from 'react-native'
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
                    Find out what makes us the #1 SERVICES platform
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: 'white' }}>
                        Start your free website trial today
                    </Text>
                </TouchableOpacity>
            </View>

            {/* second one */}
            <View style={styles.subcontainer2}>

                <View style={styles.box}>
                    <Text style={styles.txt}>for more .. contact us</Text>
                    <Text
                        style={{ color: '#E3FEF7' }}
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
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        borderRadius:20,

    },
    subcontainer1: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#77B0AA',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
    },
    box: {
        padding: 20,
        // marginBottom: 20,


    },
    txt: {
        color: 'white'
    },
    subcontainer2:{
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#135D66',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
    },
})