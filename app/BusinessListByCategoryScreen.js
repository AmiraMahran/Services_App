import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

import DATA from '../Components/HomeComponent/Data/BussinessListData.json'
import { list } from 'firebase/storage';
import BusinessListItem from './BusinessListItem';
import {
  getDocs,
  doc,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";
import { router, useLocalSearchParams } from 'expo-router';
export default function BusinessListByCategoryScreen() {
  const { name } = useLocalSearchParams();
  const [List, setList] = useState([]);
  const getDataFromFireBase = async () => {
    const q = await query(collection(db, "BusinessListByCategory"), where("category.name", "==", name));
    const querySnapshot = await getDocs(q);
    const Data = querySnapshot.docs.map((doc) => doc.data());

    if (Data.length === 0) {
      for (let i = 0; i < DATA.length; i++) {
        let product = DATA[i];
        console.log(product.id);
        await setDoc(doc(db, "BusinessListByCategory", product.id), product);
      }
    }
    setList(Data);
    // console.log("********************");
    // console.log(List);
  }
  const getData = () => {
    setList(DATA);
  }
  useEffect(() => {

    getDataFromFireBase();
  }, []);
  return (
    <View style={{ padding: 20, paddingTop: 40, backgroundColor: '#DDDDDD', height: '100%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}> {name}</Text>
      </View>
      <FlatList data={List} style={{ marginTop: 15 }} renderItem={({ item }) => <BusinessListItem all={item} />} />
    </View>
  )
}