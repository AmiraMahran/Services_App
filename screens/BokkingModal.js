import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { useEffect, useState } from 'react';
export default function BokkingModal({ hideModel }) {
  const [timeList, setTimeList] = useState();
  const [seletedTime, setSelectedTime] = useState();
  const [seletedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    getTime();
  }, [])
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
    <View>
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
          todayBackgroundColor='black'
          todayTextStyle={{ color: 'white' }}
          selectedDayColor='blue'
          selectedDayTextColor='white'
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
          onChange={(text)=>setNote(text)}
          />
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
  calender: {
    backgroundColor: "rgb(147, 147, 235)",
    padding: 20,
    borderRadius: 15,
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
    borderColor: 'blue',
    borderRadius: 99,
    paddingHorizontal: 18,
    color: 'blue'
  },
  selectedtime: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 99,
    paddingHorizontal: 18,
    color: 'white',
    backgroundColor: 'blue'
  },
  textarea: {
    margin: 8,
    paddingLeft: 13,
    paddingTop: 13,
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    fontSize:16,
    fontFamily:'outfit',
    borderColor:'blue'
  },
});
