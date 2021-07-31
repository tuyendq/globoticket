import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Logo } from './src/components/Logo';
import Home from './src/components/Home';



export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content'  hidden/>
      <Home username="Tuyen Dang" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }

});
