import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../firebase/auth'

export default function Header() {
    const {user}= useAuth();
    return (
        <View style={styles.container}>
            {/**Profile Section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{uri:user?.profileUrl}} style={styles.userImage} />
                    <View>
                        <Text style={{ color: 'white' }}> Welcome </Text>
                        <Text style={{ color: 'white', fontSize: 20 }}> {user?.username} </Text>
                    </View>
                </View>
                <FontAwesome name='bookmark-o' size={27} color="white" />
            </View>
            {/**Search Bar Section */}
            <View style={styles.searchBarContainer}>
                <TextInput
                placeholder='Search'
                style={styles.textinput}
                />
                <FontAwesome name='search'
                style={styles.searchBtn}
                size={27}  />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: 'pink',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",

    },
    profileContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    textinput:{
       padding:7,
       paddingHorizontal:16,
       backgroundColor:'white',
       borderRadius:8,
       width:"85%", 
       fontSize:16
    },
    searchBarContainer:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginBottom:10
    },
    searchBtn:{
       backgroundColor:"white",
       padding:10,
       borderRadius:8 
    }
})