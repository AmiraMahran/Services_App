import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown:false,
                    headerTitle: "Update",
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: "#003C43",
                    },
                }}

            />
        </Stack>
    );
}

const styles = StyleSheet.create({});
