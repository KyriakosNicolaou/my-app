import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  const [menuButtons, setMenuButton] = useState([
    { name: 'SetupScreen2', link: "BoardSetup2", key:'1' },
  ]);

  const pressHandler = (link) =>{
    console.log(link);
    if(link == 'Back'){
      navigation.goBack();
    };

    navigation.push(link);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>BoardSetup 1</Text>
      <Text style={styles.Text}>LoremIpsum</Text>
      <Text style={styles.Text}>LoremIpsum</Text>
      <Text style={styles.Text}>LoremIpsum</Text>
      <FlatList 
        data={menuButtons} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.link)}>
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
});
