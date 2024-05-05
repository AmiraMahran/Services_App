import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, router, useRouter, useSegments } from 'expo-router'
import { MenuProvider } from 'react-native-popup-menu';
import { AuthContextProvider, useAuth } from '../firebase/auth';



const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // Check If User Is Authenticated Or Not
        if (typeof isAuthenticated === "undefined") return;
        const inApp = segments[0] === "(tabs)";
        if (isAuthenticated  && !inApp) {
            router.replace('/Home')
        } else if (isAuthenticated== false){
            router.navigate('/Home')
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