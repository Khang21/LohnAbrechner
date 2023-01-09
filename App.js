import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Number from './assets/Components/Number';
import Test from './assets/Components/Test';



export default function App() {


  const [brutto, setBrutto] = useState('0');
  const [age, setAge] = useState('0');
  const [heiratet, setHeiratet] = useState('0');
  const [kinder, setKinder] = useState('0');

  const image = { uri: "https://i.ibb.co/3cQDN4W/Untitled.png" };
  return (
    <ImageBackground source={image} style={styles.container} resizeMode='cover'>
      <Text style={styles.Header}>Lohn Abrechner</Text>
      <Text>Wie viel verdienen Sie Brutto?</Text>
      <TextInput style={styles.input} onChangeText={(val) => setBrutto(val)} />

      <Text>Wie alt sind sie?</Text>
      <TextInput style={styles.input} onChangeText={(val) => setAge(val)} />

      <Text>Sind Sie verheiratet?</Text>
      <TextInput style={styles.input} onChangeText={(val) => setHeiratet(val)} />

      <Text>Wie viele Kinder haben Sie?</Text>
      <TextInput style={styles.input} onChangeText={(val) => setKinder(val)} />

      <TouchableOpacity onPress={this.showNum} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text>Brutto:{brutto},age:{age},heiratet:{heiratet},kinder:{kinder}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtons: {
    flexDirection: 'row'
  },
  biggerText: {
    fontSize: 25
  },
  smallerText: {
    fontSize: 15
  },
  Header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 100,

  },
  aligner: {
    marginLeft: -50

  },
  submit: {

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#70D0E4",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 30,
    marginLeft: 0
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  }
});
