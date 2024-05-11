<<<<<<< HEAD
import { View, Text, Image, StyleSheet, TextInput, Linking } from 'react-native'
=======
import { View, Text, Image, StyleSheet, TextInput, Linking, TouchableOpacity } from 'react-native'
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
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
<<<<<<< HEAD
                    Find out what makes us the #1 email marketing and automations platform
                </Text>
                <Text style={{ color: '#003c43' }}>
                    Start your free website trial today
                </Text>
            </View>

            {/* second one */}
            <View style={styles.subcontainer1}>
=======
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
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9

                <View style={styles.box}>
                    <Text style={styles.txt}>for more .. contact us</Text>
                    <Text
<<<<<<< HEAD
                        style={{ color: '#135D66' }}
=======
                        style={{ color: '#E3FEF7' }}
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
                        onPress={() => { Linking.openURL('mailto:' + user?.email + '?subject=I am looking for your service&body=Hi There,') }}
                    >
                        servicesApp@gmail.com
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.txt}>Our app is ready to help you </Text>
                </View>
<<<<<<< HEAD
                
=======

>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#003c43',
<<<<<<< HEAD
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
=======
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        borderRadius:20,
        marginTop:25,
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9

    },
    subcontainer1: {
        padding: 20,
<<<<<<< HEAD
        paddingTop: 40,
        backgroundColor: '#77B0AA',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    box: {
        padding: 20,
        marginBottom: 20,
=======
        paddingTop: 30,
        backgroundColor: '#77B0AA',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
    },
    box: {
        padding: 20,
        // marginBottom: 20,
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9


    },
    txt: {
        color: 'white'
    },
<<<<<<< HEAD
=======
    subcontainer2:{
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#135D66',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
    },
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
})