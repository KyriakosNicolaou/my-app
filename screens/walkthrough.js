import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons'; 

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);

  const [modalText, setmodalText] = useState("Blank");

  const [menuButtons, setMenuButton] = useState([
    { name: 'Win Conditions', modalText: "Win Conditions LoremIpsum LoremIpsum LoremIpsum", key:'1' },
    { name: 'Lose Conditions', modalText: "LoseConditions LoremIpsum LoremIpsum LoremIpsum", key:'2'},
    { name: 'Event Cards', modalText: "EventCards LoremIpsum LoremIpsum LoremIpsum", key:'3'},
    { name: 'Infection Cards', modalText: "Walkthrough LoremIpsum LoremIpsum LoremIpsum", key:'4'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'5'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'6'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'7'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'8'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'9'}
  ]);

  const [menuButtons2, setMenuButton2] = useState([
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'1'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'2'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'3'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'4'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'5'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'6'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'7'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'8'},
    { name: 'Lorem ipsum', modalText:"LoremIpsum", key:'9'}
  ]);

  const pressHandler = (item) =>{
    setModalOpen(true)
    setmodalText(item.modalText)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Walkthrough</Text>
      </View>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <Text>{modalText}</Text>
        </View>
      </Modal>

      <View style={styles.container1}>
        <FlatList 
          data={menuButtons} 
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={() => pressHandler(item)}>
              <EvilIcons style={styles.questionContainer} name="question" size={50} color="black" />
            </TouchableOpacity> 
              <Text style={styles.menuButton}>{item.name}</Text>
            </View>  
          )}
        />

        <FlatList 
          data={menuButtons2} 
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={() => pressHandler(item)}>
              <EvilIcons style={styles.questionContainer} name="question" size={50} color="black" />
            </TouchableOpacity> 
              <Text style={styles.menuButton}>{item.name}</Text>
            </View>
          )}
        />
      </View>

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
    padding : 25,
    marginTop: 50
  },

  headerText: {
    color : '#C90',
    fontSize: 50,
    fontWeight: 'bold'
  },

  questionContainer: {
    flex:1,
    fontSize: 30,
    borderColor:'blue',
    borderWidth:1,
    backgroundColor: '#5CF',
  },

  buttonContainer: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    flexDirection:"row",
    backgroundColor: 'cyan',
    borderColor:'blue',
    borderWidth:5,
  },

  container1: {
    flex:1,
    flexDirection:"row",
    paddingTop: 30,
  },

  container2: {
    flex:1,
    padding: 160,
  },

  modalToggle: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },

  modalOpen: {
    marginTop: 20,
    marginBottom: 0,
  },

  modalContent: {
    marginTop: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
