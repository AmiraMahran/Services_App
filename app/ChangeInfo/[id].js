import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { auth, db, usersRef } from '../../FirebaseConfig';
import { router, useLocalSearchParams } from 'expo-router';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { TextInput } from 'react-native';
import { useAuth } from '../../firebase/auth';
import { Ionicons } from "@expo/vector-icons";


export default function UserPage() {
    const { user } = useAuth();
    const { id } = useLocalSearchParams();
    const [name, onChangeName] = useState('')
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [profileUrl, onChangeImage] = useState('')

    const updateInfo = () => {
        const docRef = doc(usersRef, id);
        updateDoc(docRef, {
            profileUrl: profileUrl.length != 0 ? profileUrl : user?.profileUrl,
            email: email.length != 0 ? email : user?.email,
            username: name.length != 0 ? name : user?.username,
            password: password.length != 0 ? password : user?.password
        }).then(() => {
            alert("Updated Information")
        })
        onChangeName('')
        onChangeEmail('')
        onChangePassword('')
        onChangeImage('')
    };


    return (
        <View>
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' ,marginBottom:20}}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                    </Pressable>
                    
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeName(text)}
                    placeholder="Enter New Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    placeholder="Enter New Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    placeholder="Enter New Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeImage(text)}
                    placeholder="Enter New Profile Image"
                />
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        updateInfo()
                    }}
                >
                    <Text style={{ color: "white" }}>Update Information</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginLeft: 15,
        marginRight: 15,
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: "#003C43",
        width: 200,
        alignSelf: "center",
        marginTop: 30,
    },
});