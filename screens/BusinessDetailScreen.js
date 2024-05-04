import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export default function BusinessDetailScreen({ name, id, image }) {
  const [ReadMore, setReadMore] = useState(false);
  const [item,setItem]= useState({});
  const [loading,setLoading]= useState(false);
  const getOne = async()=> {
    const docRef = doc(db, `BusinessListByCategory`, id);
    
    const docSnap = await getDoc(docRef);
    
    const data = docSnap.data();
    setItem(data);
    console.log("item        ",item);
    setLoading(true);
  }
 
 useEffect(()=>{
    getOne();
 },[])
 if(loading){
    return (
        <View style={styles.Container}>
          <ScrollView style={{ height: "90%" }}>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                marginTop: 40,
                marginLeft: 10,
              }}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
            <View style={styles.infoContainer}>
              <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
                {item.name}
              </Text>
              <View style={styles.subContainer}>
                <Text style={{ color: "#b891c8", fontSize: 20 }}>
                  {item.contactPerson}
                </Text>
                <Text style={styles.Category}>{item.category.name}</Text>
              </View>
              <Text style={{ fontSize: 17, color: "gray" }}>
                <Entypo name="location-pin" size={24} color="purple" /> {item.adress}
              </Text>
            </View>
            <View
              style={{ borderTopWidth: 1, borderColor: "gray", marginVertical: 20 }}
            >
              <Text> About Me </Text>
              <Text
                style={{
                  fontFamily: "out-fit",
                  color: "gray",
                  lineHeight: 28,
                  fontSize: 16,
                }}
                numberOfLines={ReadMore ? 20 : 5}
              >
              {item.about}
              </Text>
              <Pressable onPress={() => setReadMore(!ReadMore)}>
                <Text style={{ color: "#b891c8", fontSize: 20, fontWeight: "500" }}>
                  {ReadMore ? "Read Less" : " Read More"}
                </Text>
              </Pressable>
            </View>
            <View
              style={{ borderTopWidth: 1, borderColor: "gray", marginVertical: 20 }}
            ></View>
          </ScrollView>
          <View style= {{display:'flex',flexDirection:'row', gap:5,margin:8}}>
          <TouchableOpacity style={styles.messagebtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit-medium",
                color: "#b891c8",
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Bookbtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit-medium",
                color: "white",
                fontSize: 18,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
          </View>
       
        </View>
      );
 }else{
    return(
        <ActivityIndicator size="large" />
    )
 }
 
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 15,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#ffff",
    borderRadius: 99,
    marginTop: 20,
  },
  Container: {},
  infoContainer: {
    padding: 10,
    display: "flex",
    gap: 5,
  },
  Category: {
    color: "#b891c8",
    fontSize: 20,
    backgroundColor: "#f7d9fe",
    padding: 5,
    borderRadius: 8,
    fontSize: 14,
  },
  messagebtn: {
    padding: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 99,
    borderColor: "#b891c8",
    flex:1
  },
  Bookbtn:{
    padding: 15,
    backgroundColor: "#b891c8",
    borderWidth: 1,
    borderRadius: 99,
    borderColor: "#b891c8",
    flex:1
  }
});
