import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import data from './Data/BussinessListData.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from 'expo-router';

import BusinessDetailScreen from "../../screens/BusinessDetailScreen"

export default function BussindessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const setDataBusinessList = async (jsonData) => {
    const collectionRef = collection(db, 'businessList'); // Use your actual collection name

    for (const item of jsonData) {
      const docRef = doc(collectionRef); // automatically generate unique id
      await setDoc(docRef, item);
    }
  };

  const getBusinessList = async () => {
    try {
      // First, try to get the data from AsyncStorage
      const jsonValue = await AsyncStorage.getItem('businessList');
      if (jsonValue !== null) {
        // If we have data, parse it and set it to the state
        const businessListData = JSON.parse(jsonValue);
        setBusinessList(businessListData);
      } else {
        const snapshot = await getDocs(collection(db, 'businessList'));
        if (snapshot.empty) {
          console.log('No data in Firebase collection, setting local data...');
          await setDataBusinessList(data);
          setBusinessList(data);
          await AsyncStorage.setItem('businessList', JSON.stringify(data));
        } else {
          const BusinessListData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setBusinessList(BusinessListData);
          await AsyncStorage.setItem('businessList', JSON.stringify(BusinessListData));
        }
      }
    } catch (error) {
      console.error('Error getting business list data:', error);
    }
  };

  const fun = ({name , id , image}) => {
    router.push({
      pathname: "/BusinessList/[Business]",
      params: { name: name, id: id, image: image },
    })
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={'Latest Business'} isViewAll={true} />
      <FlatList
        data={businessList}

        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({ item }) => (
<<<<<<< HEAD
        <View style={{marginRight:10}}>
          <View style={styles.container}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            
            />
            <View style={styles.infoContainer}>
            <Text style={{fontFamily:'outfit-medium',fontSize:17}}>{item?.name}</Text>
            <Text style={{fontFamily:'outfit',fontSize:13,color:'#003C43'}}>{item?.contactPerson}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:10,
                padding:3,
                color:'#003C43',
                backgroundColor:'#77B0AA',
                borderRadius:3,
                alignSelf:'flex-start',
                paddingHorizontal:7
                }}>{item?.category.name}</Text>   
            </View>
=======
          <View style={{ marginRight: 10 }}>
            <Pressable onPress={() => fun(item?.contactPerson ,item?.id , item?.image)}>
              <View style={styles.container}>

                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={styles.infoContainer}>
                  <Text style={{ fontFamily: 'outfit-medium', fontSize: 17 }}>{item?.name}</Text>
                  <Text style={{ fontFamily: 'outfit', fontSize: 13, color: 'gray' }}>{item?.contactPerson}</Text>
                  <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 10,
                    padding: 3,
                    color: 'gray',
                    backgroundColor: 'white',
                    borderRadius: 3,
                    alignSelf: 'flex-start',
                    paddingHorizontal: 7
                  }}>{item?.category.name}</Text>
                </View>
              </View>
            </Pressable>
>>>>>>> 3448fd2039f481edfc7c1c2926510489340eded2
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    image:{
        width:160,
        height:100,
        borderRadius:10,
        
    },
    container:{
       padding:10,
       backgroundColor:'#E3FEF7', 
       borderRadius:10
    },
    infoContainer:{
        padding:7,
        display:'flex',
        gap:3
    }
=======
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,

  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  infoContainer: {
    padding: 7,
    display: 'flex',
    gap: 3
  }
>>>>>>> 3448fd2039f481edfc7c1c2926510489340eded2
})