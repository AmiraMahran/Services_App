import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Route } from 'expo-router/build/Route'

export default function StartPage() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/images/login.png')}
                style={styles.loginImage}
            />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: '#ffff', textAlign: 'center' }}>
                    Let's Find 
                    <Text style={{ fontWeight: 'bold' }}> Professinal Cleaning and repair </Text>Service
                </Text>
                <Text style={{ fontSize: 15, color: '#ffff', textAlign: 'center', marginTop: 20 }}>Best App to find services near you which deliver you a professinal services</Text>
                <Pressable style={styles.button} onPress={()=>router.push('/SignIn')}>
                    <Text style={{ textAlign: 'center', color: '#003C43', fontSize: 15 }}>Let's Get Started</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: '#77B0AA',
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: '#ffff',
        borderRadius: 99,
        marginTop: 20,
    }
})
