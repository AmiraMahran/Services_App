import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../FirebaseConfig'
import { router } from 'expo-router'
import { useAuth } from '../../../firebase/auth'

export default function admin() {
    const [list, setList] = useState([]);
    const { logout } = useAuth();
    const BussinessListRef = collection(db, 'businessList')


    useEffect(() => {
        const subscriber = onSnapshot(BussinessListRef, {
            next: (snapshot) => {
                const list = [];
                snapshot.docs.forEach(doc => {
                    list.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setList(list);
            }
        })
        return () => subscriber()
    }, [])




    const deleteBusiness = (person) => {
        const docRef = doc(BussinessListRef, person.id)
        deleteDoc(docRef).then(() => {
            console.log('done')
        })
    }

    return (
        <ScrollView>
            <View>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>Admin Page</Text>
                        <Pressable onPress={() => logout()}>
                            <Ionicons name='log-out' size={35} color="white" />
                            <Text style={{ fontSize: 20, fontWeight: 500, color: 'white' }}>Sign Out</Text>
                        </Pressable>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            placeholder='Search'
                            style={styles.textinput}
                        />
                        <FontAwesome name='search'
                            style={styles.searchBtn}
                            size={27} />
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={list}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View>
                                <Pressable
                                    style={styles.container}
                                    onPress={() => router.push({
                                        pathname: `../Update/${item.id}`,
                                        params: { PersonName: item.contactPerson, Email: item.email, Adress: item.adress, ProfileImage: item.image }
                                    })}
                                >
                                    <View style={styles.item}>
                                        <View style={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
                                            <View>
                                                <Text style={styles.title}>Name:<Text style={{ fontSize: 20 }}> {item.contactPerson}</Text></Text>
                                                <Text style={styles.title}>Email:<Text style={{ fontSize: 20 }}> {item.email}</Text></Text>
                                                <Text style={styles.title}>Adress:<Text style={{ fontSize: 20 }}> {item.adress}</Text></Text>
                                                <Text style={styles.title}>Works on:<Text style={{ fontSize: 20 }}> {item.category.name}</Text></Text>
                                            </View>
                                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius:100, justifyContent: 'flex-end' }} />
                                        </View>
                                        <FontAwesome name='trash-o'
                                            color='#003C43'
                                            onPress={() => deleteBusiness(item)}
                                            style={styles.todoIcon}
                                        />
                                    </View>
                                </Pressable>
                            </View>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#003C43',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    textinput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        width: "85%",
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 10
    },
    searchBtn: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8
    },
    // //////////////////
    item: {
        backgroundColor: "#E3FEF7",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,

    },
    title: {
        fontSize: 25,

    },
    todoIcon: {
        marginTop: 5,
        fontSize: 20,
        textAlign: 'right'
    },
})