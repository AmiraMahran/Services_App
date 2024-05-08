// Reviews.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { db } from '../FirebaseConfig';
import { addDoc, collection, doc, serverTimestamp, setDoc, onSnapshot } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from '../firebase/auth';

const Reviews = ({ serviceId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth();
  useEffect(() => {
    const commentsRef = collection(db, `services/${serviceId}/comments`);
    const unsubscribe = onSnapshot(commentsRef, async (snapshot) => {
      const commentArray = snapshot.docs.map((doc) => doc.data());
      setComments(commentArray);
      await AsyncStorage.setItem('comments', JSON.stringify(commentArray));
    });

    return () => {

      unsubscribe();
    };
  }, [serviceId]);

  const addComment = async () => {
    if (newComment.trim()) {
      try {

        await addDoc(collection(db, `services/${serviceId}/comments`), {
          text: newComment,
          timestamp: serverTimestamp(),
          username: user?.username,
          profileUrl: user?.profileUrl
        });
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };


  const formatTimestamp = (timestamp) => {
    const t = new Date(timestamp.seconds * 1000); // Convert to milliseconds
    const hours = t.getHours();
    const minutes = t.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedDate = `${t.toString().split(' ')[0]}, ${t.getDate()}/${t.getMonth() + 1}/${t.getFullYear()} - ${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedDate;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Reviews</Text>
      <View style={styles.commentsContainer}>
        <FlatList
          data={comments}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
           keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentCard}>
              <View style={styles.userContainer}>
                <Image
                  source={{ uri: item.profileUrl }} // Ensure profileUrl is valid
                  style={styles.profileImage}
                />
                <Text style={styles.commentUser}>{item.username}</Text>
              </View>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          )}
        />

      </View>


      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a comment"
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
          style={styles.inputField}
        />
        <Pressable onPress={addComment} style={styles.sendButton}>
          <Feather name="send" size={20} color="#E3FEF7" />
        </Pressable>
      </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    width: '90%',
    marginLeft: '5%',
    padding: 10,
    marginBottom: 10,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:"#003c43"
    
    


  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:"center",
    color:'white'
  },
  commentsContainer: {
    backgroundColor: 'linear-gradient(to bottom, #0074D9, #00AEEF)',
    padding: 16,

  },
  commentText: {
    fontSize: 18,
    color: 'black',
    width: 90,
    


  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputField: {
    flex: 1,
    borderColor: '#003C43',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  sendButton: {
    backgroundColor: '#77b0aa',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make it circular
    marginRight: 8,
   
  },
  commentUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  commentCard: {
    backgroundColor: '#77b0aa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth:1,
    marginRight:8
  },
});

export default Reviews;

