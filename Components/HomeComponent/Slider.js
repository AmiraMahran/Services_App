import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, setDoc, doc  } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import Heading from './Heading';
import data from './Data/SliderData.json'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Slider() {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
      getSlider();
    }, []);
  
  
    const setDataSlider = async (jsonData) => {
      const collectionRef = collection(db, 'slider');
      const promises = jsonData.map((item) => {
        const docRef = doc(collectionRef);
        return setDoc(docRef, item);
      });
    
      await Promise.all(promises);
    };
  
   
  
    const getSlider = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('slider');
        if (jsonValue !== null) {
          // We have data!!
          const sliderData = JSON.parse(jsonValue);
          setSlider(sliderData);
        } else {
         // If there's no data in AsyncStorage, fetch from Firebase
          const snapshot = await getDocs(collection(db, 'slider'));
          if (snapshot.empty) {
            console.log('No data in Firebase collection, setting local data...');
            await setDataSlider(data); // Set the data in Firebase
            setSlider(data); // Update the local state
            await AsyncStorage.setItem('slider', JSON.stringify(data));
          } else {
            const sliderData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSlider(sliderData);
            await AsyncStorage.setItem('slider', JSON.stringify(sliderData));
          }
         }
      } catch (error) {
        console.error('Error getting slider data:', error);
      }
    };
  
    return (
      <View>
        <Heading text={'Offers For You'} />
  
        <FlatList
          data={slider}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginRight: 20 }}>
              <Image
                source={{ uri: item.image }}
                style={styles.sliderImage}
  
              />
            </View>
          )}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
 
  sliderImage: {
    width: 330,
    height: 150,
    borderRadius: 20,
    objectFit:'contain'
  },
});