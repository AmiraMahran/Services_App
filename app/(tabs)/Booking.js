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
    )
}

const styles = StyleSheet.create({
  obj:{
    height:200,
    
  },
})