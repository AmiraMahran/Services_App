
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { PageHeading } from '../../Components/HomeComponent/PageHeading'
import { useAuth } from '../../firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Booking() {
    const [book, setBook] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        getBookList();
    }, []);



    const getBookList = async () => {
        try {
            const q = await query(collection(db, 'book'), where('userEmail', '==', user?.email));
            const querySnapshot = await getDocs(q);
            const Data = querySnapshot.docs.map((doc) => doc.data());
            setBook(Data);
            await AsyncStorage.setItem('book', JSON.stringify(Data));

            console.log('get data booking')
        } catch (error) {
            console.error('Error getting Book list data:', error);
        }
    };
    return (
        <ScrollView>

            <View style={{ marginTop: 10 }} >

                <FlatList
                    data={book}
                    renderItem={({ item, index }) => (
                        <View style={styles.container}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,flex:1}}>

                                <View style={{ flex: 1.6 }}>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>Service name: </Text>
                                    {item?.businessName}
                                </Text>

                                {/* <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                <Text style={{ fontWeight: '600' }}>Service date: </Text>
                                {item?.date}
                            </Text> */}

                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>Service address: </Text>
                                    {item?.businessAddress}
                                </Text>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>Service person name: </Text>
                                    {item?.businessPerson}
                                </Text>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>Service time: </Text>
                                    {item?.time}
                                </Text>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>Service id: </Text>
                                    {item?.businessId}
                                </Text>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>User name: </Text>
                                    {item?.username}
                                </Text>
                                <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                    <Text style={{ fontWeight: '600' }}>User email: </Text>
                                    {item?.userEmail}
                                </Text>
                                    </View>
                                <View>
                                    <Image
                                        source={{ uri: item.businessImage }}
                                        style={{ width: 200, height: 150, borderRadius: 20, justifyContent: 'flex-end', }}
                                        />
                                </View>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.obj}>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3FEF7",
        margin: 20,
        borderRadius: 20,
        padding: 20,
        flexDirection:'row',
        color:'white',
        elevation:5,
        shadowColor:'black',
        shadowOffset: { width: 9, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    iconContainer: {
        flex: 1
    },
})