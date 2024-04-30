import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from "react";

export default function forgetPassword() {
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter Your Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Pressable onPress={() => onPress = changePassword(email)} style={styles.btn}>
                <Text style={styles.subtitle}>Reset Password</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 15,
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        Textcolor: 'white',
    },
    subtitle: {

        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: "#8E3FFF",
        width: 200,
        alignSelf: "center",
        marginTop: 30,
    },
})