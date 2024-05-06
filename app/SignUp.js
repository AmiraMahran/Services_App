import { StyleSheet, Text, View, Image, Pressable, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { router } from 'expo-router';


import { useAuth } from '../firebase/auth';


export default function SignUp() {
    const emailRef = useRef("")
    const passwordRef = useRef("");
    const userNameRef = useRef("");
    const profileRef = useRef("");
    const { register } = useAuth();

    const [loding, setLoding] = useState(false);

    const handleRegister = async () => {
        if (!emailRef.current || !passwordRef.current || !userNameRef.current || !profileRef.current) {
            Alert.alert("Sign Up ", "Please fill all the fields");
            return;
        }
        setLoding(true)

        let response = await register(emailRef.current, passwordRef.current, userNameRef.current, profileRef.current)
        setLoding(false);
        
        if (!response.success) {
            Alert.alert('Sign Up', response.msg)
        }
        //regster prosecc
    }
    return (
        <ScrollView>


            <View style={styles.container}>
                <StatusBar style="dark" />
                <View style={{
                    paddingTop: hp(8),
                    paddingHorizontal: wp(5),
                    flex: 1,
                    gap: 12,
                    alignItems: ''
                }}>
                    {/*signIn Image  */}
                    <View style={styles.imageContainer}>
                        <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/download-removebg-preview.png')} />
                    </View>

                    {/* Text SignIn */}
                    <View style={{ gap: 20 }}>
                        <Text style={styles.text}>Sign Up</Text>
                        {/* Inputs */}
                        <View style={styles.containerInput}>
                            <Feather name='user' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Username' onChangeText={value => userNameRef.current = value} placeholderTextColor={"gray"} />
                        </View>
                        <View style={styles.containerInput}>
                            <Octicons name='mail' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Email' onChangeText={value => emailRef.current = value} placeholderTextColor={"gray"} />
                        </View>

                        <View style={styles.containerInput}>
                            <Octicons name='lock' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Password' placeholderTextColor={"gray"} onChangeText={value => passwordRef.current = value} secureTextEntry />
                        </View>

                        <View style={styles.containerInput}>
                            <Feather name='image' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Profile url' onChangeText={value => profileRef.current = value} placeholderTextColor={"gray"} />
                        </View>
                    </View>
                    {/* submit button */}
                    <View>
                        {
                            loding ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    {/* <Loading size={hp(20)} /> */}
                                    <ActivityIndicator size={'large'} color={'gray'} />
                                </View>
                            ) : (
                                
                                <Pressable style={styles.button} onPress={() => handleRegister()}>
                                    <Text style={{ fontSize: hp(2.7), fontWeight: 'bold', color: 'white', }}>Sign Up</Text>
                                </Pressable>
                            )

                        }
                    </View>
                    {/* Sign Up */}
                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={styles.textForget}>Already have an account?</Text>
                        <Pressable onPress={() => router.push('/SignIn')}>
                            <Text style={{ color: '#8E3FFF', fontWeight: 'bold' }}> Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    imageContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: hp(4),
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#333'
    },
    containerInput: {
        height: hp(7),
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        borderRadius: 16,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#D8D9DA',

    },
    input: {
        fontSize: hp(2),
        flex: 1,
        padding: 10
    },
    textForget: {
        fontSize: hp(1.8),
        textAlign: 'right',
        color: 'gray'
    },
    button: {
        height: 47,
        borderRadius: 10,
        backgroundColor: '#8E3FFF',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
})