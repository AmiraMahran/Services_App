import { View, Text, Image, StyleSheet ,TouchableOpacity} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
export default function BusinessListItem({ all }) {

  const fun = () => {
    router.push({
      pathname: "/BusinessList/[Business]", 
      params: { name: all.name, id: all.id ,image: all.image }, 
    })
  }
  
  return (
    <TouchableOpacity style={styles.container}  onPress={fun}>
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
        <Text
          style={{ fontFamily: "outfit", color: "light gray", fontSize: 16 }}
        >
          <Entypo name="location-pin" size={24} color="purple" /> {all.adress}
        </Text>
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
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  suncontainer: {
    display: "flex",
    gap: 8,
  },
});