import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/HomeComponent/Header'
import Slider from '../../Components/HomeComponent/Slider'
import Categorise from '../../Components/HomeComponent/Categorise'
import BussindessList from '../../Components/HomeComponent/BussindessList'

export default function Home() {
    return (
        <SafeAreaView>
        <View>
            <Header/>
            <View  style={{padding:20}}>
            <Slider/>
            <Categorise/>
            <BussindessList/>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})