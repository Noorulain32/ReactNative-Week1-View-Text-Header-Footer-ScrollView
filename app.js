import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import ScrollViewCom from './Components/ScrollViewCom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FlatlistCom from './Components/FlatlistCom';


export default function App() {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'gray',
    }}>
      <Header/>
      <ScrollViewCom/>
      <Footer/>
      <StatusBar style= "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
