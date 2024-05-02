import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/HomeComponent/Header'
import Slider from '../../Components/HomeComponent/Slider'

export default function Home() {
    return (
        <View>
            <Header/>
            <Slider/>
        </View>
    )
}

const styles = StyleSheet.create({})