import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import PageHeading from './PageHeading';
// import { Colors } from '../../Utile/Colors';
import { Ionicons } from '@expo/vector-icons';
import PageHeading from '../Components/HomeComponent/PageHeading';
// import CalendarPicker from 'react-native-calendar-picker';
export default function BokkingModal({ hideModel }) {
  
  return (
    <View 
    // style={styles.container}
    >
        {/* <PageHeading title={'booking'}/> */}
       <TouchableOpacity
        style={styles.btn}
        onPress={() => hideModel()} 
    >
        <Ionicons
                 name ="arrow-back-outline" 
                 size={30}
                 color="black"
    />
         <Text style={styles.txt} >
           Booking
        </Text>
      </TouchableOpacity>

       {/* calender section */}
    <View  style={styles.calender}>

          {/* <CalendarPicker
          onDateChange={this.onDateChange}
          width={340} 
          minDate={Date.now()}
          todayBackgroundColor='brown'
          /> */}
          
       </View> 

     </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginBottom: '30px',
  },
  calender:{
    // backgroundColor: Colors.PRIMARY_LIGHT,
backgroundColor:"gray",
    padding:20,
    borderRadius:15,
  },  btn: {
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
