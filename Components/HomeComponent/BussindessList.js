import { View, Text, FlatList ,StyleSheet,Image} from 'react-native'
import React ,{ useEffect, useState }from 'react'
import Heading from './Heading'
import { collection, getDocs ,setDoc,doc} from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import data from './Data/BussinessListData.json';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function BussindessList() {
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        getBusinessList();
      }, []);

      const setDataBusinessList = async (jsonData) => {
        const collectionRef = collection(db, 'businessList'); // Use your actual collection name
    
        for (const item of jsonData) {
          const docRef = doc(collectionRef); // automatically generate unique id
          await setDoc(docRef, item);
        }
      };
    
      const  getBusinessList = async () => {
        try {
            // First, try to get the data from AsyncStorage
      const jsonValue = await AsyncStorage.getItem('businessList');
      if (jsonValue !== null) {
        // If we have data, parse it and set it to the state
        const businessListData = JSON.parse(jsonValue);
        setBusinessList(businessListData);
      } else {
          const snapshot = await getDocs(collection(db, 'businessList')); 
          if (snapshot.empty) {
            console.log('No data in Firebase collection, setting local data...');
            await setDataBusinessList(data); 
            setBusinessList(data); 
            await AsyncStorage.setItem('businessList', JSON.stringify(data));
          } else {
            const BusinessListData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBusinessList(BusinessListData);
            await AsyncStorage.setItem('businessList', JSON.stringify(BusinessListData));
          }
        }
        } catch (error) {
          console.error('Error getting business list data:', error);
        }
      };
    
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Latest Business'} isViewAll={true}/>
      <FlatList
        data={businessList}
        
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       
        renderItem={({ item }) => (
        <View style={{marginRight:10}}>
          <View style={styles.container}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            
            />
            <View style={styles.infoContainer}>
            <Text style={{fontFamily:'outfit-medium',fontSize:17}}>{item?.name}</Text>
            <Text style={{fontFamily:'outfit',fontSize:13,color:'gray'}}>{item?.contactPerson}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:10,
                padding:3,
                color:'gray',
                backgroundColor:'white',
                borderRadius:3,
                alignSelf:'flex-start',
                paddingHorizontal:7
                }}>{item?.category.name}</Text>   
            </View>
          </View>
    
        </View>  
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:160,
        height:100,
        borderRadius:10,
        
    },
    container:{
       padding:10,
       backgroundColor:'white', 
       borderRadius:10
    },
    infoContainer:{
        padding:7,
        display:'flex',
        gap:3
    }
})