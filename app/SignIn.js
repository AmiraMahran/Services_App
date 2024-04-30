import { StyleSheet, Text, View, Image, Pressable, Alert, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../firebase/auth';
import Loading from '../Components/Loading';



export default function SignIn() {
    const emailRef = useRef("")
    const passwordRef = useRef("");
    const { login } = useAuth();
    const [loding, setLoding] = useState(false);

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Sign In ", "Please fill all the fields");
            return;
        }
        setLoding(true);
        const response = await login(emailRef.current, passwordRef.current)
        setLoding(false);
        console.log('sign in response ')
        if (!response.success) {
            Alert.alert('Sign In ', response.msg)
        }

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

                }}>
                    {/*signIn Image  */}
                    <View style={styles.imageContainer}>
                        <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/download__2_-removebg-preview.png')} />
                    </View>

                    {/* Text SignIn */}
                    <View style={{ gap: 20 }}>
                        <Text style={styles.text}>Sign In</Text>
                        {/* Inputs */}
                        <View style={styles.containerInput}>
                            <Octicons name='mail' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Email' onChangeText={value => emailRef.current = value} placeholderTextColor={"gray"} />
                        </View>

                        <View style={styles.containerInput}>
                            <Octicons name='lock' size={hp(2.7)} color="gray" />
                            <TextInput style={styles.input} placeholder='Password' placeholderTextColor={"gray"} onChangeText={value => passwordRef.current = value} secureTextEntry />
                        </View>
                        <Pressable onPress={()=>router.navigate('./ForgetPassword')}>
                            <Text style={styles.textForget}>Forget Password ?</Text>
                        </Pressable>
                    </View>
                    {/* submit button */}
                    <View>
                        {
                            loding ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Loading size={hp(20)} />
                                </View>
                            ) : (

                                <Pressable style={styles.button} onPress={() => handleLogin()}>
                                    <Text style={{ fontSize: hp(2.7), fontWeight: 'bold', color: 'white', }}>Sign In</Text>
                                </Pressable>
                            )

                        }
                    </View>
                    {/* Sign Up */}
                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={styles.textForget}>Don't have an account ?</Text>
                        <Pressable onPress={() => router.push('/SignUp')}>
                            <Text style={{ color: '#8E3FFF', fontWeight: 'bold' }}>Sign Up</Text>
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