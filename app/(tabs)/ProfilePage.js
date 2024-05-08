import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../firebase/auth';
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';


export default function ProfilePage() {
    const { user } = useAuth();
    const {logout}=useAuth();

    const updateInfo = (id) => {
        router.push({
            pathname: `../ChangeInfo/${id}`,
            params: { id: id }
        })
    }


    const profileMenu = [{
        id: 1,
        name: 'Home',
        icon: 'home'
    },
    {
        id: 2,
        name: 'My Booking',
        icon: 'bookmark-sharp'
    },
    {
        id: 3,
        name: 'Update Information',
        icon: 'settings-sharp'
    },
    {
        id: 4,
        name: 'Logout',
        icon: 'log-out'
    }
    ]
    return (
        <View>

            <View style={{ padding: 20, paddingTop: 30, backgroundColor: "#003C43" }}>
                <Text style={{ fontSize: 30, color: 'white' , fontWeight:500}}>Profile</Text>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Image source={{ uri: user?.profileUrl }}
                        style={{ width: 90, height: 90, borderRadius: 99 }}
                    />
                    <Text style={{ fontSize: 26, color: 'white', marginTop: 8 }}>{user?.username}</Text>
                    <Text style={{ fontSize: 18, color: 'white', marginTop: 8 }}>{user?.email}</Text>
                </View>
            </View>
            <View style={{ paddingTop: 60 }}>
                <FlatList
                    data={profileMenu}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={() => { item.name == "Home" ? router.navigate('Home') : item.name == "My Booking" ? router.navigate('Booking') : item.name == "Logout"?logout():updateInfo(user?.userId) }}
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 40, paddingHorizontal: 80 }}>
                            <Ionicons name={item.icon} size={35} color="#003C43" />
                            <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.name}</Text>
                        </Pressable>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})