<<<<<<< HEAD
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
=======
<<<<<<< HEAD
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React, { useState,useEffect } from 'react'
import {PageHeading}from '../../Components/HomeComponent/PageHeading'
import { useAuth } from '../../firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { db } from '../../FirebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Booking() {
   const [book, setBook] = useState([]);
   const {user} =useAuth();

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
        <View style={{ marginTop: 10 }} >


        <FlatList
          data={book}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.iconContainer}>
              
                  <Image
                    source={{ uri: item.businessImage }}
                    style={{ width: 50, height: 50, objectFit: 'contain'}}
                  />

              </View>
              <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.businessName}</Text>
            </View>
          )}
        />
<View style={styles.obj}>

</View>

      </View>
=======
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
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
                        <View style={styles.iconContainer}>

                            <Image
                                source={{ uri: item.businessImage }}
                                style={{ width: 340, height: 130, objectFit: 'contain', borderRadius: 40 }}
                            />

                        </View>
                        <View >
                            <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                <Text style={{ fontWeight: '600' }}>Service name: </Text>
                                {item?.businessName}
                            </Text>

                            {/* <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                <Text style={{ fontWeight: '600' }}>Service date: </Text>
                                {item?.date}
                            </Text>
                            
                            <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                <Text style={{ fontWeight: '600' }}>Service address: </Text>
                                {item?.businessAddress}
                            </Text>

                            <Text style={{ fontFamily: 'outfit-medium', marginTop: 8, flex: 1, fontSize: 18 }}>
                                <Text style={{ fontWeight: '600' }}>Service person name: </Text>
                                {item?.businessPerson}
                            </Text> */}

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

                    </View>
                )}
            />
            <View style={styles.obj}>

            </View>

        </View>
<<<<<<< HEAD
        </ScrollView>
=======
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
>>>>>>> 1f8e7fa947ed7c01bf397a0652b5388038c3f982
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  obj:{
    height:200,
    
  },
=======
    container: {
        flex: 1,
        backgroundColor: '#77B0AA',
        margin: 20,
        borderRadius: 20,
        padding: 20,
    },
    iconContainer: {
        flex: 1
    },
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
})