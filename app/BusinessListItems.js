import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";
export default function BusinessListItem({ all }) {

  const fun = () => {
    router.push({
      pathname: "/BusinessList/[Business]",
      params: { name: all.name, id: all.id, image: all.image },
    })
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={fun}>
      <Image source={{ uri: all.image }} style={styles.image} />
      <View style={styles.suncontainer}>
        <Text
          style={{ fontFamily: "outfit", color: "light gray", fontSize: 15 }}
        >
          {all.contactPerson}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: "light gray",
            fontSize: 18,
          }}
        >
          {all.name}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcons name="location-pin" size={15} color="purple" />
          <Text style={{ fontSize: 11, color: "gray", marginEnd: 70 }}>
            {all.adress}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  container: {
    // flex: 1,
    // alignItems: 'center'
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 17,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  suncontainer: {
    display: "flex",
    gap: 8,
  },
});