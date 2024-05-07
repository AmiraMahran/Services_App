// Reviews.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { db } from '../FirebaseConfig';
import { addDoc, collection, doc, serverTimestamp, setDoc, onSnapshot } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Reviews = ({ serviceId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const commentsRef = collection(db, `services/${serviceId}/comments`);
    const unsubscribe = onSnapshot(commentsRef, async(snapshot) => {
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
      <Text style={styles.title}>Reviews</Text>
      <View style={styles.commentsContainer}>
        {comments.map((comment) => (

          <Text style={styles.commentText}>{comment.text}</Text>


        ))}
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  
    width: '70%',
    marginLeft: '15%',
    borderRadius: 10,
    padding: 10,
    marginBottom:"5%"
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentsContainer: {
    flexDirection: 'column-reverse',
    
  },
  commentText: {
    marginBottom: 8,
      backgroundColor: '#E3FEF7',
      borderRadius:5,
      

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
    backgroundColor: '#003C43',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default Reviews;

