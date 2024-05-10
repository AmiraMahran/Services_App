import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Components/HomeComponent/Header'
import Slider from '../../Components/HomeComponent/Slider'
import Categorise from '../../Components/HomeComponent/Categorise'
import BussindessList from '../../Components/HomeComponent/BussindessList'
import BusinessListByCategoryScreen from '../BusinessListByCategoryScreen'
import Footer from '../../Components/HomeComponent/Footer'

export default function Home() {
    return (
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Header />
                    <View style={{ padding: 20 }}>
                        <Slider />
                        <Categorise />
                        <BussindessList />
                        <Footer/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})