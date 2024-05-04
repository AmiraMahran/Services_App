import { View, Text } from 'react-native'
import React from 'react'
import BusinessDetailScreen from '../../screens/BusinessDetailScreen'
import { useLocalSearchParams } from 'expo-router';

export default function Business() {
    const { name,id ,image } = useLocalSearchParams();
    console.log("all", image);
  return (
    <View>
      <BusinessDetailScreen name= {name} id = {id}   image= {image}/>
    </View>
  )
}