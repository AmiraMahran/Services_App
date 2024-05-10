import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, router, useRouter, useSegments } from 'expo-router'
import { MenuProvider } from 'react-native-popup-menu';
import { AuthContextProvider, useAuth } from '../firebase/auth';
import { admin, auth } from '../FirebaseConfig';



const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    const {user}=useAuth()

    useEffect(() => {
        // Check If User Is Authenticated Or Not
        if(user?.email=="admin@email.com")
            router.navigate('/(Admin)/(tabs)/admin')
        else{

            if (typeof isAuthenticated === "undefined") return;
            const inApp = segments[0] === "(tabs)";
            if (isAuthenticated  && !inApp) {
                router.replace('/Home')
        }
    }
        if (isAuthenticated== false){
            router.navigate('/StartPage')
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