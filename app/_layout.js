import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, router, useRouter, useSegments } from 'expo-router'
import { MenuProvider } from 'react-native-popup-menu';
import { AuthContextProvider, useAuth } from '../firebase/auth';
import StartPage from './StartPage';
import SignUp from './SignUp';


const MainLayout = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated == false) {
            router.navigate('/StartPage')
        } else if (isAuthenticated){
            router.replace('/Home')
        }
    }, [isAuthenticated])
    return <Slot />
}


export default function RootLayout() {
    return (
        <MenuProvider>
            <AuthContextProvider>
                <MainLayout />
            </AuthContextProvider>
        </MenuProvider>
    )
}

const styles = StyleSheet.create({})