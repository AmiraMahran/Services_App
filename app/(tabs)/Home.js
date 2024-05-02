import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/HomeComponent/Header'
import Slider from '../../Components/HomeComponent/Slider'
import Categorise from '../../Components/HomeComponent/Categorise'

export default function Home() {
    return (
        <View>
            <Header/>
            <View  style={{padding:20}}>
            <Slider/>
            <Categorise/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})