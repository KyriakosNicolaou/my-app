import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function QA() {
  const [questions, setQuestions] = useState([
    { text: 'Question A', Author: "A", key:'1' },
    { text: 'Question B', Author: "B", key:'2' },
    { text: 'Question C', Author: "C", key:'3' },
  ]);

  const pressHandler = (key) =>{
    setQuestions(prevQuestions => {
      return prevQuestions.filter(questions => questions.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setQuestions(prevQuestions => {
        return [
          { text, Author, key: Math.random().toString() },
          ...prevQuestions
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Questions and answers</Text>
      </View>
      
      <FlatList 
        data={questions} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.menuButton}>{item.text}</Text>
          </TouchableOpacity> 
        )}
      />

      <TouchableOpacity onPress={() => submitHandler("New question")}>
        <Text style={styles.menuButton}>+</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    color : '#00F',
    fontSize: 50,
    fontWeight: 'bold'
  },

  header: {
    backgroundColor : '#FF0',
    padding : 45,
    marginTop: 50
  },

  headerText: {
    color : '#C90',
    fontSize: 50,
    fontWeight: 'bold'
  },

  menuButton: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'cyan',
    fontSize: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
