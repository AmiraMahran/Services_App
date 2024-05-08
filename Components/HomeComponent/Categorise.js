import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import Heading from './Heading';
import data from './Data/categoriseData.json'
import AsyncStorage from "@react-native-async-storage/async-storage";
import BusinessListByCategoryScreen from '../../app/BusinessListByCategoryScreen';
import { router } from 'expo-router';



export default function Categorise() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const setDataCategory = async (jsonData) => {
    const collectionRef = collection(db, 'category');

    for (const item of jsonData) {
      const docRef = doc(collectionRef);
      await setDoc(docRef, item);
    }
  };

  
  const getCategory = async () => {
    try {
      // First, try to get the data from AsyncStorage
      const jsonValue = await AsyncStorage.getItem('category');
      if (jsonValue !== null) {
        // If we have data, parse it and set it to the state
        const categoryData = JSON.parse(jsonValue);
        setCategory(categoryData);
      } else {
        // If there's no data in AsyncStorage, fetch from Firebase
        const snapshot = await getDocs(collection(db, 'category'));
        if (snapshot.empty) {
          console.log('No data in Firebase collection, setting local data...');
          await setDataCategory(data); // Set the data in Firebase
          setCategory(data); // Update the local state
          await AsyncStorage.setItem('category', JSON.stringify(data)); // Save to AsyncStorage
        } else {
          const categoryData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setCategory(categoryData); // Update the local state
          await AsyncStorage.setItem('category', JSON.stringify(categoryData)); // Save to AsyncStorage
        }
      }
    } catch (error) {
      console.error('Error getting category data:', error);
    }
  };

  return (
    <View style={{ marginTop: 10 }} >

      <Heading text={'Categories'} isViewAll={true} />
      <FlatList
        data={category}

        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Pressable onPress={() => {
                router.push({
                  pathname:"/BusinessListByCategoryScreen",
                  params: { name: item?.name}
                })
              }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 50, height: 50, objectFit: 'contain'}}
                />
              </Pressable>
            </View>
            <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'light gray',
    padding: 17,
    borderRadius: 99,
    marginRight: 10
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
})