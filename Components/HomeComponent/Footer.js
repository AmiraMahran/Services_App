import { View, Text, Image, StyleSheet, TextInput, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, EvilIcons, Feather, FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../firebase/auth'

export default function Footer() {
    const { user } = useAuth();
    return (
        // main fotter 
        <View style={styles.container}>

            {/* first one */}
            <View style={styles.subcontainer1}>
<<<<<<< HEAD
                <Text style={{ color: '#003c43',lineHeight:20 }}>
=======
                <Text style={{ color: '#003c43' }}>
<<<<<<< HEAD
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
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
=======
>>>>>>> 1fbab7b0898587c10a91845c7fe1f04e274a40ce
                    Find out what makes us the #1 SERVICES platform
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: 'white',lineHeight:20 }}>
                        Start your free website trial today
                    </Text>
                </TouchableOpacity>
            </View>

            {/* second one */}
            <View style={styles.subcontainer2}>

                <View style={styles.box}>
                    <Text style={styles.txt}>for more .. contact us</Text>
                    <Text
<<<<<<< HEAD
<<<<<<< HEAD
                        style={{ color: '#E3FEF7',lineHeight:20 }}
=======
<<<<<<< HEAD
                        style={{ color: '#135D66' }}
=======
                        style={{ color: '#E3FEF7' }}
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
=======
                        style={{ color: '#E3FEF7' }}
>>>>>>> 1fbab7b0898587c10a91845c7fe1f04e274a40ce
                        onPress={() => { Linking.openURL('mailto:' + user?.email + '?subject=I am looking for your service&body=Hi There,') }}
                    >
                        servicesApp@gmail.com
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.txt}>Our app is ready to help you </Text>

                    <Text style={{ color: 'white',textAlign:'center',marginTop:30}}>visit us </Text>

                    <View
                        style={{ borderTopWidth: 1, borderColor: "white", marginVertical: 20, paddingTop: 15 }}>
                    </View>
                    <EvilIcons
                        name="sc-facebook" size={36} style={{ paddingBottom: 15, textAlign: 'center', marginLeft: -10 }} color="#E3FEF7" />
                    <View
                        style={{ borderTopWidth: 1, borderColor: "white", marginVertical: 20 }}>
                    </View>
                    <Entypo
                        name="instagram" size={24} style={{ paddingBottom: 15, textAlign: 'center' }} color="#E3FEF7" />
                    <View
                        style={{ borderTopWidth: 1, borderColor: "white", marginVertical: 20 }}>
                    </View>
                    <Feather
                        name="twitter" size={24} style={{ paddingBottom: 15, textAlign: 'center' }} color="#E3FEF7" />
                    <View
                        style={{ borderTopWidth: 1, borderColor: "white", marginVertical: 20 }}>
                    </View>
                    <Entypo
                        name="linkedin" size={24} style={{ paddingBottom: 15, textAlign: 'center' }} color="#E3FEF7" />
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
<<<<<<< HEAD
        borderRadius: 20,
        marginTop: 25,
=======
        borderRadius:20,
        marginTop:25,
<<<<<<< HEAD
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
=======
>>>>>>> 1fbab7b0898587c10a91845c7fe1f04e274a40ce

    },
    subcontainer1: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#77B0AA',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 25,
    },
    box: {
        // flex: 1,
        padding: 15,
        // marginBottom: 20,


    },
    txt: {
        color: 'white',
        lineHeight:20
    },
<<<<<<< HEAD
<<<<<<< HEAD
    subcontainer2: {
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 1fbab7b0898587c10a91845c7fe1f04e274a40ce
    subcontainer2:{
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#135D66',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
    },
})