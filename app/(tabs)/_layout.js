import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="Home"
                options={{
                    headerShown: false,
                    title: "Home",
                    headerTitleAlign: "center",
                    tabBarIcon: ({color}) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                    tabBarLabel: "Home",
                    headerStyle: {
                        backgroundColor: "lightblue",
                    },
                    
                }}
            />
            <Tabs.Screen
                name="Booking"
                options={{
                    headerTitle: "Booking",
                    title: "Booking",
                    headerTitleAlign: "center",
                    // color:'white',
                    tabBarIcon: ({ color }) => (
                        <Feather name="bookmark" size={24} color={color} />
                    ),
                    tabBarLabel: "Booking",
                    headerStyle: {
<<<<<<< HEAD
                        backgroundColor: "#003C43",
=======
                        backgroundColor: "#135D66",
>>>>>>> 874b70ff0bfc9dc8a115ddae36102bd089eae5e9
                    },
                }}
            />
            <Tabs.Screen
                name="ProfilePage"
                options={{
                    headerTitle: "ProfilePage",
                    headerShown: false,
                    title: "ProfilePage",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                    tabBarLabel: "User",
                    headerStyle: {
                        backgroundColor: "lightblue",
                    },
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({});
