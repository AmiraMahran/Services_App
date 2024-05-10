import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig';
import { router, useLocalSearchParams } from 'expo-router';

export default function Update() {

    const { id, PersonName, Email, Adress, ProfileImage } = useLocalSearchParams();
    const [name, onChangeName] = useState('')
    const [email, onChangeEmail] = useState('')
    const [adress, onChangeAdress] = useState('')
    const [imageUrl, onChangeImage] = useState('')

    const BussinessListRef = collection(db, 'businessList')


    const updateInfo = () => {
        const docRef = doc(BussinessListRef, id);
        updateDoc(docRef, {
            contactPerson: name.length != 0 ? name : PersonName,
            email: email.length != 0 ? email : Email,
            adress: adress.length != 0 ? adress : Adress,
            image: imageUrl.length != 0 ? imageUrl : ProfileImage,
        }).then(() => {
            alert("Updated Information")
        })
        onChangeName('')
        onChangeEmail('')
        onChangeAdress('')
        onChangeImage('')
    };


    return (
        <View>
            {/* Header */}
            <View style={styles.header}>
                <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
                    <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>Update</Text>
                </View>
                <Pressable  onPress={() => router.back()}>
                    <Ionicons name="arrow-back-outline" size={30} color="white" />
                </Pressable>
            </View>
            <View style={styles.container}>
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
                    onChangeText={(text) => onChangeAdress(text)}
                    placeholder="Enter New Adress"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeImage(text)}
                    placeholder="Enter New Url Image"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        updateInfo()
                    }}
                >
                    <Text style={{ color: "white", fontWeight: 500 }}>Update Information</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

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
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#003C43',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 50
    },
})