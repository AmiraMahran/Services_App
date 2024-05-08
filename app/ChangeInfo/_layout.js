import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                    headerTitle: "Updata Todo ",
                    headerTitleAlign: "center",
                    headerTintColor: "#fb8500",
                    headerStyle: {
                        backgroundColor: "#023047",
                    },
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({});
