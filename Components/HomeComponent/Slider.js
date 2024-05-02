import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import Heading from './Heading';
import sliderdata from './Data/SliderData.json'

export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'alaa'));
      if (snapshot.empty) {
        console.log('No data in Firebase collection, loading local data...');
        setSlider(sliderdata);
      } else {
        const sliderData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSlider(sliderData);
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
          <View style={{marginRight:20}}>
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