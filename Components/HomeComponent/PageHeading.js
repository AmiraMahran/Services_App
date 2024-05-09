import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

//must be imported in BusinessListByCategoryScreen
// <PageHeading title={param.category}/>

export default function PageHeading({title}) {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => router.back()} >
                <Ionicons
                 name ="arrow-back-outline" 
                 size={30}
                 color="black"/>
                 <Text 
                 style={styles.txt} 
                 >
                    {title}
                 </Text>
                 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        // width: '100%',
        padding:20,
        // backgroundColor: 'rgb(222, 64, 188);',

    },
    txt:{
        fontSize:22,
        // fontFamily:'outfit-medium',
    },
});
