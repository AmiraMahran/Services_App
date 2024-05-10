import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../FirebaseConfig';

export default function addToList() {
    // const [list, setList] = useState([]);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [category, setCategory] = useState('')
    const [urlImage, setUrlImage] = useState('')


    const BussinessListRef = collection(db, 'businessList')
    


    //add a todo
    const addBussiness = async () => {
        //check if we have a todo
        const doc = await addDoc(BussinessListRef, { contactPerson: name ,id:1018, email:email , adress:adress , image:urlImage , category:{id:8 ,name:category}})
        .then(()=>{
            Alert.alert("The Addition Process Succeeded")
        })
        setName('')
    }
    return (
        <View>
            {/* Header */}
            <View style={styles.header}>
                <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>Add New Serveice</Text>
            </View>
            <View style={styles.searchBarContainer}>

                <TextInput
                    placeholder='Name'
                    style={styles.textinput}
                    placeholderTextColor="gray"
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder='email'
                    style={styles.textinput}
                    placeholderTextColor="gray"
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput
                    placeholder='adress'
                    style={styles.textinput}
                    placeholderTextColor="gray"
                    onChangeText={(text) => setAdress(text)}
                />
                <TextInput
                    placeholder='category'
                    style={styles.textinput}
                    placeholderTextColor="gray"
                    onChangeText={(text)=>setCategory(text)}
                />
                <TextInput
                    placeholder='Url image'
                    style={styles.textinput}
                    placeholderTextColor="gray"
                    onChangeText={(text)=>setUrlImage(text)}
                />
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => addBussiness()}>
                <Text style={{color:"white" ,fontSize:20 , fontWeight:500}}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 25,
        paddingTop: 40,
        backgroundColor: '#003C43',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    textinput: {
        padding: 15,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        width: "100%",
        fontSize: 16,

    },
    searchBarContainer: {
        marginTop: 15,
        display: "flex",
        padding: 20,
        gap: 10,
        marginBottom: 10
    },
    searchBtn: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8
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
})