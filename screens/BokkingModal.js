import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { db } from '../FirebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {useAuth}from'../firebase/auth'
export default function BokkingModal({ hideModel , serviceId ,serviceName ,serviceImage}) {
  const [timeList, setTimeList] = useState();
  const [seletedTime, setSelectedTime] = useState();
  const [seletedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  

  const {user}=useAuth()
  useEffect(() => {
  getTime();  
  }, []);


  const addBooking = async () => {
    if (seletedDate && seletedTime && user) {
      try {
        const timestamp = seletedDate.getTime();
        await addDoc(collection(db, 'book'), {
          time: seletedTime ,
          date: timestamp ,
          businessName: serviceName,
          businessId: serviceId,
          businessImage : serviceImage,
          username: user?.username,
          userEmail: user?.email,
        
        });
  
        setSelectedTime('');
        setSelectedDate(null);
        setNote('');
      } catch (error) {
        console.error('Error adding Booking:', error);
      }
    }
  };
  
  

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }
    setTimeList(timeList);
  }
 
  return (
    <ScrollView>
      <KeyboardAvoidingView >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => hideModel()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="black"
          />
          <Text style={styles.txt} >
            Booking
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading} >Select Date</Text>
        {/* calender section */}
        <View style={styles.calender}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor='#003C43'
            todayTextStyle={{ color: 'white' }}
            selectedDayColor='#E3FEF7'
            selectedDayTextColor='black'
          />
        </View>
        {/* time select section */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.heading} >Select Time Slot</Text>

          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => setSelectedTime(item.time)}>
                <Text style={[seletedTime == item.time ? styles.selectedtime : styles.unselectedtime]}>{item.time}</Text>

              </TouchableOpacity>
            )}
          />
        </View>
        {/* note section */}
        <View style={{ paddingTop: 10 }} >
          <Text style={styles.heading} >Any Suggestion Note </Text>
          <TextInput
            placeholder='note'
            numberOfLines={4}
            multiline={true}
            style={styles.textarea}
            onChange={(text) => setNote(text)}
          />
        </View>
        {/* confirmation button */}
        <TouchableOpacity onPress={addBooking} style={{ marginTop: 10 }}>
          <Text style={styles.confirmbtn}>confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
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
  calender: {
    backgroundColor: "#77B0AA",
    padding: 20,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btn: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 20,
  },
  txt: {
    fontSize: 22,
  },
  heading: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  unselectedtime: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#003C43',
    borderRadius: 99,
    paddingHorizontal: 18,
    color: '#003C43'
  },
  selectedtime: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#003C43',
    borderRadius: 99,
    paddingHorizontal: 18,
    color: 'white',
    backgroundColor: '#135D66'
  },
  textarea: {
    margin: 8,
    paddingLeft: 13,
    paddingTop: 13,
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    fontSize: 16,
    borderColor: '#003C43'
  },
  confirmbtn: {
    textAlign: 'center',
    backgroundColor: '#003C43',
    color: 'white',
    fontSize: 17,
    padding: 13,
    borderRadius: 99,
    elevation: 2,
    marginLeft: 8,
    marginRight: 8,
  },
});