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


    const [searchTitle, setSearchTitle] = useState("");

    const basicData = list.filter((item) => {
        return item.contactPerson.toLowerCase().includes(searchTitle.toLowerCase());
    })


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
                            onChangeText={setSearchTitle}
                            value={searchTitle}
                        />
                        <FontAwesome name='search'
                            style={styles.searchBtn}
                            size={27} />
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={basicData}
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
                                    <View style={[styles.card, styles.boxWithShadow, styles.item]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flex: 1.6 }} >
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={styles.title}>Name:</Text><Text style={{ fontSize: 15 }}> {item.contactPerson}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                                                    <Text style={styles.title}>Email:</Text><Text style={{ fontSize: 15 }}> {item.email}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={styles.title}>Adress:</Text><Text style={{ fontSize: 15 }}> {item.adress}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={styles.title}>Works on:</Text><Text style={{ fontSize: 15 }}> {item.category.name}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Image source={{ uri: item.image }} style={styles.image} />
                                            </View>
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
                        ListEmptyComponent={
                            <View style={styles.emptyList}>
                                <Text style={styles.emptyListText}>NO Services Found</Text>
                            </View>
                        }
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

        marginHorizontal: 10,
        textAlign: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        overflow: false

    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 25,
        width: '90%',
        marginVertical: 10,
    },
    boxWithShadow: {
        shadowColor: 'black',
        shadowOffset: { width: 9, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5, // Use elevation for Android
    },
    todoIcon: {
        marginTop: 5,
        fontSize: 26,
        textAlign: 'right'
    },
    emptyList: {
        marginTop: 20,
        backgroundColor: '#003C43',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black'

    },
    emptyListText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        color: "white"
    },
    image:{
        borderRadius: 20, 
        justifyContent: 'flex-end',
        width:100,
        height:150
    }
})