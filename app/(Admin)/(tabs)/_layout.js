import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="admin"
                options={{
                    headerShown: false,
                    title: "Admin",
                    headerTitleAlign: "center",
                    tabBarIcon: ({color= "#003C43" }) => (
                        <MaterialIcons name="admin-panel-settings" size={24} color={color} />
                    ),
                    tabBarLabel: "Admin",
                    tabBarActiveTintColor:"#003C43",
                    headerStyle: {
                        backgroundColor: "lightblue",
                    },
                }}
            />
            <Tabs.Screen
                name="addToList"
                options={{
                    headerShown: false,
                    headerTitle: "Add",
                    title: "Add",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color = "#003C43" }) => (
                        <Entypo name="add-to-list" size={24} color={color} />
                    ),
                    tabBarLabel: "Add",
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
