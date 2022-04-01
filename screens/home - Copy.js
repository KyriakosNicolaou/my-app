import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Home({navigation}) {
  const [menuButtons, setMenuButton] = useState([
    { name: 'New game using one device', link: "OneDeviceSettings", key:'1' },
    { name: 'New game using multiple devices', link: "MultyDeviceSettings", key:'2'},
    { name: 'Load previous game', link: "LoadGame", key:'3'},
    { name: 'Walkthrough', link: "Walkthrough", key:'4'},
  ]);

  const pressHandler = (link) =>{
    console.log(link);

    navigation.push(link);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Test 3asdasd</Text>
      </View>

      <FlatList 
        data={menuButtons} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.link)}>
            <EvilIcons name="question" size={24} color="black" />
            <Text style={styles.menuButton}>{item.name}</Text>
          </TouchableOpacity> 
        )}
      />

      <StatusBar style="auto" />
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
});
