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
                    tabBarIcon: ({ color = '#003c43' }) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                    tabBarLabel: "Home",
                    tabBarActiveTintColor: "#003C43",
                    headerStyle: {
                        backgroundColor: "lightblue",
                    },
                    
                }}
            />
            <Tabs.Screen
                name="Booking"
                options={{
                    headerTitle: "Booking",
                    headerTitleStyle:{color:'white'},
                    title: "Booking",
                    headerTitleAlign: "center",
                    // color:'white',
                    tabBarIcon: ({ color = '#003c43' }) => (
                        <Feather name="bookmark" size={24} color={color} />
                    ),
                    tabBarLabel: "Booking",
                    tabBarActiveTintColor: "#003C43",
                    headerStyle: {
                        backgroundColor: "#135D66",
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
                    tabBarIcon: ({ color = '#003c43' }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                    tabBarLabel: "User",
                    tabBarActiveTintColor: "#003C43",
                    headerStyle: {
                        backgroundColor: "lightblue",
                    },
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({});
